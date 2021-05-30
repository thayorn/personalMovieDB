'use strict';
// создаю переменную с вопросами о фильмах с функцией, отменяющей 'тупые' =) ответы
let numberOfFilms;
function start(){
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

// создаю главный объект
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// цикл вопросов св-ва объекта movies оборачиваю в функцию,чтоб вызывалась по назначению
function rememberMyFilms(){
    for (let i = 0; i < 2; i++) { 
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = +prompt('На сколько оцените его', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('all right');
        } else {
            console.log('error');
            i--;
        }
    }
}
// rememberMyFilms(); 

// тренировка разных циклов
// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = +prompt('На сколько оцените его', '');
//           personalMovieDB.movies[a] = b;
//           i++;
//           console.log('all right');
//         }

// let i = 0;
// do  {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = +prompt('На сколько оцените его', '');
//           personalMovieDB.movies[a] = b;
//           i++;
//           console.log('all right');
//         }
// while (i < 2);

// условие уровня кинопросмотренности 
function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        alert ('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count <= 30) {
        alert ('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert ('Вы киноман');
    } else {
        alert ('Произошла ошибка');
    }
}
// detectPersonalLevel();

// функция проверяет свойство privat
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } 
}
showMyDB(personalMovieDB.privat);

// Создаю функцию writeYourGenres с вопросами о 3х жанрах
function writeYourGenres() {
    for(let i = 1; i <=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }    
}
writeYourGenres();
// выводим в консоль главный объект
