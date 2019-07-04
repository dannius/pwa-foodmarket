window.addEventListener('load', () => {
  const toggler = document.querySelector('#menu-btn');
  const asideMenu = document.querySelector('#aside');

  toggler.addEventListener('click', () => {
    asideMenu.classList.toggle('aside__expanded');
  });
});
