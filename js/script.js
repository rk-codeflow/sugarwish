// Toggle Arrow
const arrow = document.querySelector('.toggle-arrow')
const mobileTable = document.querySelector('.mobile-view-table');

arrow.addEventListener('click', () => {
    mobileTable.classList.toggle('hide')
    // icon.classList.toggle('fa-angle-down')
})

function changeIcon() {
    $('.toggle-arrow').find('i').toggleClass('fa-angle-right fa-angle-down')
}