function uploadPhoto() {
  const fileInput = document.getElementById('fileInput');
  const gallery = document.getElementById('gallery');

  const files = fileInput.files;
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      gallery.appendChild(img);
    };

    reader.readAsDataURL(file);
  }

  // Dosya yüklemesini sıfırla
  fileInput.value = '';
}
