//Launch Modals

//need ids of each webdev container (div id) and for each modal to launch
const webProject1 = document.getElementById("project1W");

const getModal1 = document.getElementById("myModal1");
const getModal2 = document.getElementById("myModal2");
const getModal3 = document.getElementById("myModal3");
const getModal4 = document.getElementById("myModal4");
const getModal5 = document.getElementById("myModal5");

const closeBtn = document.getElementById("closeModal");

//add event listeners to each modal
//on click, call funtion that toggles display to block

const modal1Launch = webProject1.addEventListener("click", launchModal1);

const closeModal = closeBtn.addEventListener("click", close);

function launchModal1() {
    alert("JS is working");
    getModal1.style.display = "block";
}

//can add for loop to be able to close each modal instead of writing each close?
function close(){
    getModal1.style.display = "none";
}

//later think about how I can rewrtie this so I don't have to write out the same fuctions for each modal