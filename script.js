// Start of javascript code
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
};


ScrollReveal (
    {
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200

    }
);
ScrollReveal().reveal('.home-content, .heading ',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-contaier, .skill-box , .contact form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about ',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content ',{origin:'right '});

const typed = new Typed('.multiple-text' , {
    strings: ['Student','Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

{/* <script> */}
// {/* // When the user clicks on <div>, open the popup */}
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
// </script>

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}
// document.getElementById("reset").reset();
function newFunction(){
    var element = document.getElementById("input-form");
     element.reset()
  }

function both(){
    openPopup();
    newFunction();
}

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none"; 
})
