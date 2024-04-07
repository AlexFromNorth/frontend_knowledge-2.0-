export const filter = (arr, document) => {
  return arr.filter((el) => el.id == document);
};

export function getKeyByValueNegate(obj, value) {
  return Object.keys(obj).filter((key) => key != value);
}
