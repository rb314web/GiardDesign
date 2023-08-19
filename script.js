const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))


var msnry = new Masonry( '.grid', {
    columnWidth: 10,
    itemSelector: '.grid-item'
  });