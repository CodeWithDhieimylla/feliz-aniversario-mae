function mostrarHomenagem() {
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('homenagem').classList.remove('hidden');
  document.getElementById('music').play();
}

// Criar corações caindo
function criarCoracoes() {
  const heartsContainer = document.querySelector('.hearts');
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    heartsContainer.appendChild(heart);
  }
}
criarCoracoes();
