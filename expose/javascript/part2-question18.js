const intervalID = setInterval(callback, 1000);
function callback(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
