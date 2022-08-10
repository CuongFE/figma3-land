
// const abc = document.querySelector('.nav__toggle')
// const abcD = document.querySelector('.nav_list')
// abc.onclick=function(){
//     abcD.classList.toggle('show')
//     console.log("123");
// }


// cách 2
const abc = document.querySelector('.nav__toggle')
const abcD = document.querySelector('.nav_list')
abc.addEventListener('click', function(){
    abcD.classList.toggle("show")
    console.log("123");
    
} )