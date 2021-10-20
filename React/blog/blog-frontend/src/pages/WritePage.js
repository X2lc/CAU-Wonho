import React from 'react';
import Editor from '../components/write/Editor';
import EditorContainer from '../containers/write/EditorContainer';
import TagBox from '../components/write/TagBox';
import WriteActionButtons from '../components/write/WriteActionButtons';
import Responsive from '../components/common/Responsive';

const WritePage = () => {
  return (
    <Responsive>
      <Editor />
      <EditorContainer />
      <TagBox />
      <WriteActionButtons />
    </Responsive>
  );
};
export default WritePage;