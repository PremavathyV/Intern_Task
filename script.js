/* =========================
   1️⃣ TABS – Awards Section
========================= */
function opentab(index) {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".award-content, .tab-content");

  tabs.forEach(tab => tab.classList.remove("active"));
  contents.forEach(content => content.style.display = "none");

  tabs[index].classList.add("active");

  if (index === 0) {
    document.querySelector(".award-content").style.display = "block";
  } else {
    contents[index].style.display = "block";
  }
}

/* Default state */
document.addEventListener("DOMContentLoaded", () => {
  opentab(0);
});


/* =========================
   2️⃣ FAQ – Accordion
========================= */
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{
  const q = item.querySelector(".faq-question");
  q.addEventListener("click",()=>{
    faqItems.forEach(i=>{
      if(i!==item){
        i.classList.remove("active");
        i.querySelector(".faq-question").setAttribute("aria-expanded","false");
      }
    });
    const open = item.classList.toggle("active");
    q.setAttribute("aria-expanded",open);
  });
});



  $(document).ready(function () {

    $('.facility-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('#prev'),
      nextArrow: $('#next'),
      dots: false,
      infinite: true,
      speed: 600,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

  });




const move = 350; // card width + gap

nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: move, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -move, behavior: "smooth" });
});
document.querySelector(".contact-form").addEventListener("submit",e=>{
  e.preventDefault();

  const inputs=e.target.querySelectorAll("input");
  let valid=true;

  inputs.forEach(i=>{
    if(!i.value){
      i.style.border="2px solid red";
      valid=false;
    }else{
      i.style.border="none";
    }
  });

  if(valid) alert("Form submitted successfully!");
});

