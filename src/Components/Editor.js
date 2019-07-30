import React from "react";

class Editor extends React.Component{
    constructor(props){
        super(props);
    }


render(){
    return(
<div className="editor-wrapper">
<textarea  id="editor">
Hello this is init
</textarea>

</div>


    )
}
}
export default Editor;