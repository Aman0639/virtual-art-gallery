function openModal(title, artist, imgSrc) {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-artist').innerText = artist;
  document.getElementById('modal-img').src = imgSrc;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Close modal on clicking outside
window.onclick = function(event) {
  if (event.target == document.getElementById('modal')) {
    closeModal();
  }
}
