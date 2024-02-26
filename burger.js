const burger = document.querySelector('.burger-menu');
const navigation = document.querySelector('.nav');

burger.addEventListener('click', () => {
  navigation.classList.toggle('show-nav');
});
