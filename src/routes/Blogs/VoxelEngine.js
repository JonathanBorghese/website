import React from 'react';

import '../../css/Blog.css';

function VoxelBlog() {
    return (
        <div className='blog-div'>

            <div>
                <h1 style={{lineHeight:'1em'}}>My Voxel Engine</h1>
                Jonathan Borghese<br></br>
                (Insert Date Here)
            </div>

            <p>I have always wanted to make my own voxel engine but have struggled when it came to optmization. There are 3 approaches I have outlined in this post, each performing better than the next.</p>

            <h2>What is a Voxel?</h2>

            <p>A voxel is a point in 3d space, aligned to a grid. The metadata saved at each point changes for each use case but when it comes to collision, it is either on or off.</p>

            <p>The most popular example of a procedural voxel generation is <i>Minecraft.</i></p>

            <h2>Making a Cube</h2>

            <p>In games, meshes, collision maps, and textures are all made up of triangles. A triangle consists of three vertices and a normal vector. The normal vector dictates which way the triangle is facing. Each face of a cube would require 2 triangles and there are 6 faces in a cube so 12 triangles total for a single cube.</p>

            <p>The number of vertices in a cube is 8, one for each corner. Each vertex is part of 6 different triangles. The goal is to find the minimum number of required triangles and vertices to make a given mesh. The fewer there are, the faster the game will run.</p>

            <h2>Making a Chunk</h2>

            <p>Typically, the world is subdivided into chunks, each chunk holding a grid of voxels. This allows only part of the world to be loaded at a single time as well as makes parallel loading of the world easy to implement. From here on, I will be talking at the chunk level when it comes to optimization.</p>

            <h2>Naive Approach</h2>

            <p>The Naive Approach is to simply draw every block. The benefit of this is that it is easy to implement, and terrain modification does not require any recomputing of the mesh triangles and vertices. The downside is obviously that it is very inefficient. The majority of the triangles drawn are not exposed and therefore is wasted performance. </p>

            <p>Say we have a 16 x 16 x 16 chunk. That means there are 4096 blocks or <b>65536 Triangles</b></p>

            <h2>Culled Meshing</h2>

            <p>Culled Meshing is the same as the Naive approach except faces are not drawn unless they are exposed. This is done by only drawing faces that are at the intersection between 'off' and 'on' voxels. </p>

            <p>Pseudo Code here</p>

            <h2>Greedy Meshing</h2>

            <h2>Implementation in Unreal Engine 5</h2>



        </div>
    );
}

export default VoxelBlog;