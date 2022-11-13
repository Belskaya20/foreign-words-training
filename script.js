const flipCard = document.querySelector('.flip-card');
const cardFront = document.querySelector('#card-front h1');
const cardBack = document.querySelector('#card-back h1');
const cardExample = document.querySelector('#card-back span');
const buttonShuffle = document.querySelector('#shuffle-words');
const buttonExam = document.querySelector('#exam');
const buttonBack = document.querySelector('#back');
const buttonNext = document.querySelector('#next');
const studyBlock = document.querySelector('.study-cards');
const studyMode = document.querySelector('#study-mode');
const examMode = document.querySelector('#exam-mode');



//Карточки на одной стороне (#card-front) содержат иностранное слово, а на другой (#card-back) — его перевод и пример использования
function random() {
  //записала эту штуку отдельными массивами
  const words = {
    cat: 'Cat',
    book: 'Book',
    coffee: 'Coffee',
    orange: 'Orange',
    children: 'Children',
    people: 'People',
    animal: 'Animal',
    grass: 'Grass',
    mirror: 'Mirror',
    strawberry: 'Strawberry'
  };

  const translate = {
    cat: 'Кот',
    book: 'Книга',
    coffee: 'Кофе',
    orange: 'Оранжевый',
    children: 'Дети',
    people: 'Люди',
    animal: 'Животное',
    grass: 'Трава',
    mirror: 'Зеркало',
    strawberry: 'Клубника'
  };

  const example = {
    cat: 'Сat with big green eyes',
    book: 'Read book carefully',
    coffee: 'Cup of coffee in the morning',
    orange: 'Orange flower on the table',
    children: 'Children on the playground',
    people: 'These are people from England',
    animal: 'There are a lot of animals in this zoo',
    grass: 'They are sitting on the grass and having picnic',
    mirror: 'Look in the mirror!',
    strawberry: 'My favorite berries are strawberries'
  };



  const randWord = Math.floor(Math.random() * (Object.keys(words).length));

  const wordShow = Object.keys(words);
  cardFront.innerHTML = (wordShow[random]);
  const translateShow = Object.values(translate);//при перевороте карточки пишет Undefined
  cardBack.innerHTML = (translateShow[random]);
  const exampleShow = Object.values(example);//при перевороте карточки пишет Undefined
  cardExample.innerHTML = (exampleShow[random]);


  return wordShow[randWord];
}

cardFront.innerHTML = random();


//Поворот карточки с добавлением класса active
flipCard.addEventListener("click", (event) => {
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

//Перелистывание карточек вперед-назад
//Наверное допустила ошибку, не работает
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
  buttonBack.classList.toggle('disabled', slider === 0);
  buttonNext.classList.toggle('disabled', slider === --slider.length);
}

//Переключение между режимами
//Добавила класс hidden, работает
buttonExam.addEventListener("click", (event) => {
  studyBlock.classList.add("hidden");
  studyMode.classList.add("hidden");
  examMode.classList.remove("hidden");
})