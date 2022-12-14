'use client';
import React from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.js';

const ToastEditor = ({ editorRef }) => {
  const toolbarItems = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr'],
    ['ul', 'ol', 'task'],
    ['table', 'link'],
    ['image'],
    ['code'],
    ['scrollSync'],
  ];

  return (
    <div>
      {' '}
      <Editor
        ref={editorRef}
        initialValue="" // 글 수정 시 사용
        initialEditType="markdown" // wysiwyg & markdown
        hideModeSwitch={true}
        height="500px"
        usageStatistics={false}
        toolbarItems={toolbarItems}
        plugins={[colorSyntax, codeSyntaxHighlight]}
      />
    </div>
  );
};

export default ToastEditor;
