import React, { Component } from "react";
import { EditorState, Editor, RichUtils } from "draft-js";
import Emoji from "./Emoji/emoji";
import "@draft-js-plugins/emoji/lib/plugin.css";

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  onUnderlineClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  };

  onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  };

  onItalicClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  };

  render() {
    return (
      <div className="editorContainer">
        <button onClick={this.onUnderlineClick}>U</button>
        <button onClick={this.onBoldClick}>
          <b>B</b>
        </button>
        <button onClick={this.onItalicClick}>
          <em>I</em>
        </button>
        <div className="editors">
          <Editor
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
          />
          <Emoji />
        </div>
      </div>
    );
  }
}

export default TextBox;
