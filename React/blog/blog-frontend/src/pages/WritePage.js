import React from 'react';
import EditorContainer from '../containers/write/EditorContainer';
import TagBox from '../components/write/TagBox';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtons from '../components/write/WriteActionButtons';
import Responsive from '../components/common/Responsive';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBox />
      <TagBoxContainer />
      <WriteActionButtons />
    </Responsive>
  );
};
export default WritePage;