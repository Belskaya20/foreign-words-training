const flipCard = document.querySelector('.flip-card');
const cardFront = document.querySelector('#card-front');
const cardBack = document.querySelector('#card-back');
const buttonShuffle = document.querySelector('#shuffle-words');
const buttonExam = document.querySelector('#exam');



//Поворот карточки с добавлением класса active
document.addEventListener("click", (event) => {
  flipCard.classList.add('active');
})
//нумерация карточек
function makeCounter() {
  let i  = 1;
  return function() {
    return i++;
  };
}
let counter = makeCounter();


//Карточки на одной стороне (#card-front) содержат иностранное слово, а на другой (#card-back) — его перевод и пример использования
function random() {
  const words = [
    { name: 'Cat', translate: 'Кот', example: 'Сat with big green eyes' },
    { name: 'Milk', translate: 'Молоко', example: 'I love chocolate milk' },
    { name: 'Book', translate: 'Книга', example: 'Read book carefully' },
    { name: 'Pencil', translate: 'Карандаш', example: 'Write in a notebook with a pencil' },
    { name: 'Coffee', translate: 'Кофе', example: 'Cup of coffee in the morning' },
    { name: 'Small', translate: 'Маленький', example: 'Little white puppy' },
    { name: 'Orange', translate: 'Оранжевый', example: 'Orange flower on the table' },
    { name: 'Children', translate: 'Дети', example: 'Children on the playground' },
    { name: 'Husband', translate: 'Муж', example: 'She has a tall husband' }
  ];
  const randWord = Math.floor(Math.random());
  return words[randWord];
}

//С помощью стрелок можно листать карточки вперед-назад
//Добавила в верстку для div класс itcss
document.addEventListener('DOMContentLoaded', () => {
  const slider = new ItcSimpleSlider('.itcss');
  //обработчик при нажатии на кнопку back
  document.querySelector('#back').onclick = () => {
    slider.back();
  }
  //обработчик при нажатии на кнопку next
  document.querySelector('#next').onclick = () => {
    slider.next();
  }
  //блокировка стрелок
  back.classList.toggle('disabled', slider === 0);
  next.classList.toggle('disabled', slider === --slider.length);
});



//Режим проверки знаний 
const examCards = document.querySelector('#exam-cards');
buttonExam.addEventListener("click", (event) => {
  //не знаю как осуществить переход((
})