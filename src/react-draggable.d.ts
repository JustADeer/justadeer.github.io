declare module 'react-draggable' {
  import * as React from 'react';

  export interface DraggableProps {
    children?: React.ReactNode;
    axis?: 'x' | 'y' | 'both';
    handle?: string | HTMLElement | null;
    defaultPosition?: { x: number; y: number };
    position?: { x: number; y: number } | null;
    onStart?: (e: MouseEvent | TouchEvent, data: DraggableData) => void | false;
    onDrag?: (e: MouseEvent | TouchEvent, data: DraggableData) => void | false;
    onStop?: (e: MouseEvent | TouchEvent, data: DraggableData) => void | false;
    onMouseDown?: (e: MouseEvent) => void;
    disabled?: boolean;
    nodeRef?: React.RefObject<HTMLElement>;
    defaultClassName?: string;
    defaultClassNameDragging?: string;
    defaultClassNameDragged?: string;
    defaultClassNameHandle?: string;
    snapToGrid?: boolean;
    grid?: [number, number];
    allowAnyClick?: boolean;
    bounds?: string | { left: number; top: number; right: number; bottom: number } | null;
    offset0?: number;
    offset1?: number;
    offset2?: number;
    cancel?: string;
    rootNode?: 'self' | ((props: any) => React.ReactElement | null);
    scale?: number;
    preventDefault?: boolean;
    stopPropagation?: boolean;
    enableUserSelectHack?: boolean;
    enableFixedSupport?: boolean;
    reset?: boolean | string;
    className?: string;
    style?: React.CSSProperties;
    contentOffset?: { top: number; left: number };
    innerRef?: React.Ref<HTMLElement>;
  }

  export interface DraggableData {
    node: HTMLElement;
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
    lastX: number;
    lastY: number;
  }

  const Draggable: React.ForwardRefExoticComponent<DraggableProps & React.RefAttributes<unknown>>;
  export default Draggable;
}
