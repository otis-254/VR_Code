let currentIndex = 0;
const qrCode = {
  src: 'Location1.png',
  title: 'The 1St Location',
  description: 'Description is hidden until you Scan the Code',
  image: 'image1.jpg',
  audio: 'audio1.mp3'
};

const qrCodeImage = document.getElementById('qrcode-image');
const titleElement = document.getElementById('title');
const descriptionElement = document.getElementById('description');
const imageElement = document.getElementById('image');
const audioElement = document.getElementById('audio');

function updateContent() {
  qrCodeImage.src = qrCode.src;
  titleElement.textContent = qrCode.title;
  descriptionElement.textContent = qrCode.description;
  imageElement.src = qrCode.image;
  audioElement.src = qrCode.audio;
}

updateContent();