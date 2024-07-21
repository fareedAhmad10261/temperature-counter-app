const myButton = document.getElementById("mybutton");
const myImg = document.getElementById("myimg");

myButton.addEventListener("click", event => {

    if (myImg.style.display === "none"){
        myImg.style.display = "block";
        myButton.textContent = "hide";
    }else{
    myImg.style.display = "none";
    myButton.textContent = "Show";}
});
