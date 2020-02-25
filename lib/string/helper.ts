export const bodyAssemblyHeadToUpperCase = (value: string): string => {
  var spliting = value.split("");
  spliting[0] = spliting[0].toUpperCase();
  return spliting.join("");
};
