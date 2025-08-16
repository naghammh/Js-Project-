// تنسيق النافبار

window.onscroll = function () {
    const navbar = document.querySelector(".custom-navbar");
    const exploreBtn = document.querySelector(".mini-cart-footer"); 
  
    if (window.scrollY > exploreBtn.offsetTop) {
      navbar.classList.add("scrolled", "animate__animated", "animate__fadeInDown");
    } else {
      navbar.classList.remove("scrolled", "animate__animated", "animate__fadeInDown");
    }
  };
  // تنسيق  collapse
  const dropdown = document.querySelector('.user-dropdown');
  const menu = dropdown.querySelector('.dropdown-menu');
  
  
  let hideTimeout;
  
  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    menu.classList.add('show');
  });
  
  dropdown.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      menu.classList.remove('show');
    }, 200); // وقت بسيط حتى المستخدم يقدر يضغط
  });
  // تنسيق نموذج البحث
    document.addEventListener('DOMContentLoaded', function () {// لما يتم تحميل الصفحة
      const toggleLink = document.getElementById('searchToggleLink');
      const toggleIcon = document.getElementById('searchToggleIcon');
      const searchCollapse = document.getElementById('searchForm');
  
      // لما ينفتح نموذج البحث
      searchCollapse.addEventListener('shown.bs.collapse', () => {
        toggleIcon.classList.remove('fa-magnifying-glass');
        toggleIcon.classList.add('fa-xmark');
      });
  
      // لما يتسكر نموذج البحث
      searchCollapse.addEventListener('hidden.bs.collapse', () => {
        toggleIcon.classList.remove('fa-xmark');
        toggleIcon.classList.add('fa-magnifying-glass');
      });
    });
    window.addEventListener("scroll", function () {
      const scrollUp = document.getElementById("scrollUp");
      if (window.scrollY > 300) {
        scrollUp.style.display = "block";
      } else {
        scrollUp.style.display = "none";
      }
    });
  
  
    function increaseQty() {
      let input = document.getElementById("quantityInput");
      input.value = parseInt(input.value) + 1;
    }
  
    function decreaseQty() {
      let input = document.getElementById("quantityInput");
      if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
      }
    }
  
  