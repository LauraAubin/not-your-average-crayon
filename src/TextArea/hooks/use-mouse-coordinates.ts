import {useState, MouseEvent} from 'react';

export function useMouseCoordinates() {
  const [mouseCoordinates, setMouseCoordinates] = useState<{
    x: number;
    y: number;
  }>();

  function trackMouse({
    nativeEvent: {offsetX: x, offsetY: y},
  }: MouseEvent<HTMLTextAreaElement>) {
    setMouseCoordinates({x, y});
  }

  return {mouseCoordinates, trackMouse};
}
