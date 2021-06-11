'use strict';
// создаю главный объект
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    // исключаем пустые строки и тд
    start: function() {
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    // цикл вопросов св-ва объекта movies оборачиваю в функцию,чтоб вызывалась по назначению
    rememberMyFilms: function() {
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
    },
    // условие уровня кинопросмотренности 
    detectPersonalLevel: function() {
        if (personalMovieDB.count <= 10) {
            alert ('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count <= 30) {
            alert ('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert ('Вы киноман');
        } else {
            alert ('Произошла ошибка');
        }
    },
    // функция проверяет свойство privat
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } 
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    // Создаю функцию writeYourGenres с вопросами о 3х жанрах
    writeYourGenres: function() {
        for(let i = 1; i <=3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();
            if (genre == '' || genre == null) {
                console.log('WRONG!!! you dickhead');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }            
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });   
    }
};
