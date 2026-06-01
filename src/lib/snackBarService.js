// snackbarService.js
let showMessageFn = null;

export const setShowMessage = (fn) => {
  showMessageFn = fn;
};

export const showMessage = (message, type = "info") => {
  if (showMessageFn) {
    showMessageFn(message, type);
  } else {
    console.warn("Snackbar not initialized:", message);
  }
};
