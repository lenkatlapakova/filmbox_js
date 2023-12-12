const tlacitkoMenu = document.querySelector('#menu-tlacitko');
const polozkyMenu = document.querySelector('#menu-polozky');
const fasIkonka = document.querySelector('.fas');

if (tlacitkoMenu && polozkyMenu && fasIkonka) {
  const prepnoutMenu = () => {
    if (polozkyMenu.classList.contains('show')) {
      polozkyMenu.classList.remove('show');
      fasIkonka.classList.remove('fa-xmark');
      fasIkonka.classList.add('fa-bars');
    } else {
      polozkyMenu.classList.add('show');
      fasIkonka.classList.add('fa-xmark');
      fasIkonka.classList.remove('fa-bars');
    }	
  }

  tlacitkoMenu.addEventListener('click', prepnoutMenu);
} else {
  console.error('nenalezeno');
}
