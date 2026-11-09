document.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (link) console.info('ضغط الزائر على رابط');
});
document.querySelector('#print-card').addEventListener('click', () => window.print());
