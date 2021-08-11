export const wait = (ms = 800) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

export const createGetId = initialId => () => ++initialId;


export const getTimestamp = () => `${new Date().getFullYear()} -
${new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getDate() + 1} -
${new Date().getDate() + 1 < 10 ? '0' + new Date().getDate() : new Date().getDate()} - 
${new Date().getHours()}:${new Date().getMinutes() + 1 < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}`;

export const throwError = id => {
  throw new Error(`Record with ID ${id} does not exist`);
};
