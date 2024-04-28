import React from 'react';

import hljs from 'highlight.js/lib/core'
import python from 'highlight.js/lib/languages/python'

import '../css/highlightJS/atom-one-light.css'

hljs.registerLanguage('python', python);

class CodeBlock extends React.Component {

    render() {

        const html = hljs.highlight(this.props.code, {language:'python'}).value

        return <><pre className='CodeBlockClass' dangerouslySetInnerHTML={{__html:html}}></pre></>
    }

}

export default CodeBlock;