function handleThumbnailClicks() {
  $('.thumbnail').on('click', function(event) {
    const imgSrc = $(event.currentTarget).find('img').attr('src');  
    const imgAlt = $(event.currentTarget).find('img').attr('alt');
    console.log(imgSrc);
    $('.hero img').attr({'src': imgSrc, 'alt': imgAlt});
  });
}

$(handleThumbnailClicks);