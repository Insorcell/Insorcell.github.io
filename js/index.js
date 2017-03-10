var jtPage = 1;

var titles = [
  "Play Station",
  "Chrome",
  "Google Search"
]
var descs = [
  "Better than Xbox",
  "Best web browser of all time.",
  "Useless app if you have Chrome."
]

$(document).ready(function() {
  updateJt();
});

function left(){
  if(jtPage > 1) {
    jtPage--;
    updateJt();
  }
}
function right() {
  if(jtPage < 3) {
    jtPage++;
    updateJt();
  }
}
function updateJt() {
  document.getElementById("jumbotronIcon").children[0].src = "img/jicon" + jtPage + ".png";
  document.getElementById("jumbotronInfo").children[0].innerHTML = titles[jtPage - 1];
  document.getElementById("jumbotronInfo").children[1].innerHTML = descs[jtPage - 1];
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}