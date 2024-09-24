let movies = [
    {
        title: "Oppenheimer",
        studio: "Universal",
        month: "July",
        reviews: [10, 1, 7, 9, 10, 10, 9],
    },
    {
        title: "Spider-Man: Across the Spider-Verse",
        studio: "Sony",
        month: "June",
        reviews: [9, 8, 9, 9, 6],
    },
    {
        title: "Dungeons & Dragons: Honor Among Thieves",
        studio: "Paramount",
        month: "March",
        reviews: [9, 8],
    },
    {
        title: "Mission: Impossible - Dead Reckoning Part One",
        studio: "Skydance",
        month: "July",
        reviews: [7, 8, 3, 9],
    },
    {
        title: "The Hunger Games: The Ballad of Songbirds and Snakes",
        studio: "Lionsgate",
        month: "November",
        reviews: [],
    },
    {
        title: "John Wick 4",
        studio: "Lionsgate",
        month: "March",
        reviews: [6, 10, 9],
    },
    {
        title: "Saw X",
        studio: "Lionsgate",
        month: "September",
        reviews: [7],
    },
    {
        title: "Barbie",
        studio: "Mattel",
        month: "July",
        reviews: [1, 10, 1, 10, 1, 10, 1, 10],
    },
]

function findFilmBasedOnMonth(month){
    const searchedFilmes = movies.filter((x) => x.month == month);
    return searchedFilmes;
}

function ABCsort(movies){
    arr = [];
    movies.forEach(element => {
        arr.push(element.title);
    });
    return arr.sort((a,b) => a.localeCompare(b , 'hu'));
    
}

function uniqueStudios(movies){
    return [...new Set(
        movies.flatMap((x) =>
        {
            return x.studio;
        }))].sort((a,b) => a.localeCompare(b, 'hu'));
}

function isAnyInSep(movies){
    return movies.some((x) => x.month == "September");
}

function numberOfReviews(movies){
    return movies.reduce((acc, curr) => acc + curr.reviews.length , 0 );
}

//1
console.log("All filmes in March: " + findFilmBasedOnMonth("March").map((film) =>{
    return film.title;
}));
console.log('');
//2
console.log("Movie titles: "+ABCsort(movies));
console.log('');
//3
console.log("Unique list of the names of the studios: " + uniqueStudios(movies));
console.log('');
//4
console.log("is there a movie in the list that was released in September? " + isAnyInSep(movies));
console.log('');
//5
console.log("Total number of reviews: " + numberOfReviews(movies));
console.log('');


function avOfeveryFilm(movies){
    result = {};
    movies.forEach((element)=>{
        x = 0;
        y = 0;
        element.reviews.forEach((review) =>{
            y +=1;
            x += review;
        })
        if(y > 0) result[element.title] = x / y;
        else result[element.title] = 0;
    })
    return result;
}

function getAverageOfReviews(movies){
    result = avOfeveryFilm(movies);
    let x = 0; 
    let y = 0; 
    for(var title in result){
        y+=1;
        x += result[title];
    }
    return y != 0 ? x / y : 0;
}

//+1
console.log("Movies and their average ratings:");
console.log(avOfeveryFilm(movies));
console.log("Average: " + getAverageOfReviews(movies).toFixed(2));