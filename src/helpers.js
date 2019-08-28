export const properName = text => {
  const splitText = text.split("");
  const newText = splitText.map((t, i) => (i === 0 ? t.toUpperCase() : t));
  return newText.join("");
};
