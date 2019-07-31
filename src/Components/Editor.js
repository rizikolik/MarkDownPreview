import React from "react";
import marked from "marked";

class Editor extends React.Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this)
    }
handleChange(e){
    let preview=document.getElementById("preview");
    preview.innerHTML=marked(e.target.value)
}

render(){
    {
        <div>
        <h1>This is a h1 </h1>
        <h2>THİS is a h2 </h2>
        <a href="#"> this is a link =></a>
        </div>
    }
    return(
<div className="editor-wrapper">
<textarea  id="editor" onChange={this.handleChange}>
Hello this is init
</textarea>

</div>


    )
}
}
export default Editor;