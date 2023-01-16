let background = document.body;
// document.body.style.backgroundColor = "green";
const colors = ["red", "blue", "yellow", "navy", "orange", "green", "aqua"]

let box = document.getElementById("jokesarea")
const jokes = [" Q. How did the programmer die in the shower \n A. He read the shampoo bottle instructions: Lather. Rinse. Repeat."," Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.","There are three kinds of lies: Lies, damned lies, and benchmarks. ","All programmers are playwrights, and all computers are lousy actors. "," All programmers are playwrights, and all computers are lousy actors."," I just saw my life flash before my eyes and all I could see was a close tag…"," Debugging: Removing the needles from the haystack.","From the Random Shack Data Processing Dictionary:Endless Loop: n., see Loop, Endless.Loop, Endless: n., see Endless Loop. "," In order to get their attention, you have to turn them on.","Q. How did the programmer die in the shower \n A. He read the shampoo bottle instructions: Lather. Rinse. Repeat."," Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.","There are three kinds of lies: Lies, damned lies, and benchmarks. ","All programmers are playwrights, and all computers are lousy actors. "," All programmers are playwrights, and all computers are lousy actors."," I just saw my life flash before my eyes and all I could see was a close tag…"," Debugging: Removing the needles from the haystack.","From the Random Shack Data Processing Dictionary:Endless Loop: n., see Loop, Endless.Loop, Endless: n see Endless Loop." , " In order to get their attention, you have to turn them on."];

// console.log(Math.random(1,15)*100);
// box.innerText =  jokes[Math.floor(Math.random(0,100)*10)].toString();

let button  = document.body.firstElementChild.lastElementChild;

button.addEventListener("click", functionjokes =>{
    box.innerText =  jokes[Math.floor(Math.random(0,100)*10)];
    document.body.style.backgroundColor = colors[Math.floor(Math.random(0,5)*10)];
    box.style.border = `5px solid ${colors[Math.floor(Math.random(0,5)*10)]}`
})