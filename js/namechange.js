var text = ["s","sa","say","sayn","saynz","sayn","say","sa","s","seynz.github.io"];
var counter = 0;
var inst = setInterval(change, 550);

function change() {
document.title = text[counter];
counter++;
if (counter >= text.length) {
counter = 0;
}
}