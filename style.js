let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
  
  slides[currentIndex].classList.remove('active');
  
  
  currentIndex = (currentIndex + 1) % slides.length;

 
  slides[currentIndex].classList.add('active');
}


slides[currentIndex].classList.add('active');


setInterval(showNextSlide, 5000);

document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const commentText = document.getElementById('comment').value;
    if(commentText.trim() === "") {
      alert("Por favor, escreva um comentário.");
      return;
    }
  
  
    console.log("Comentário enviado:", commentText);
  
   
    document.getElementById('commentResponse').textContent = 
    document.getElementById('commentResponse').style.display = 'block';
    
    document.getElementById('comment').value = "";
  });

  document.getElementById("cadastrar-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("auth-dropdown").classList.toggle("show");
  });

  window.onclick = function(event) {
    if (!event.target.matches('#cadastrar-link')) {
      var dropdowns = document.getElementsByClassName("dropdown");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };