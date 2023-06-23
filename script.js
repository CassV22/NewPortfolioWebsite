//Launch Modals

//need ids of each webdev container (div id) and for each modal to launch
const webProject1 = document.getElementById("project1W");
const webProject2 = document.getElementById("project2W");
const webProject3 = document.getElementById("project3W");
const webProject4 = document.getElementById("project4W");
const webProject5 = document.getElementById("project5W");

const getModal1 = document.getElementById("myModal1");
const getModal2 = document.getElementById("myModal2");
const getModal3 = document.getElementById("myModal3");
const getModal4 = document.getElementById("myModal4");
const getModal5 = document.getElementById("myModal5");

const closeBtn1 = document.getElementById("closeModal1");
const closeBtn2 = document.getElementById("closeModal2");
const closeBtn3 = document.getElementById("closeModal3");
const closeBtn4 = document.getElementById("closeModal4");
const closeBtn5 = document.getElementById("closeModal5");

//add event listeners to each modal
//on click, call funtion that toggles display to block

const modal1Launch = webProject1.addEventListener("click", launchModal1);
const modal2Launch = webProject2.addEventListener("click", launchModal2);
const modal3Launch = webProject3.addEventListener("click", launchModal3);
const modal4Launch = webProject4.addEventListener("click", launchModal4);
const modal5Launch = webProject5.addEventListener("click", launchModal5);

const closeModal1 = closeBtn1.addEventListener("click", close1);
const closeModal2 = closeBtn2.addEventListener("click", close2);
const closeModal3 = closeBtn3.addEventListener("click", close3);
const closeModal4 = closeBtn4.addEventListener("click", close4);
const closeModal5 = closeBtn5.addEventListener("click", close5);

function launchModal1() {    
    getModal1.style.display = "block";
}
function launchModal2() {    
    getModal2.style.display = "block";
}
function launchModal3() {    
    getModal3.style.display = "block";
}
function launchModal4() {    
    getModal4.style.display = "block";
}
function launchModal5() {    
    getModal5.style.display = "block";
}

//can add for loop to be able to close each modal instead of writing each close?
function close1(){
    getModal1.style.display = "none";
}
function close2(){
    getModal2.style.display = "none";
}
function close3(){
    getModal3.style.display = "none";
}
function close4(){
    getModal4.style.display = "none";
}
function close5(){
    getModal5.style.display = "none";
}

// function close(){
//     if(getModal1.style.display === "block") {
//         getModal1.style.display = "none";
//     } else if(getModal2.style.display === "block") {
//         getModal2.style.display = "none";
//     } else if(getModal3.style.display === "block") {
//         getModal3.style.display = "none";
//     } else if(getModal4.style.display === "block") {
//         getModal4.style.display = "none";
//     } else if(getModal5.style.display === "block") {
//         getModal5.style.display = "none";
//     }
// }


//later think about how I can rewrtie this so I don't have to write out the same fuctions for each modal

