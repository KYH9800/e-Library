// export const backURL = 'http://localhost:3065';
// export const backURL = 'http://13.209.21.186';
export const backURL =
  process.env.NODE_ENV === 'production' ? 'http://api.coding-factory.site' : 'http://localhost:3065';
