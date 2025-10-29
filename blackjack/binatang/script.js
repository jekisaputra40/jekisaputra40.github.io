document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('downloadBtn');
  if(btn){
    btn.addEventListener('click', function(e){
      e.preventDefault();
      alert('Untuk demo ini: gunakan link ZIP yang disediakan oleh ChatGPT (download dari UI).');
    });
  }
});
