const places_1 = [
    // أماكن في عمان
    {
      name: "شارع الرينبو",
      workingHours: "24 ساعة",
      location: "جبل عمان، عمان",
      type: "مكان ترفيهي",
      description: "شارع مليء بالمقاهي والمطاعم والمحلات، يوفر تجربة ممتعة بأجواء عمان التقليدية.",
      image: "https://i.imgur.com/jB2E3OZ.jpg",
    },
    {
      name: "متحف الأردن",
      workingHours: "9 صباحًا - 5 مساءً",
      location: "راس العين، عمان",
      type: "مكان تاريخي",
      description: "يضم مقتنيات تاريخية تعكس الحضارات المتعاقبة في الأردن.",
      image: "https://i.imgur.com/JNlfwYe.jpg",
    },
    {
      name: "سيتي مول",
      workingHours: "10 صباحًا - 11 مساءً",
      location: "شارع المدينة المنورة، عمان",
      type: "مكان تسوق",
      description: "مول حديث يحتوي على متاجر عالمية ومناطق ترفيهية.",
      image: "https://i.imgur.com/MORkl5m.jpg",
    },
    {
      name: "حدائق الحسين",
      workingHours: "8 صباحًا - 10 مساءً",
      location: "دابوق، عمان",
      type: "مكان ترفيهي",
      description: "حدائق خضراء ومسارات للمشي ومناطق للأطفال.",
      image: "https://i.imgur.com/HoDQdRO.jpg",
    },
  
    // أماكن في إربد
    {
      name: "مدينة إربد القديمة",
      workingHours: "24 ساعة",
      location: "وسط إربد، إربد",
      type: "مكان تاريخي",
      description: "أسواق تقليدية ومبانٍ قديمة تعكس تاريخ المدينة.",
      image: "https://i.imgur.com/0F8K0Ql.jpg",
    },
    {
      name: "جامعة اليرموك",
      workingHours: "8 صباحًا - 6 مساءً",
      location: "إربد، الأردن",
      type: "مكان تعليمي",
      description: "جامعة تضم متحفًا للتراث وحدائق جميلة.",
      image: "https://i.imgur.com/AGcOGAC.jpg",
    },
    {
      name: "تل إربد",
      workingHours: "24 ساعة",
      location: "وسط إربد، إربد",
      type: "مكان أثري",
      description: "موقع أثري قديم يوفر إطلالات رائعة على المدينة.",
      image: "https://i.imgur.com/qCdzMaG.jpg",
    },
    {
      name: "حدائق الملك عبد الله الثاني",
      workingHours: "8 صباحًا - 8 مساءً",
      location: "إربد، الأردن",
      type: "مكان ترفيهي",
      description: "حدائق واسعة بمرافق رياضية وترفيهية.",
      image: "https://i.imgur.com/FLYBZ0p.jpg",
    },
  
    // أماكن في الزرقاء
    {
      name: "مدينة الأمير محمد الرياضية",
      workingHours: "9 صباحًا - 9 مساءً",
      location: "الزرقاء الجديدة، الزرقاء",
      type: "مكان رياضي",
      description: "مرافق رياضية متكاملة للأنشطة المختلفة.",
      image: "https://i.imgur.com/7SKYZvZ.jpg",
    },
    {
      name: "حديقة المهندسين",
      workingHours: "9 صباحًا - 9 مساءً",
      location: "حي معصوم، الزرقاء",
      type: "مكان ترفيهي",
      description: "حديقة عائلية تضم مناطق للأطفال ومساحات خضراء.",
      image: "https://i.imgur.com/CFHXcDJ.jpg",
    },
    {
      name: "السوق الشعبي في الزرقاء",
      workingHours: "9 صباحًا - 10 مساءً",
      location: "وسط الزرقاء، الزرقاء",
      type: "سوق",
      description: "سوق محلي يعكس الحياة اليومية بتكلفة منخفضة.",
      image: "https://i.imgur.com/v6jHDsN.jpg",
    },
    {
      name: "قلعة الزرقاء",
      workingHours: "9 صباحًا - 5 مساءً",
      location: "الزرقاء، الأردن",
      type: "مكان تاريخي",
      description: "قلعة إسلامية قديمة تطل على المدينة من تلة.",
      image: "https://i.imgur.com/lJHL5sx.jpg",
    },
  ];
  



  

  function showModal() {
      const loginModal = document.getElementById('login-modal');
      loginModal.style.display = 'flex'; // إظهار النافذة
  }
  
  // إغلاق النافذة عند الضغط على زر الإغلاق
  function closeModal() {
      const loginModal = document.getElementById('login-modal');
      loginModal.style.display = 'none'; // إخفاء النافذة
  }
  
  // إغلاق النافذة عند الضغط خارجها
  window.onclick = function (event) {
      const loginModal = document.getElementById('login-modal');
      if (event.target === loginModal) {
          loginModal.style.display = 'none';
      }
  };
  
  










  // البحث الشامل

