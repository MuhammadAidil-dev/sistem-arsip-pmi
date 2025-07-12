export const formatedDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

export const checkActivedSidebar = (url, checkUrl) => {
  return url === checkUrl;
};

export const saveToLocalStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const removeLocalStorage = (key) => {
  return localStorage.removeItem(key);
};
