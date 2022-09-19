let about = document.getElementById("about"); 
let sherlock = document.getElementById("sherlock");
let projects = document.getElementById("projects");
let picture = document.getElementById("pic");
let fin = document.getElementById("final");
let cont = document.getElementById("contact");
let ending = document.getElementById("ending");
function lockabout() {
about.classList.remove("w3-hide-large");

}
function sherlocked() {
    sherlock.classList.remove("w3-hide-large");
    
    }

function project() {
projects.classList.remove("w3-hide-large");
}    

function image () {
picture.classList.remove("w3-hide-large");
}

function the_finals() {
    fin.classList.remove("w3-hide-large");
}

function contactME () {
cont.classList.remove("w3-hide-large");
ending.classList.add("w3-hide-large")
}


/* 
<header class="w3-display-container w3-content w3-wide" style="max-width:1500px;" id="home">
      <img class="w3-image" src="Pics/BG.jpg" alt="figure it out" width="100%" height="auto">
      <div class="w3-display-middle w3-margin-top w3-center">

        </div>
      </header>
*/