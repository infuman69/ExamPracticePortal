export const Setattempt = (selec, id, queobj) => {
  queobj[selec - 1].attempted = true;
  queobj[selec - 1].ansID = id;
  return queobj;
};
