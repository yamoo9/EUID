const focusingTarget = (target) => {
  target.setAttribute('tabindex', -1);
  target.focus();
};

export default focusingTarget;
