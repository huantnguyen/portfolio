function handleThumbnailClicks() {
  $('.thumbnail').on('click', function(event) {
    const imgSrc = $(event.currentTarget).find('img').attr('src');  
    const imgAlt = $(event.currentTarget).find('img').attr('alt');
    
    $('.hero').attr('src', imgSrc).attr('alt', imgAlt);
  });
}

$(handleThumbnailClicks);