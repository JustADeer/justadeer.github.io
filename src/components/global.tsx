const windowPosition = {
  about: { x: 0, y: 0 },
  portfolio: { x: 0, y: 0 },
  faq: { x: 0, y: 0 },
  contact: { x: 0, y: 0 },
};

type windowPositionType = typeof windowPosition;
export type windowPositionKey = keyof windowPositionType;
export default windowPosition;
