import {useState, useEffect} from 'react';

// LINE_HEIGHT is also repeated in TextArea.scss
const LINE_HEIGHT = 15;
// Absolutely arbitrary
const SPACE_WIDTH = 4;
const NON_BREAKING_SPACE = String.fromCharCode(160);

interface Props {
  TextAreaRef: React.RefObject<HTMLDivElement>;
  mouseCoordinates?: {
    x: number;
    y: number;
  };
}

export function useTextAreaContent({TextAreaRef, mouseCoordinates}: Props) {
  const defaultText = 'Default';
  const [text, setText] = useState<string>(defaultText);
  const [doppelgangerText, setDoppelgangerText] = useState(defaultText);

  const {x, y} = mouseCoordinates ?? {};
  const rowWidth = TextAreaRef?.current?.clientWidth;

  useEffect(() => {
    const height = getTextAreaHeight();
    const selectedRow = getSelectedRow();

    const newSpaces = countNewSpaces();

    console.log('ADDING TEXT', {x, rowWidth, newSpaces});

    if (newSpaces >= 1) {
      addNewSpaces(newSpaces);
    }

    // if (selectedRow > height) {
    //   console.log('new rows', {newRows});
    //   setText((current) => current + '\n'.repeat(newRows));
    // }

    // addNewRows();
  }, [mouseCoordinates]);

  useEffect(() => {
    setDoppelgangerText(text);
  }, [text]);

  function getTextAreaHeight() {
    return text.split('\n').length;
  }

  function getSelectedRow() {
    return y ? Number((y / LINE_HEIGHT).toFixed()) : 1;
  }

  function countNewSpaces() {
    return (x! - rowWidth!) / SPACE_WIDTH;
  }

  function addNewSpaces(spaces: number) {
    setText(text + NON_BREAKING_SPACE.repeat(spaces));
  }

  return {text, setText, doppelgangerText};
}
