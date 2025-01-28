$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true, // تفعيل التكرار
        margin: 10, // المسافة بين العناصر
        nav: true, // إظهار الأسهم للتنقل
        dots: true, // إظهار النقاط للتنقل
        autoplay: true, // التشغيل التلقائي
        autoplayTimeout: 3000, // المدة بين كل تعليق (3 ثوانٍ)
        autoplayHoverPause: true, // الإيقاف المؤقت عند تمرير الماوس
        responsive: {
            0: {
                items: 1 // عنصر واحد على الشاشات الصغيرة
            },
            600: {
                items: 2 // عنصران على الشاشات المتوسطة
            },
            1000: {
                items: 3 // ثلاثة عناصر على الشاشات الكبيرة
            }
        }
    });
});




// تضمين المكتبة الخاصة بـ EmailJS
// تضمين المكتبة الخاصة بـ EmailJS
(function() {
    emailjs.init("your_user_id"); // استبدل بـ User ID الخاص بك من EmailJS
  })();
  
  // الاستماع إلى حدث الإرسال في النموذج
  document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج
  
    // جمع البيانات من النموذج
    const formData = new FormData(event.target);
    const formDataObj = {};
    formData.forEach((value, key) => formDataObj[key] = value);
  
    // إرسال البريد الإلكتروني باستخدام EmailJS
    emailjs.send('your_service_id', 'your_template_id', formDataObj)
      .then(function(response) {
        alert('تم إرسال الاقتراح بنجاح!');
      }, function(error) {
        alert('حدث خطأ أثناء إرسال الاقتراح. حاول مرة أخرى.');
      });
  });
  










  document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');

    stars.forEach(star => {
        star.addEventListener('mouseover', function() {
            const value = parseInt(star.getAttribute('data-value'));
            highlightStars(value);
        });

        star.addEventListener('mouseout', function() {
            const currentRating = parseInt(ratingInput.value);
            highlightStars(currentRating);
        });

        star.addEventListener('click', function() {
            const value = parseInt(star.getAttribute('data-value'));
            ratingInput.value = value;
            highlightStars(value);
        });
    });

    function highlightStars(value) {
        stars.forEach(star => {
            const starValue = parseInt(star.getAttribute('data-value'));
            if (starValue <= value) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
});
