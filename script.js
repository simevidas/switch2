{
  document.addEventListener('click', (ev) => {
    if (ev.target.tagName === 'H1') {
      document.documentElement.requestFullscreen?.();
    }
  });
}
