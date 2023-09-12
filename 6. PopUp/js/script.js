const submitBtn = document.getElementById('submit');
const closeBtn = document.getElementById('close');
const popUp = document.querySelector(".popupcontainer");
submitBtn.addEventListener('click', function(){
    popUp.classList.add('popupActive')
});
closeBtn.addEventListener('click',function(){
    popUp.classList.remove('popupActive')
});