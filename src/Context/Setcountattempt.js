export const Setcountattempt = (obj) => {
  let count = 0;
  obj.forEach((item) => {
    if (item.attempted) count++;
  });
  return count;
};
