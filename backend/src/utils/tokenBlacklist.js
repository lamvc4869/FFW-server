const tokenBlacklist = new Set();

const addToBlacklist = (token) => {
  tokenBlacklist.add(token);
  console.log(`Token added to blacklist. Total blacklisted tokens: ${tokenBlacklist.size}`);
};

const isTokenBlacklisted = (token) => {
  return tokenBlacklist.has(token);
};

const removeFromBlacklist = (token) => {
  tokenBlacklist.delete(token);
  console.log(`Token removed from blacklist. Total blacklisted tokens: ${tokenBlacklist.size}`);
};

const getBlacklistSize = () => {
  return tokenBlacklist.size;
};

const clearBlacklist = () => {
  tokenBlacklist.clear();
  console.log('Token blacklist cleared');
};

export {
  addToBlacklist,
  isTokenBlacklisted,
  removeFromBlacklist,
  getBlacklistSize,
  clearBlacklist
};
