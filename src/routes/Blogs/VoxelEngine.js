import React from 'react';

import ImageWithText from '../../components/ImageWithText.js';
import EoFPadding from '../../components/EoFPadding.js';

import '../../css/Blog.css';

const images = require.context('../../images/VoxelEngine_Blog', true);

function VoxelBlog() {
    return (
        <div className='blog-div'>

            <div>
                <h1 style={{lineHeight:'1em'}}>Voxel Engine</h1>
                Jonathan Borghese<br></br>
                July 9th, 2024
            </div>

            <p>I have always wanted to make my own voxel engine but have struggled when it came to optmization. There are 3 approaches I have outlined in this post, each performing better than the next.</p>

            <h2>What is a Voxel?</h2>

            <p>A voxel is a point in 3d space, aligned to a grid. The metadata saved at each point changes for each use case but when it comes to collision, it is either on or off.</p>

            <p>The most popular example of a procedural voxel generation is <i>Minecraft.</i></p>

            <h2>Making a Cube</h2>

            <p>In games, meshes, collision maps, and textures are all made up of triangles. A triangle consists of three vertices and a normal vector. The normal vector dictates which way the triangle is facing. Each face of a cube would require 2 triangles and there are 6 faces in a cube so 12 triangles total for a single cube.</p>

            <ImageWithText image={images('./Greedy4x4Full.PNG')} text='One side of a single Cube' width='400px'/>

            <p>The number of vertices in a cube is 8, one for each corner. Each vertex is part of 6 different triangles. The goal is to find the minimum number of required triangles and vertices to make a given mesh. The fewer there are, the faster the code will run.</p>

            <h2>Making a Chunk</h2>

            <p>Typically, the world is subdivided into chunks, each chunk holding a grid of voxels. This allows only part of the world to be loaded at a single time as well as makes parallel loading of the world easy to implement. From here on, I will be talking at the chunk level when it comes to optimization.</p>

            <h2>Naive Approach</h2>

            <p>The Naive Approach is to simply draw every block. The benefit of this is that it is easy to implement, and terrain modification does not require any recomputing of the mesh triangles and vertices. The downside is obviously that it is very inefficient. The majority of the triangles drawn are not exposed and therefore is wasted performance. </p>

            <ImageWithText image={images('./Naive4x4Full.PNG')} text='4x4x4 Chunk' width='400px'/>

            <p>Say we have a 16 x 16 x 16 chunk. That means there are 4096 blocks or <b>49152 Triangles</b></p>

            <h2>Culled Meshing</h2>

            <p>Culled Meshing is the same as the Naive approach except faces are not drawn unless they are exposed. This is done by only drawing faces that are at the intersection between 'off' and 'on' voxels. The vast majority of faces are not being shown and thus this improves optimization. Best case senario for a 16x16x16 chunk is <b>3072 Triangles</b> and the worst case is <b>24576 Triangles</b>. This is a <b>%50-%95</b> reduction of triangles! This is great and all but we can do better.</p>

            <ImageWithText image={images('./Culled4x4Full.PNG')} text='Culled Meshing Best Case Example' width='400px'/>

            <p>Fun fact: <i>Minecraft</i> uses the culled meshing algorithm for its collision</p>

            <h2>Greedy Meshing</h2>

            <p>Greedy Meshing is a technique of combining faces of adjacent blocks. Take a look at the following chunks:</p>


            <div style={{display:'flex', justifyContent:'center'}}>
                <ImageWithText image={images('./Culled4x4NotFull.PNG')} text='Culled Meshing Example' width='400px'/>
                <ImageWithText image={images('./Greedy4x4NotFull.PNG')} text='Greedy Meshing Example' width='400px'/>
            </div>

            <p>The Left chunk is drawn using culled meshing while the right chunk is drawn using greedy meshing. By combining all possible faces, The number of triangles that need to be drawn have been dramatically reduced! This improvement might not seem like much but when there are tens of thousands of blocks in a world, it makes a gigantic difference.</p>

            <h2>Implementation</h2>

            <p>How the algorithm works: First, take the first face of a mesh. Expand the face in one direction as much as it can. Faces that have already been visited or faces that don't exist stop this expansion. Next, expand the collective faces in the other direction as much as they can. Find the next face that hasn't been visited and repeat this process until all faces on the current plane has been visited. After that is done, repeat this process for each plane of chunk.</p>

            <p>For a 4x4x4 chunk, there will be 4 XY planes, 4 XZ Planes, and 4 YZ Planes so this process is done 12 times. Each time the mesh is modified, this process needs to be repeated as well; therefore, smaller chunk sizes are preferred to minimize the impact of this algorithm.</p>

            <p>For a nice demonstration, I would suggest this blog: <a href="https://devforum.roblox.com/t/consume-everything-how-greedy-meshing-works/452717">How Greedy Meshing Works</a></p>

            <h2>Further Reading</h2>

            <p>If your interested in a more advanced technique for drawing meshes, I would suggest looking into the <b>Marching Cubes Algorithm.</b> This algorithm converts simple square voxel meshes into smoothed, truangular surfaces all using the same voxel information.</p>

            <EoFPadding length='10' />

        </div>
    );
}

export default VoxelBlog;