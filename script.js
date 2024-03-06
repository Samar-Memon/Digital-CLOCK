setInterval(myFunc, 1000);

function myFunc(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById("time").innerHTML = time;
}