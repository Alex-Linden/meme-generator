
const form = document.querySelector('#form')
const imgEl = document.querySelector("#img-el");
const topEl = document.querySelector("#top-el");
const btmEl = document.querySelector("#btm-el");
const memeDisp = document.querySelector('#memeDisp')


form.addEventListener('submit', function(e){
  e.preventDefault();
  let newMeme = document.createElement('div');
  newMeme.className = "meme";

  let img = document.createElement('img');
  img.src = imgEl.value;

  let topText = document.createElement('div');
  topText.className = 'top-text';
  topText.innerHTML = topEl.value;

  let bottomText = document.createElement('div');
  bottomText.className = 'bottom-text';
  bottomText.innerHTML = btmEl.value;

  newMeme.append(
    img, topText, bottomText
  );
  memeDisp.append(newMeme)

  imgEl.value = '';
  topEl.value = '';
  btmEl.value = '';


  newMeme.addEventListener("click", function(){
    memeDisp.removeChild(newMeme);
  })
});

// ways to improve, change font size or color.
//dynamic when hovering over to delete meme