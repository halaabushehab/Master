function showMuseums(season) {
    const museumInfo = document.getElementById('museum-info');
    let content = '';

    if (season === 'summer') {
        content = `
            <div class="product-card">
                <img src="https://assets.nn.najah.edu/CACHE/images/uploads/weblog/2017/03/31/faae1cb1ec/0331491da6b91d195b61fb927589d05c.jpg" alt="متحف ألف اختراع واختراع">
                <div class="card-body">
                    <h3 class="card-title">متحف ألف اختراع واختراع</h3>
                    <p class="card-text">متحف تفاعلي يستعرض إنجازات الحضارة الإسلامية في مجالات العلوم، التكنولوجيا، والفنون.</p>
                    <div class="price">سعر الدخول: حسب الفعالية</div>
                    <div class="mt-3">
                        <a href="more-details.html" class="buy-btn">المزيد من التفاصيل</a>
                        <a href="favorite" target="_blank"><img src="/img/lover.png" alt="Bookmark" style="width: 25px; height: 25px;"/></a>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <img src="https://i.pinimg.com/736x/2f/6a/ab/2f6aab9827f30101ade0c73dd64a6302.jpg" alt="متحف السيارات الملكي">
                <div cl
<div class="container">
    <h2 class="text-center">المواقع</h2>
    <div class="cards_box">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <div class="favorite-icon" onclick="toggleFavorite()">
                <i class='bx bxs-bookmark-heart'></i>
            </div>
            <div class="search-bar">
                <input type="text" class="form-control w-50" placeholder="بحث...">
            </div>
        </div>
        <div id="season-info" class="museum-card-container">
            <!-- معلومات المواسم ستظهر هنا على شكل بطاقات -->
            <div class="product-card">
                <img src="https://assets.nn.najah.edu/CACHE/images/uploads/weblog/2017/03/31/faae1cb1ec/0331491da6b91d195b61fb927589d05c.jpg" alt="موسم الصيف">
                <div class="card-body">
                    <h3 class="card-title">موسم الصيف</h3>
                    <p class="card-text">استمتع بالأنشطة والفعاليات خلال فصل الصيف.</p>
                    <div class="price">سعر الدخول: حسب الفعالية</div>
                    <div class="mt-3">
                        <a href="more-details.html" class="buy-btn">المزيد من التفاصيل</a>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <img src="https://via.placeholder.com/250" alt="موسم الشتاء">
                <div class="card-body">
                    <h3 class="card-title">موسم الشتاء</h3>
                    <p class="card-text">تجارب رائعة في الأجواء الشتوية.</p>
                    <div class="price">سعر الدخول: 5 دنانير</div>
                    <div class="mt-3">
                        <a href="more-details.html" class="buy-btn">المزيد من التفاصيل</a>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <img src="https://via.placeholder.com/250" alt="موسم الربيع">
                <div class="card-body">
                    <h3 class="card-title">موسم الربيع</h3>
                    <p class="card-text">استمتع بجمال الطبيعة في الربيع.</p>
                    <div class="price">سعر الدخول: 3 دنانير</div>
                    <div class="mt-3">
                        <a href="more-details.html" class="buy-btn">المزيد من التفاصيل</a>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <img src="https://via.placeholder.com/250" alt="موسم الخريف">
                <div class="card-body">
                    <h3 class="card-title">موسم الخريف</h3>
                    <p class="card-text">تجارب فريدة خلال فصل الخريف.</p>
                    <div class="price">سعر الدخول: 4 دنانير</div>
                    <div class="mt-3">
                        <a href="more-details.html" class="buy-btn">المزيد من التفاصيل</a>
                    </div>
                </div>
            </div>
            <!-- يمكنك إضافة المزيد من البطاقات بنفس الشكل هنا -->
        </div>
    </div>
</div>ass="card-body">
                    <h3 class="card-title">متحف السيارات الملكي</h3>
                    <p class="card-text">يعرض مجموعة مميزة من السيارات التاريخية.</p>
                    <div class="price">سعر الدخول: 3 دنانير</div>
                    <div class="mt-3">
                        <a href="more-details.html" class="buy-btn">المزيد من التفاصيل</a>
                        <a href="favorite" target="_blank"><img src="/img/lover.png" alt="Bookmark" style="width: 25px; height: 25px;"/></a>
                    </div>
                </div>
            </div>
            <!-- أضف المزيد من الكروت بنفس الشكل -->
        `;
    } else if (season === 'winter') {
        content = `
            <div class="product-card">
                <img src="https://museums.visitjordan.com/uploads/museums/images/e1a1248d-d8cf-45cd-8036-73428475cf87.jpg" alt="متحف أم قيس">
                <div class="card-body">
                    <h3 class="card-title">متحف أم قيس</h3>
                    <p class="card-text">يعرض مجموعة من القطع الأثرية التي تعود للعصور القديمة.</p>
                    <div class="price">سعر الدخول: 3 دنانير</div>
                    <div class="mt-3">
                        <a href="more-details.html" class="buy-btn">المزيد من التفاصيل</a>
                        <a href="favorite" target="_blank"><img src="/img/lover.png" alt="Bookmark" style="width: 25px; height: 25px;"/></a>
                    </div>
                </div>
            </div>
            <!-- أضف المزيد من الكروت بنفس الشكل -->
        `;
    } else if (season === 'spring') {
        content = `
            <div class="product-card">
                <img src="https://arab.vet/wp-content/uploads/2024/10/%D8%A7%D9%84%D8%A7%D8%AA%D8%AD%D8%A7%D8%AF-%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A-%D9%84%D9%84%D9%81%D8%B1%D9%88%D8%B3%D9%8A%D8%A9-FEI-780x470.jpg" alt="الاتحاد الفني للفروسية">
                <div class="card-body">
                    <h3 class="card-title">الاتحاد الفني للفروسية</h3>
                    <p class="card-text">يهتم الاتحاد بتنظيم البطولات والفعاليات المتعلقة برياضة الفروسية.</p>
                    <div class="price">سعر الاشتراك: حسب البرنامج</div>
                    <div class="mt-3">
                        <a href="more-details.html" class="buy-btn">المزيد من التفاصيل</a>
                        <a href="favorite" target="_blank"><img src="/img/lover.png" alt="Bookmark" style="width: 25px; height: 25px;"/></a>
                    </div>
                </div>
            </div>
            <!-- أضف المزيد من الكروت بنفس الشكل -->
        `;
    } else if (season === 'autumn') {
        content = `
            <div class="product-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFWD75mTEhjHjYa6_GsXloFiF5K4_-4DOLg&s" alt="متحف دار السرايا">
                <div class="card-body">
                    <h3 class="card-title">متحف دار السرايا</h3>
                    <p class="card-text">يقدم معروضات تعكس التراث الثقافي والتاريخي لإربد.</p>
                    <div class="price">دخول مجاني</div>
                    <div class="mt-3">
                        <a href="more-details.html" class="buy-btn">المزيد من التفاصيل</a>
                        <a href="favorite" target="_blank"><img src="/img/lover.png" alt="Bookmark" style="width: 25px; height: 25px;"/></a>
                    </div>
                </div>
            </div>
            <!-- أضف المزيد من الكروت بنفس الشكل -->
        `;
    }

    museumInfo.innerHTML = content;
}