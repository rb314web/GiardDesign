const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))

document.querySelector('.icon').addEventListener("click", () => {
    document.querySelector('.icon').classList.toggle('active')
    document.querySelector("input[type='text']").classList.toggle("active");
})

var msnry = new Masonry( '.grid', {
    columnWidth: 10,
    itemSelector: '.grid-item'
  });


  var macy = Macy({
    container: '#macy-container',
    trueOrder: false,
    waitForImages: false,
    margin: 24,
    columns: 6,
    breakAt: {
        1200: 5,
        940: 3,
        520: 2,
        400: 1
    }
});

new VenoBox({
    selector: ".venobox"
});

document.getElementByClassName("carousel").carousel({
    interval: 2000
  })
