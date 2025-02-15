document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
  
    function updateToggleButton() {
      const currentTheme = document.body.getAttribute("data-theme");
      if (currentTheme === "light") {
        themeToggle.textContent = "Màu Nền: TRẮNG";
      } else {
        themeToggle.textContent = "Màu Nền: ĐEN";
      }
    }
  
    updateToggleButton();
  
    themeToggle.addEventListener("click", function () {
      const currentTheme = document.body.getAttribute("data-theme");
      document.body.setAttribute("data-theme", currentTheme === "light" ? "dark" : "light");
      updateToggleButton();
    });

     var modal = document.getElementById("modal");
     var modalImg = document.getElementById("modal-img");
     var captionText = document.getElementById("caption");

     var galleryImages = document.querySelectorAll(".wikia-gallery .gallery-image-wrapper img");

     galleryImages.forEach(function(img) {
       img.addEventListener("click", function(e) {
         e.preventDefault();
         modal.style.display = "block";
         modalImg.src = this.src;
         captionText.innerHTML = this.alt;
       });
     });

     var span = document.getElementsByClassName("close")[0];

     span.onclick = function() {
       modal.style.display = "none";
     }

     modal.addEventListener("click", function(e) {
       if (e.target == modal) {
         modal.style.display = "none";
       }
     });
  
    const backToTop = document.getElementById("back-to-top");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    });
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute("href"));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
    
    const sections = document.querySelectorAll("section");
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    sections.forEach((section) => {
      observer.observe(section);
    });
  });

  function copyToClipboard(element) {
    const text = element.getAttribute('data-copy');
    navigator.clipboard.writeText(text)
      .then(() => {
        showCopyNotifier("Đã sao chép vào bảng nhớ tạm");
      })
      .catch(err => {
        console.error('Lỗi sao chép!', err);
      });
  }

  function showCopyNotifier(message) {
    const notifier = document.getElementById('copy-notifier');
    notifier.textContent = message;
    notifier.classList.add('show');
    setTimeout(() => {
      notifier.classList.remove('show');
    }, 2000);
  }

  function toggleReadMore(element) {
    const fullContent = element.parentElement.nextElementSibling;
    if (fullContent.style.display === "none" || fullContent.style.display === "") {
      fullContent.style.display = "block";
      element.textContent = "Thu gọn";
    } else {
      fullContent.style.display = "none";
      element.textContent = "Đọc thêm";
    }
  }