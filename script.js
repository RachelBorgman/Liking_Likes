// var like1 = document.querySelector("#likeCount_1");
// var like2 = document.querySelector("#likeCount_2");
// var like3 = document.querySelector("#likeCount_3");

function increaseLikes(id){
    var like1 = document.querySelector(`#likeCount_${id}`);
    like1.innerHTML = parseInt(like1.innerHTML) + 1;
}
// function increaseLikes2(){
//     like2.innerHTML = parseInt(like2.innerHTML) + 1;
// }
// function increaseLikes3(){
//     like3.innerHTML = parseInt(like3.innerHTML) + 1;
// }