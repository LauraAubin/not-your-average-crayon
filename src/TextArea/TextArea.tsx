import React, {useRef, ChangeEvent} from 'react';
import {useMouseCoordinates, useTextAreaContent} from './hooks';

import './TextArea.scss';

export function TextArea() {
  const TextAreaRef = useRef<HTMLDivElement>(null);

  const {mouseCoordinates, trackMouse} = useMouseCoordinates();
  const {text, setText, doppelgangerText} = useTextAreaContent({
    TextAreaRef,
    mouseCoordinates,
  });

  function updateText({target: {value}}: ChangeEvent<HTMLTextAreaElement>) {
    setText(value);
  }

  return (
    <div>
      <div style={{display: 'flex'}}>
        <div ref={TextAreaRef} className="TextAreaDoppelganger">
          {doppelgangerText}
        </div>
      </div>

      <textarea
        className="TextArea"
        value={text}
        onChange={updateText}
        onMouseDown={trackMouse}
      />
    </div>
  );
}
