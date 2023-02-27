import React,{ Component, useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { FaPlusCircle } from "react-icons/fa";

export default class TextEditor extends Component{


  state = {
    editorState: EditorState.createEmpty()
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  }

  render() {
    const { editorState } = this.state;  
    // console.log(convertToRaw(editorState.getCurrentContent()))
  
    return (
    <div>
<Editor
  editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={this.onEditorStateChange}
/>
<div>
  <button onClick={()=>setItems(!items)}>
  <FaPlusCircle className='plus' />
  </button>
  <input type="file" onChange={this.handleFileInput} />
</div>

</div>
  )
}}

