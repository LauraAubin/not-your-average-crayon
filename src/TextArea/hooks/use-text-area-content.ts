import {useState, useEffect} from 'react';

interface Props {
  mouseCoordinates?: {
    x: number;
    y: number;
  };
}

export function useTextAreaContent({mouseCoordinates}: Props) {
  useEffect(() => {
    function addNewRows() {
      if (selectedRow > numberOfRows) {
        const newRowsDelta = selectedRow - numberOfRows;

        setText(text + '\n'.repeat(newRowsDelta));
      }
    }

    addNewRows();
  }, [mouseCoordinates]);

  const [text, setText] = useState<string>('Default txt');

  const selectedRow = mouseCoordinates?.y
    ? Number((mouseCoordinates?.y / 15).toFixed())
    : 1;
  const numberOfRows = text.split('\n').length;

  return {text, setText};
}
