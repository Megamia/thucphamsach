document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header"); // Lấy phần tử header
  const headerHeight = header.offsetHeight; // Lấy chiều cao của header
  const headerHeightSmall = 80;
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > headerHeight) {
      // Kiểm tra vị trí cuộn trang có vượt qua chiều cao của header không
      header.classList.add("fixed");
      header.style.height = headerHeightSmall + "px";
    } else {
      header.style.height = "";
      header.classList.remove("fixed");
    }
  });
});

var index = 0;
var changeImage = function () {
  var imgs = ["./assets/img/Banner1.png", "./assets/img/Banner2.png"];
  document.getElementById("image").src = imgs[index];
  index++;
  if (index == 2) {
    index = 0;
  }
};

setInterval(changeImage, 3000);
