let imageIndex = 0;
  const totalImages = document.querySelectorAll('.concertpics img').length;

  function showImage(index) {
    const imageSlider = document.querySelector('.concertpics');
    const images = document.querySelectorAll('.concertpics img');

    images.forEach(image => {
      image.style.display = 'none';
    });

    images[index].style.display = 'block';
  }

  function changeSlide(direction) {
    imageIndex += direction;

    if (imageIndex < 0) {
      imageIndex = totalImages - 1;
    } else if (imageIndex >= totalImages) {
      imageIndex = 0;
    }

    showImage(imageIndex);
  }

  setInterval(() => {
    changeSlide(1);
  }, 3000);