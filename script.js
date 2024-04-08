document.addEventListener('DOMContentLoaded', function() {
    // Simulated meme data
    // const memes = [
    //   { url: 'fun.mp4', caption: 'Funny meme' },
    //   { url: 'hal.mp4', caption: 'Hilarious meme' },
    //   { url: 'lol.mp4', caption: 'Laugh out loud meme' }
    // ];
  
    const memeContainer = document.querySelector('.meme-container');
  
    // Function to render memes
    function renderMemes() {
      memeContainer.innerHTML = '';
      memes.forEach(meme => {
        const memeItem = document.createElement('div');
        memeItem.classList.add('meme-item');
        memeItem.innerHTML = `
          <img src="${meme.url}" alt="${meme.caption}">
          <p>${meme.caption}</p>
        `;
        memeContainer.appendChild(memeItem);
      });
    }
  
    // Render memes when the page loads
    renderMemes();
  });
  