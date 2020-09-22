export function rotateLeft(actualRotation: number) {
  return _rotate(actualRotation, -90);
}

export function rotateRight(actualRotation: number) {
  return _rotate(actualRotation, 90);
}

export function isValidRotation(angle) {
  return Number.isInteger(angle) && angle % 90 === 0;
}

function _rotate(actualRotation: number, degrees: number) {
  return (actualRotation + 360 + degrees) % 360;
}
