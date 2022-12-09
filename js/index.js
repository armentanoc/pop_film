var MovieSales = "https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/movie-data.json";
var arrayL =["Blade", "X-Men", "Blade II", "Spider-Man", "Daredevil", "X2: X-Men United", "Hulk", "Kat",
             "Spider-Man 2", "Blade: Trinity", "Elektra", "Man Thing", "Ghost Rider", "Spider-Man 3",
             "Fantastic four: Silver Surfer", "Kat 2", "X-Men Origins: Wolverine", "X-Men: first class",
             "Ghost Rider: Spirit of Vengeance", "Amazing Spider-Man", "Wolverine", "Amazing Spider-Man 2","Spider-Man: Homecoming",
             "Spider-Man: Into the Spider-Verse","Spider-Man: Far From Home",
             "Fantastic four", "Captain America: Civil War","Deadpool","Deadpool 2", "X-Men: Apokalypsa", 
             "Gambit", "Logan: Wolverine", "Captain America: The First Avenger","Captain America: The Winter Soldier", 
             "Deadpool 2", "X-Force", "Sinister Six", "Iron Man 3", "Captain America: Civil War",  
             "Guardians of the Galaxy Vol. 2", "Guardians of the Galaxy","Guardians of the Galaxy Vol. 3", "Doctor Strange",
             "Avengers", "Avengers: Age of Ultron","Avengers: Infinity War", "Avengers: End Game",
             "Starwars: Rogue-one","Star Wars: The Force Awakens","Star Wars: The Last Jedi","Star Wars: The Last Jedi",
            "Toy story 4","X-Men: Apocalypse"];

function getfilm() {

    var min = 0;
    var max = arrayL.length - 1;
    return arrayL[Math.floor(Math.random() * (max - min + 1)) + min];
}



$(document).ready(function () {
    $.get(MovieSales, function makeMyMap(data) {
              data.children.forEach((d) => {
            d.children.forEach(element => {
                if (element.hasOwnProperty('name')) {
                    if (!arrayL.includes(element.name)) {
                        arrayL.push(element.name);
                                           }
                }
            });
        });
   

    g();
 });
    function g() {
        var j = getfilm();
       
        $("#Mtitle").text(j + "\n");
        $.get(
            "https://www.omdbapi.com/?t=" + j + "&apikey=e639b4e1",
            function (data) {
                console.log(data);
                $("#text").text(data.Plot);
                $("#author").text(data.Director);
                var mscore = data.Metascore;
                $("#img1").attr("src", data.Poster);
                if (!isNaN(mscore)) {
                    $("#hod").text("Metascore: " + "\n" + mscore + "%");
                    if (mscore < 30) {
                        $("#hod").css("color", "white");
                    } else if (mscore < 60) {
                        $("#hod").css("color", "white");
                    } else if (mscore > 60) {
                        $("#hod").css("color", "white");
                    }
                }
                $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?text="+data.Plot+"&url=https://codepen.io/vanderdrilu/full/pVeXgw");  
            });
      
  
     
    }


    $("#new-quote").click(function () {
        g();

    });

});

//API de tradução

const text = document.getElementById("quote-box").innerHTML;
const btnTranslate = document.querySelector("#btnTranslate");


btnTranslate.addEventListener("click", () => {
    loadTranslation();
});

function loadTranslation() {
  fetch(
    `https://api.mymemory.translated.net/get?q=${text.innerText}&langpair=en-gb|pt-br`
  )
    .then((res) => res.json())
    .then((data) => {
      text.value = data.responseData.translatedText;
    });
}

/*
const btnTranslatePortuguese = document.querySelector("#btn-translate_pt-br")
const textareaFrom = document.getElementById("#quote-box")
const textareaTo = document.querySelector("#translation-test")

btnTranslatePortuguese.addEventListener("click", () => {
    if (textareaFrom.value) {
    loadTranslation();
  }
});

function loadTranslation() {
fetch(
    `https://api.mymemory.translated.net/get?q=${textareaFrom.value}&langpair=EN-GB|PT-BR`
  )
    .then((res) => res.json())
    .then((data) => {
      textareaTo.value = data.responseData.translatedText;
    });
}
*/