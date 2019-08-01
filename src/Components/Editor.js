import React from "react";
import marked from "marked";

var renderer = new marked.Renderer();
class Editor extends React.Component{
    constructor(props){
        super(props);
       this.state={
           value:`${this.props.placeholder}`
       }

        this.handleChange=this.handleChange.bind(this)
    
       
    }
  
      
    

    componentDidMount(){
        marked.setOptions({
    breaks:true
        });
        
        renderer.link = function( href, title, text ) {
          return '<a target="_blank" href="'+ href +'" title="' + title + '">' + text + '</a>';
        }  
    let preview=window.document.getElementById("preview");
    preview.innerHTML=marked(this.state.value,{renderer:renderer})
    }

handleChange(e){
    let preview=window.document.getElementById("preview");
    preview.innerHTML=marked(e.target.value,{renderer:renderer})
}





render(){
   
       
    
    return(
<div className="editor-wrapper">
<textarea  id="editor"defaultValue={this.state.value}  onChange={this.handleChange}>

</textarea>

</div>


    )
}
}
export default Editor;