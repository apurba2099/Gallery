const phrases = ["Anime World🔥!!", "Explore anime verse", "Explore character"];
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;

  function type() {
    const phrase = phrases[currentPhraseIndex];
    const speed = isDeleting ? 50 : 100; // Adjust speed based on deleting or typing

    if (!isDeleting) {
      document.getElementById('typewriter').textContent = phrase.substring(0, currentCharIndex++);
    } else {
      document.getElementById('typewriter').textContent = phrase.substring(0, currentCharIndex--);
    }

    if (currentCharIndex > phrase.length && !isDeleting) {
      isDeleting = true;
      setTimeout(() => type(), 500);
    } else if (currentCharIndex === 0 && isDeleting) {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(() => type(), 500);
    } else {
      setTimeout(() => type(), speed);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    type(); // Start typing when the page loads
  });
