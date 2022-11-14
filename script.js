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
const examCards = document.querySelectorAll('#exam-cards');
let currentWord = document.querySelector('#current-word');
let totalWord = document.querySelector('#total-word');



//Карточки на одной стороне (#card-front) содержат иностранное слово, а на другой (#card-back) — его перевод и пример использования
function random() {
  //записала это отдельными массивами
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


  //рандомный выбор слова
  const randWord = Math.floor(Math.random() * (Object.keys(words).length));

  const wordShow = Object.keys(words);
  cardFront.innerHTML = (wordShow[randWord]);
  const translateShow = Object.values(translate);
  cardBack.innerHTML = (translateShow[randWord]);
  const exampleShow = Object.values(example);
  cardExample.innerHTML = (exampleShow[randWord]);


  return wordShow[randWord];
}

cardFront.innerHTML = random();


//Поворот карточки с добавлением класса active
flipCard.addEventListener("click", (event) => {
  flipCard.classList.add('active');
})
//нумерация карточек
currentWord.value = 1;
totalWord.value = 5;

function conciderWord() {
  currentWord.value++;
  currentWord.innerHTML = currentWord.value * 1;
}

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
//Добавила класс hidden, но не уверенна,что работает переключение в режим проверки знаний, не появляются карточки
buttonExam.addEventListener("click", (event) => {
  studyBlock.classList.add("hidden");
  studyMode.classList.add("hidden");
  examMode.classList.remove("hidden");
})



//Режим проверки знаний

//переворачиание карточек
let hasFlippedCard = false;
let firstCard;
let secondCard;
let lockBoard = false;


function flipCards() {
  if (lockBoard) return;
  if (this === firstCard) return;

  examCards.classList.add('flip');
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return
  }

  secondCard = this;

  checkForMatch();
}

//сравнение карт
function checkForMatch() {
  firstCard.classList.add('correct');//первой карточке добавление класса  correct
  if (firstCard === secondCard) {
    firstCard.classList.add('fade-out');//совпадение карточек, записала добавление класса здесь
    secondCard.classList.add('fade-out');
    disableCards();
  } else {
    secondCard.classList.add('wrong');//если не верно подобраны
    return;
  }

  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();

  }, 1500);
}

//нажатие той же карты,проверка
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

//перемешивание карточек по клику на кнопку 

buttonShuffle.addEventListener('click', function() {
  flipCard.classList.remove("active");
  setTimeout(() => {
      random();
  }, 100);
});

examCards.forEach(card => card.addEventListener('click', flipCards));

//не могу разобраться как записать если карточки все ушли с поля и вывести alert
//function finishCard() {
//  if() {
//    alert('Вы успешно прошли задание!');
//  }
//}
//finishCard();