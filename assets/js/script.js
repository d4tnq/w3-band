const modal = document.querySelector('.js-modal')
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modalClose = document.querySelector('.js-close-modal')
const modalContainer = document.querySelector('.js-modal-container')

// Ham hien thi form modal buy ticket (them  class open vao modal)
function showBuyTickets(){
    modal.classList.add('open')
}

// Ham an modal (go bo class open trong modal)
function hideBuyTickets(){
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets)
}


modalClose.addEventListener('click', hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', function (event){
    event.stopPropagation(modalContainer)
})


function myFunction(){
    var items = document.querySelectorAll('.hide_element')
    for(var i = 0; i<items.length;i++){
        items[i].onclick = function() {
            var all = document.getElementsByClassName('hide_element');
            for(var j=0;j<all.length;j++){
                all[j].style.display='none';
            }
        }
    }
    var showBtn = document.querySelector('.nav__input')
    showBtn.onclick = function(){
        var all = document.getElementsByClassName('hide_element');
        for(var j=0;j<all.length;j++){
            all[j].style.display='block';
        }
    }

}