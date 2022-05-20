const container = document.querySelector('.container');
const big = document.querySelector('.big');
const small = document.querySelectorAll('.small');
// small.forEach(img => img.addEventListener('click' , function(){
//     big.src = this.src
container.addEventListener('click' , function(e){
    if(e.target.className == 'small'){

    big.src = e.target.src;
    
    big.classList.add('fade');

setTimeout(function(){
    big.classList.remove('fade');
},500);
    
small.forEach(function(small){
if(small.classList.contains('active')){
    small.classList.remove('active');
}
});
e.target.classList.add('active');

    }
});

const sHitam = document.querySelector('input[name=sHitam]');

sHitam.addEventListener('input' , function(){
  const h= sHitam.value
  
document.body.style.backgroundColor = 'rgb('+ h + ','+ h + ' ,'+ h +')';;
});



// const cb = document.querySelectorAll('cb');
// cb.addEventListener('mouseenter',function(){
//     document.body.classList.toggle('centerback');
// });







