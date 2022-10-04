import React from 'react';

import './TextArea.scss';

export function TextArea() {
  return (
    <div className="TextArea-Container">
      <textarea className="TextArea" minLength={200} />
    </div>
  );
}
