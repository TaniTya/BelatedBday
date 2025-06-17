const lyrics = [
    `"I’d rather die than be with you, if it’s fake love." – *Shinunoga E-Wa*`,
    `"It could’ve been anyone… but somehow, it’s you." – *Dare demo yokatta no ni*`,
    `"No matter how many times I fall, I’ll rise again and again." – *Nan-Nan*`,
    `"I don't know the name of love yet, but I dance with you anyway." – *Matsuri*`,
    `"I want to live in kindness — nothing more, nothing less." – *Grace*`
  ];
  
  document.getElementById("lyricBtn").addEventListener("click", () => {
    const messageDiv = document.getElementById("message");
    const lyricText = document.getElementById("lyricText");
    const randomIndex = Math.floor(Math.random() * lyrics.length);
    lyricText.textContent = lyrics[randomIndex];
    messageDiv.classList.remove("hidden");
  });
  
  function goToLetter() {
    window.location.href = "letter.html";
  }