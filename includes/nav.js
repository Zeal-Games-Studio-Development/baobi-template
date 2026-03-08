// Shared nav/footer for all pages (sub-pages only, not index.html)
(function () {
    var base = (function () {
        var s = document.querySelector('meta[name="base-path"]');
        return s ? s.getAttribute('content') : '';
    })();

    var topbar = `<div class="topbar"><div class="container"><div class="topbar-left">BAO BÌ GIẤY BẢO TÍN</div><div class="topbar-right"><span><i class="far fa-envelope"></i>&nbsp; Email: btn.baotin@gmail.com</span><span><i class="fas fa-phone-volume"></i>&nbsp; Hotline: 0977 307 761</span></div></div></div>`;

    var header = `<header class="site-header sticky-top" id="siteHeader"><div class="container"><nav class="navbar navbar-expand-lg navbar-light p-0"><a class="navbar-brand" href="${base}index.html"><img src="${base}images/logo.png" alt="Bao Bì Bảo Tín" height="80"></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse justify-content-end" id="mainNav"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="${base}index.html">TRANG CHỦ</a></li><li class="nav-item"><a class="nav-link" href="${base}gioithieu.html">GIỚI THIỆU</a></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="${base}index.html#san-pham" id="dropdownSP" role="button" data-toggle="dropdown">DANH MỤC SẢN PHẨM</a><div class="dropdown-menu" aria-labelledby="dropdownSP"><a class="dropdown-item" href="${base}ong-giay-thanh-v.html">ỐNG GIẤY, THANH V</a><a class="dropdown-item" href="${base}bao-bi-giay.html">BAO BÌ GIẤY</a><a class="dropdown-item" href="${base}thung-carton.html">THÙNG CARTON</a></div></li><li class="nav-item"><a class="nav-link" href="${base}thuvienanh.html">THƯ VIỆN ẢNH</a></li><li class="nav-item"><a class="nav-link" href="${base}lienhe.html">LIÊN HỆ</a></li></ul></div></nav></div></header>`;

    var footer = `<footer class="site-footer"><div class="container py-5"><div class="row"><div class="col-md-4 mb-4"><img src="${base}images/logo.png" alt="BTN Bảo Tín" height="70" class="mb-3"><p>Chúng tôi là nhà sản xuất chuyên nghiệp những sản phẩm chất lượng như: Thùng carton in offset, thùng carton 3 lớp, 5 lớp, 7 lớp, sóng E, BC, nắp gài, nắp mở, nắp đáy, thanh nẹp giấy, ống giấy, ...</p><div class="footer-map mt-3"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4!2d106.634!3d10.865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUxJzU0LjAiTiAxMDbCsDM4JzAyLjQiRQ!5e0!3m2!1svi!2svn!4v1700000000000" width="100%" height="180" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div></div><div class="col-md-4 mb-4"><h5 class="footer-title">VỀ CHÚNG TÔI</h5><ul class="footer-nav-list"><li><a href="${base}index.html">TRANG CHỦ</a></li><li><a href="${base}gioithieu.html">GIỚI THIỆU</a></li><li><a href="${base}ong-giay-thanh-v.html">ỐNG GIẤY, THANH V</a></li><li><a href="${base}bao-bi-giay.html">BAO BÌ GIẤY</a></li><li><a href="${base}thung-carton.html">THÙNG CARTON</a></li><li><a href="${base}thuvienanh.html">THƯ VIỆN ẢNH</a></li><li><a href="${base}lienhe.html">LIÊN HỆ</a></li></ul></div><div class="col-md-4 mb-4"><h5 class="footer-title">THÔNG TIN LIÊN HỆ</h5><p><strong>CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI BAO BÌ BẢO TÍN</strong></p><p>Địa chỉ: 621/109 Đường Trần Thị Hè, Tổ 45, Khu Phố 4, Phường Hiệp Thành, Quận 12, TP. Hồ Chí Minh</p><p>Điện thoại: <a href="tel:02862700378">028 6270 0378</a></p><p>Hotline: <a href="tel:0977307761"><strong>0977 307 761</strong></a></p><p>Email: <a href="mailto:btn.baotin@gmail.com">btn.baotin@gmail.com</a></p></div></div></div><div class="footer-bottom"><div class="container text-center"><p class="mb-1"><strong>CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI BAO BÌ BẢO TÍN</strong></p><p class="mb-1">Địa chỉ: 621/109 Đường Trần Thị Hè, Tổ 45, Khu Phố 4, Phường Hiệp Thành, Quận 12, TP. Hồ Chí Minh</p><p class="mb-0">© Bản quyền thuộc về CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI BAO BÌ BẢO TÍN</p></div></div></footer><div class="floating-icons"><a href="tel:02862700378" class="float-icon float-phone1" title="Gọi: 028 6270 0378"><i class="fas fa-phone"></i></a><a href="tel:0977307761" class="float-icon float-phone2" title="Hotline: 0977 307 761"><i class="fas fa-phone-volume"></i></a><a href="${base}lienhe.html" class="float-icon float-search" title="Liên hệ"><i class="fas fa-search"></i></a><a href="mailto:btn.baotin@gmail.com" class="float-icon float-email" title="Email"><img src="${base}images/email-icon.png" alt="Email"></a><a href="https://zalo.me/0977307761" class="float-icon float-zalo" title="Zalo" target="_blank"><img src="${base}images/zalo-icon.png" alt="Zalo"></a></div><button id="myBtn" onclick="topFunction()"><img src="${base}images/gotop-icon.png" alt="Lên đầu trang" width="40"></button>`;

    // Inject BEFORE page content: insert topbar+header at top of body
    // Use a placeholder approach: wrap existing body children
    var placeholder = document.createElement('div');
    placeholder.id = 'nav-placeholder';
    placeholder.innerHTML = topbar + header;
    document.body.insertBefore(placeholder, document.body.firstChild);

    // Inject footer AFTER all existing content
    var footerEl = document.createElement('div');
    footerEl.id = 'footer-placeholder';
    footerEl.innerHTML = footer;
    document.body.appendChild(footerEl);

    // Highlight active nav item
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#nav-placeholder .nav-link, #nav-placeholder .dropdown-item').forEach(function (a) {
        var href = a.getAttribute('href') || '';
        if (href && href.split('/').pop().split('#')[0] === path) {
            var li = a.closest('.nav-item');
            if (li) li.classList.add('active');
        }
    });
})();
