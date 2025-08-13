document.addEventListener('DOMContentLoaded', () => {
  console.log('Страница загружена');  
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      console.log(`Переход к секции: ${e.target.getAttribute('href')}`);
    });
  });
});
