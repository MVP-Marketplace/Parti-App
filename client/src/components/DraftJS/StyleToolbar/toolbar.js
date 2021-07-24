import React, { Component } from 'react';

import createEmojiPlugin from '@draft-js-plugins/emoji';
import "@draft-js-plugins/emoji/lib/plugin.css";
// import Emoji from "./Emoji/emoji";

import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';

import createToolbarPlugin from '@draft-js-plugins/static-toolbar';

import {
  ItalicButton,
  BoldButton,
  UnderlineButton
} from '@draft-js-plugins/buttons';
import editorStyles from './toolbar.css';

const toolbarPlugin = createToolbarPlugin();
const emojiPlugin = createEmojiPlugin();
const { Toolbar } = toolbarPlugin;
const plugins = [toolbarPlugin, emojiPlugin];
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
const text =
  'Enter text here';

export default class CustomToolbarEditor extends Component {
  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  componentDidMount() {
    // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      editorState: createEditorStateWithText(text),
    });
  }

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div>
        <div className={editorStyles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => {
              this.editor = element;
            }}
          />
          <EmojiSuggestions />
          <Toolbar>
            {  
              // may be use React.Fragment instead of div to improve perfomance after React 16
              (externalProps) => (
                <div>
                  <BoldButton {...externalProps} />
                  <ItalicButton {...externalProps} />
                  <UnderlineButton {...externalProps} />
                  <EmojiSelect {...externalProps}/>
                </div>
              )
            }
          </Toolbar>
        </div>
      </div>
    );
  }
}