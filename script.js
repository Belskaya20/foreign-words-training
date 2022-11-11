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
  let i = 1;
  return function () {
    return i++;
  };
}
let counter = makeCounter();


//Карточки на одной стороне (#card-front) содержат иностранное слово, а на другой (#card-back) — его перевод и пример использования
function random() {
  const words = [
    { name: 'Cat', translate: 'Кот', example: 'Сat with big green eyes' },
    { name: 'Book', translate: 'Книга', example: 'Read book carefully' },
    { name: 'Coffee', translate: 'Кофе', example: 'Cup of coffee in the morning' },
    { name: 'Orange', translate: 'Оранжевый', example: 'Orange flower on the table' },
    { name: 'Children', translate: 'Дети', example: 'Children on the playground' },
  ];
  const randWord = Math.floor(Math.random());
  return words[randWord];
}

//С помощью стрелок можно листать карточки вперед-назад

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slider = document.getElementsByClassName('slider');
  if (n > slider.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slider.length }
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }
  slider[slideIndex - 1].style.display = "block";
  //блокировка стрелок
  back.classList.toggle('disabled', slider === 0);
  next.classList.toggle('disabled', slider === --slider.length);
}



//Режим проверки знаний 
buttonExam.addEventListener("click", (event) => {
    document.getElementById("exam-mode").style.display = "block";
    document.getElementById("study-mode").style.display = "none";
})