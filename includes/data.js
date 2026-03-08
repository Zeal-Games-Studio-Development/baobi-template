// Database sản phẩm - dùng chung cho tất cả trang
var PRODUCTS = {
    // ỐNG GIẤY, THANH V
    "89018": { id:"89018", name:"Ống Giấy", cat:"ong-giay-thanh-v", catName:"Ống Giấy, Thanh V", img:"sp-ong-giay-1.jpg", desc:"Ống giấy chất lượng cao, độ bền tốt, phù hợp nhiều ngành sản xuất." },
    "89019": { id:"89019", name:"Ống Giấy", cat:"ong-giay-thanh-v", catName:"Ống Giấy, Thanh V", img:"sp-ong-giay-2.jpg", desc:"Ống giấy với đa dạng kích thước, đáp ứng nhu cầu cuộn tròn vật liệu." },
    "89020": { id:"89020", name:"Ống Giấy", cat:"ong-giay-thanh-v", catName:"Ống Giấy, Thanh V", img:"sp-ong-giay-3.jpg", desc:"Ống giấy lõi cứng, chịu lực tốt, phù hợp ngành dệt, in ấn." },
    "89021": { id:"89021", name:"Ống Giấy", cat:"ong-giay-thanh-v", catName:"Ống Giấy, Thanh V", img:"sp-ong-giay-4.jpg", desc:"Ống giấy tiêu chuẩn, được sản xuất từ nguyên liệu chất lượng cao." },
    "89022": { id:"89022", name:"Ống Giấy", cat:"ong-giay-thanh-v", catName:"Ống Giấy, Thanh V", img:"g5.jpg", desc:"Ống giấy nhiều lớp, độ cứng đạt tiêu chuẩn, bền và tiện lợi." },
    "89023": { id:"89023", name:"Thanh V", cat:"ong-giay-thanh-v", catName:"Ống Giấy, Thanh V", img:"sp-thanh-v-1.jpg", desc:"Thanh V nẹp giấy bảo vệ góc cạnh sản phẩm trong quá trình vận chuyển." },
    "89027": { id:"89027", name:"Thanh V", cat:"ong-giay-thanh-v", catName:"Ống Giấy, Thanh V", img:"sp-thanh-v-2.jpg", desc:"Thanh V bảo vệ phép mạnh, phù hợp đóng gói đồ nội thất, thiết bị." },
    "89028": { id:"89028", name:"Thanh V", cat:"ong-giay-thanh-v", catName:"Ống Giấy, Thanh V", img:"sp-thanh-v-3.jpg", desc:"Thanh V nẹp giấy chịu lực tốt, bảo vệ hàng hóa hiệu quả." },
    "89029": { id:"89029", name:"Thanh V", cat:"ong-giay-thanh-v", catName:"Ống Giấy, Thanh V", img:"sp-thanh-v-4.jpg", desc:"Thanh V tiêu chuẩn, sản xuất từ giấy tái chế chất lượng." },
    "89024": { id:"89024", name:"Thanh V", cat:"ong-giay-thanh-v", catName:"Ống Giấy, Thanh V", img:"t5.jpg", desc:"Thanh V nẹp giấy nhiều quy cách, phục vụ nhiều ngành sản xuất." },
    "89025": { id:"89025", name:"Thanh V Nẹp Giấy", cat:"ong-giay-thanh-v", catName:"Ống Giấy, Thanh V", img:"thanh-V.jpg", desc:"Thanh V nẹp giấy cao cấp, bảo vệ tốt các góc cạnh sắc bén." },
    "89026": { id:"89026", name:"Thanh V Nẹp Giấy", cat:"ong-giay-thanh-v", catName:"Ống Giấy, Thanh V", img:"thanh-v2.jpg", desc:"Thanh V nẹp giấy dày, cứng cáp, chịu tải trọng lớn." },
    // BAO BÌ GIẤY
    "89002": { id:"89002", name:"Bao Bì Dược Phẩm", cat:"bao-bi-giay", catName:"Bao Bì Giấy", img:"duoc-pham-1.jpg", desc:"Bao bì dược phẩm in ấn đẹp, đảm bảo vệ sinh an toàn thực phẩm." },
    "89003": { id:"89003", name:"Bao Bì Dược Phẩm", cat:"bao-bi-giay", catName:"Bao Bì Giấy", img:"duoc-pham-2.jpg", desc:"Hộp giấy dược phẩm in offset sắc nét, chất lượng cao." },
    "89004": { id:"89004", name:"Bao Bì Dược Phẩm", cat:"bao-bi-giay", catName:"Bao Bì Giấy", img:"duoc-pham-3.jpg", desc:"Bao bì dược phẩm thiết kế theo yêu cầu, in ấn chuyên nghiệp." },
    "89006": { id:"89006", name:"Bao Bì Dược Phẩm", cat:"bao-bi-giay", catName:"Bao Bì Giấy", img:"duoc-pham-4.jpg", desc:"Hộp giấy ngành dược, chống ẩm tốt, bảo quản sản phẩm hiệu quả." },
    "89007": { id:"89007", name:"Bao Bì Dược Phẩm", cat:"bao-bi-giay", catName:"Bao Bì Giấy", img:"duoc-pham-5.jpg", desc:"Bao bì in nhiều màu, thiết kế đa dạng theo yêu cầu khách hàng." },
    "89008": { id:"89008", name:"Bao Bì Mỹ Phẩm", cat:"bao-bi-giay", catName:"Bao Bì Giấy", img:"my-pham-1.jpg", desc:"Hộp giấy mỹ phẩm cao cấp, in ấn tinh tế, sang trọng." },
    "89009": { id:"89009", name:"Bao Bì Mỹ Phẩm", cat:"bao-bi-giay", catName:"Bao Bì Giấy", img:"my-pham-2.jpg", desc:"Bao bì mỹ phẩm thiết kế độc đáo, nổi bật trên kệ hàng." },
    "89010": { id:"89010", name:"Bao Bì Mỹ Phẩm", cat:"bao-bi-giay", catName:"Bao Bì Giấy", img:"my-pham-3.jpg", desc:"Hộp giấy mỹ phẩm chắc chắn, bảo vệ sản phẩm trong vận chuyển." },
    "89011": { id:"89011", name:"Bao Bì Mỹ Phẩm", cat:"bao-bi-giay", catName:"Bao Bì Giấy", img:"my-pham-4.jpg", desc:"Bao bì mỹ phẩm nhiều kích thước, phù hợp đa dạng sản phẩm." },
    "89012": { id:"89012", name:"Bao Bì Mỹ Phẩm", cat:"bao-bi-giay", catName:"Bao Bì Giấy", img:"my-pham-5.jpg", desc:"Hộp giấy mỹ phẩm in 4 màu, chất lượng xuất khẩu." },
    "89013": { id:"89013", name:"Bao Bì Ngành Giày Da", cat:"bao-bi-giay", catName:"Bao Bì Giấy", img:"giay-da-1.jpg", desc:"Hộp giấy ngành giày da, bền chắc, in logo theo yêu cầu." },
    "89014": { id:"89014", name:"Bao Bì Ngành Giày Da", cat:"bao-bi-giay", catName:"Bao Bì Giấy", img:"giay-da-2.jpg", desc:"Bao bì giày dép chất lượng cao, thiết kế theo thương hiệu." },
    "89015": { id:"89015", name:"Bao Bì Ngành Giày Da", cat:"bao-bi-giay", catName:"Bao Bì Giấy", img:"giay-da-3.jpg", desc:"Hộp giấy đựng giày cao cấp, chống ẩm, bảo vệ sản phẩm." },
    "89016": { id:"89016", name:"Bao Bì Ngành Giày Da", cat:"bao-bi-giay", catName:"Bao Bì Giấy", img:"giay-da-4.jpg", desc:"Bao bì ngành da giày in offset đẹp, chắc chắn." },
    "89017": { id:"89017", name:"Bao Bì Ngành Giày Da", cat:"bao-bi-giay", catName:"Bao Bì Giấy", img:"giay-da-5.jpg", desc:"Hộp giấy ngành giày da nhiều kích thước chuẩn quốc tế." },
    "89032": { id:"89032", name:"Bao Bì May Mặc", cat:"bao-bi-giay", catName:"Bao Bì Giấy", img:"may-mac-1.jpg", desc:"Bao bì ngành may mặc in hình ảnh sắc nét, bắt mắt." },
    "89033": { id:"89033", name:"Bao Bì May Mặc", cat:"bao-bi-giay", catName:"Bao Bì Giấy", img:"may-mac-2.jpg", desc:"Hộp giấy may mặc sang trọng, phù hợp các thương hiệu thời trang." },
    "89005": { id:"89005", name:"Bao Bì May Mặc", cat:"bao-bi-giay", catName:"Bao Bì Giấy", img:"may-mac-3.jpg", desc:"Bao bì may mặc theo yêu cầu, in ấn đẹp, chất lượng." },
    "89030": { id:"89030", name:"Bao Bì May Mặc", cat:"bao-bi-giay", catName:"Bao Bì Giấy", img:"may-mac-4.jpg", desc:"Hộp giấy thời trang cao cấp, thiết kế độc đáo." },
    "89031": { id:"89031", name:"Bao Bì May Mặc", cat:"bao-bi-giay", catName:"Bao Bì Giấy", img:"may-mac-5.jpg", desc:"Bao bì may mặc in offset 4 màu, đa dạng mẫu mã." },
    // THÙNG CARTON
    "89000": { id:"89000", name:"Thùng Carton", cat:"thung-carton", catName:"Thùng Carton", img:"carton-1.jpg", desc:"Thùng carton 3 lớp tiêu chuẩn, bền chắc, giá cạnh tranh." },
    "88994": { id:"88994", name:"Thùng Carton", cat:"thung-carton", catName:"Thùng Carton", img:"carton-3.jpg", desc:"Thùng carton 5 lớp chịu lực tốt, bảo vệ hàng hóa an toàn." },
    "89034": { id:"89034", name:"Thùng Carton", cat:"thung-carton", catName:"Thùng Carton", img:"carton-4.jpg", desc:"Thùng carton 7 lớp siêu bền, dùng cho hàng nặng, thiết bị." },
    "89035": { id:"89035", name:"Thùng Carton", cat:"thung-carton", catName:"Thùng Carton", img:"carton-5.jpg", desc:"Thùng carton nắp gài, dễ đóng mở, tái sử dụng nhiều lần." },
    "88996": { id:"88996", name:"Thùng Carton In Offset", cat:"thung-carton", catName:"Thùng Carton", img:"offset-1.jpg", desc:"Thùng carton in offset đẹp, quảng bá thương hiệu hiệu quả." },
    "88997": { id:"88997", name:"Thùng Carton In Offset", cat:"thung-carton", catName:"Thùng Carton", img:"offset-2.jpg", desc:"Thùng carton in màu sắc nét, dùng trong bán lẻ, trưng bày." },
    "88998": { id:"88998", name:"Thùng Carton In Offset", cat:"thung-carton", catName:"Thùng Carton", img:"offset-3.jpg", desc:"Thùng carton in offset nhiều màu, thiết kế theo yêu cầu." },
    "88999": { id:"88999", name:"Thùng Carton In Offset", cat:"thung-carton", catName:"Thùng Carton", img:"offset-4.jpg", desc:"Thùng carton in offset cao cấp, chất lượng xuất khẩu." }
};

