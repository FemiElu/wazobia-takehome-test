import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faUnderline } from '@fortawesome/free-solid-svg-icons';

const Toolbar = ({ editorState, onBoldClick, onItalicClick, onUnderlineClick }) => {
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <div>
      <button onClick={onBoldClick}>
      <FontAwesomeIcon icon={faBold} />
      </button>
      <button onClick={onItalicClick}>
      <FontAwesomeIcon icon={faItalic} />
      </button>
      <button onClick={onUnderlineClick}>
      <FontAwesomeIcon icon={faUnderline} />
      </button>
    </div>
  );
};

export default Toolbar;