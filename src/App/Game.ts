export function observe(receive: any) {
  const randPos = () => Math.floor(Math.random() * 8);
  return setInterval(() => receive([randPos(), randPos()]), 500);
}

export function canMoveKnight(
  knightPosition: number[],
  { toX, toY }: { toX: number; toY: number }
) {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  );
}