// Gallery images for Thư Viện Ảnh
var GALLERY = [
    "sp-ong-giay-1.jpg","sp-ong-giay-2.jpg","sp-ong-giay-3.jpg","sp-ong-giay-4.jpg","g5.jpg",
    "sp-thanh-v-1.jpg","sp-thanh-v-2.jpg","sp-thanh-v-3.jpg","sp-thanh-v-4.jpg","t5.jpg","thanh-V.jpg","thanh-v2.jpg",
    "duoc-pham-1.jpg","duoc-pham-2.jpg","duoc-pham-3.jpg","duoc-pham-4.jpg","duoc-pham-5.jpg",
    "my-pham-1.jpg","my-pham-2.jpg","my-pham-3.jpg","my-pham-4.jpg","my-pham-5.jpg",
    "giay-da-1.jpg","giay-da-2.jpg","giay-da-3.jpg","giay-da-4.jpg","giay-da-5.jpg",
    "may-mac-1.jpg","may-mac-2.jpg","may-mac-3.jpg","may-mac-4.jpg","may-mac-5.jpg",
    "carton-1.jpg","carton-3.jpg","carton-4.jpg","carton-5.jpg",
    "offset-1.jpg","offset-2.jpg","offset-3.jpg","offset-4.jpg",
    "about-img.jpg"
];
