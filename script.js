
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

document.addEventListener("DOMContentLoaded", () => {
  opentab(0);
});



const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const q = item.querySelector(".faq-question");

  q.addEventListener("click", () => {
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});





  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });



const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const formData = new FormData(form);

    fetch("submit.php", {
      method: "POST",
      body: formData
    })
    .then(res => res.text())
    .then(data => {
      if (data.trim() === "success") {
        popup.style.display = "block";

        setTimeout(() => {
          popup.style.display = "none";
        }, 3000);

        form.reset();
      }
    });
  });
}

