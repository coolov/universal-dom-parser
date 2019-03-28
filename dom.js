if (typeof window === 'undefined') {
  throw new Error(
    'The window object is not availible. Are you trying to run the module in NodeJS?'
  );
}

module.exports = window.DOMParser;
