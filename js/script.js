//выпадающее меню в футере//
//создаем массивы из коллекции элементов
const listAll = Array.from(document.getElementsByClassName('footer_column'));
const menuAll = Array.from(document.getElementsByClassName('footer_menu'));
const arrowAll = Array.from(document.getElementsByClassName('footer_label'));

//проходимся циклом по каждому элементу, и вешаем обработчик по клику
for (let i = 0; i < (listAll.length - 1); i++) {
    if(listAll[i]){
        listAll[i].addEventListener('click', function(e) {
            menuAll[i].classList.toggle('visible');
            if(menuAll[i].classList.contains('visible')) {
                arrowAll[i].className = 'footer_arrow';
            } else {
                arrowAll[i].className = 'footer_label';
            }
        })
    }
}


