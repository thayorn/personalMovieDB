'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = +prompt('На сколько оцените его', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('all right');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

let i = 0;
while (i < 2) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = +prompt('На сколько оцените его', '');
          personalMovieDB.movies[a] = b;
          i++;
          console.log('all right');
        }


// if (personalMovieDB.count <= 10) {
//     alert ('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count <= 30) {
//     alert ('Вы классический зритель');
// } else if (personalMovieDB.count > 30) {
//     alert ('Вы киноман');
// } else {
//     alert ('Произошла ошибка');
// }