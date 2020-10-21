export const set = (data, rootKey = 'default') => localStorage.setItem(rootKey, JSON.stringify(data));

export const get = (rootKey = 'default') => localStorage.getItem(rootKey);

export const clear = () => localStorage.clear();

export const isAuthenticated = () => get() != null;