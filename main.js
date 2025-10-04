// Когда все элементы страницы загружены
document.addEventListener("DOMContentLoaded", function () {
  // Находим все изображения на странице
  const images = document.querySelectorAll("img");

  images.forEach(img => {
    // Если изображение не загрузилось, заменяем его заглушкой
    img.addEventListener("error", function () {
      this.src = "https://via.placeholder.com/600x400?text=Demo+Image";
    });
  });
});
