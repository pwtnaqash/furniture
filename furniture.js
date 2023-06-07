import img1 from './images/cartlist1/chair11.png'

function openPopup() {
    var popup = $('#imagePopup');
    var popupImage = $('#popupImage');
    var downloadButton = $('#downloadButton');

    // Replace the image source and download link href with your actual values
    var imageSrc = 'your-image.jpg';
    var downloadLink = 'your-image.jpg';

    popupImage.attr('src', imageSrc);
    downloadButton.attr('href', downloadLink);
    popup.addClass('show');
  }


