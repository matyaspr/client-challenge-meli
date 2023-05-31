export const formatDecimals = (x:number) => {
  if (x === 0) return '00';
  if (x < 10) return 0 + '' + x;
  return x + '';
};