// // دالة لعرض النتائج
// function displayResults(filteredPlaces) {
//     const resultsContainer = document.getElementById('resultsContainer');
//     resultsContainer.innerHTML = ''; // مسح المحتوى القديم

//     if (filteredPlaces.length === 0) {
//         resultsContainer.innerHTML = '<p>لا توجد نتائج مطابقة.</p>';
//         return;
//     }

//     filteredPlaces.forEach(place => {
//         const card = `
//             <div class="card mb-3">
//                 <img src="${place.image}" class="card-img-top" alt="${place.name}">
//                 <div class="card-body">
//                     <h5 class="card-title">${place.name}</h5>
//                     <p class="card-text">${place.description}</p>
//                     <p class="card-text"><small class="text-muted">${place.location}</small></p>
//                 </div>
//             </div>
//         `;
//         resultsContainer.innerHTML += card;
//     });
}

// // دالة للبحث
// function searchPlaces(event) {
//     event.preventDefault(); // منع إعادة تحميل الصفحة

//     const city = document.getElementById('citySelect').value;
//     const category = document.getElementById('categorySelect').value;
//     const price = document.getElementById('priceSelect').value;

//     const filteredPlaces = places.filter(place => {
//         const matchesCity = city === "اختر وجهتك" || place.location.includes(city);
//         const matchesCategory = category === "جميع التصنيفات" || place.type === category;
//         const matchesPrice = price === "نطاق الأسعار" || 
//             (price === "مجانا" && place.price === "مجانا") ||
//             (price === "أقل من 5 دينار" && place.price === "أقل من 5 دينار") ||
//             (price === "أكثر من 5 دينار" && place.price === "أكثر من 5 دينار");

//         return matchesCity && matchesCategory && matchesPrice;
//     });

//     displayResults(filteredPlaces);
// }

// // إضافة Event Listener للفورم
// document.getElementById('searchForm').addEventListener('submit', searchPlaces);









// كارد  عمان واربد و الزرقا

// اختيار العنصر الذي سيتم إدخال الكروت فيه
const relatedDiv = document.querySelector(".related");

// إضافة حدث للنقر على الروابط
document.querySelectorAll(".dropdown-item").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // منع السلوك الافتراضي
    const city = event.target.dataset.city; // الحصول على المدينة
    displayPlaces(city);
  });
});

// وظيفة لعرض الأماكن بناءً على المدينة المختارة
function displayPlaces(city) {
  // تصفية الأماكن بناءً على المدينة
  const filteredPlaces = places_1.filter((place) =>
    place.location.includes(city)
  );

  // تفريغ المحتوى الحالي
  relatedDiv.innerHTML = "";

  // إنشاء الكروت وإضافتها
  filteredPlaces.forEach((place) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${place.image}" alt="${place.name}">
      <div class="card-body">
        <h3>${place.name}</h3>
        <p>${place.description}</p>
        <p><strong>الموقع:</strong> ${place.location}</p>
        <button>المزيد من التفاصيل</button>
        <button style="background-color: #f00; margin-left: 5px;">❤</button>
      </div>
    `;
    relatedDiv.appendChild(card);
  });
}