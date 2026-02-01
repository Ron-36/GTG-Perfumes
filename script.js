
      const dots = document.querySelectorAll('.dot');
      const prevBtn = document.querySelector('.prev');
      const nextBtn = document.querySelector('.next');
      let currentIndex = 0;

      function updateDots(index) {
          dots.forEach(dot => dot.classList.remove('active'));
          dots[index].classList.add('active');
      }

      nextBtn.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % dots.length;
          updateDots(currentIndex);
      });

      prevBtn.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + dots.length) % dots.length;
          updateDots(currentIndex);
      });

// subscription radios

document.addEventListener("DOMContentLoaded", () => {
  const singleRadio = document.getElementById("singleRadio");
  const doubleRadio = document.getElementById("doubleRadio");

  const singleSub = document.getElementById("singleSub");
  const doubleSub = document.getElementById("doubleSub");

  const doubleRadioWrapper = document.getElementById("doubleRadioWrapper");
  const subscriptionWrapper = document.getElementById("subscriptionWrapper");

  // INITIAL STATE
  showSingle();

  singleRadio.addEventListener("change", showSingle);
  doubleRadio.addEventListener("change", showDouble);

  function showSingle() {
    if (!singleRadio.checked) return;

    // SHOW FULL SINGLE CARD
    singleSub.style.display = "block";
    singleSub.classList.remove("collapsed");

    // HIDE DOUBLE CARD
    doubleSub.style.display = "none";

    // ORDER FIX
    subscriptionWrapper.insertBefore(singleSub, doubleRadioWrapper);
    subscriptionWrapper.insertBefore(doubleRadioWrapper, doubleSub);

    singleSub.classList.add("active");
    doubleSub.classList.remove("active");
  }

  function showDouble() {
    if (!doubleRadio.checked) return;

    // SHOW SINGLE RADIO ONLY (CONTENT COLLAPSED)
    singleSub.style.display = "block";
    singleSub.classList.add("collapsed");

    // SHOW DOUBLE CARD
    doubleSub.style.display = "block";

    // ORDER FIX
    subscriptionWrapper.insertBefore(singleSub, doubleRadioWrapper);
    subscriptionWrapper.insertBefore(doubleRadioWrapper, doubleSub);

    doubleSub.classList.add("active");
    singleSub.classList.remove("active");
  }
});



document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other items
        document.querySelectorAll('.accordion-item').forEach(el => {
            el.classList.remove('active');
            el.querySelector('.icon').textContent = '+';
        });

        // Toggle the clicked item
        if (!isActive) {
            item.classList.add('active');
            item.querySelector('.icon').textContent = '−';
        }
    });
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
