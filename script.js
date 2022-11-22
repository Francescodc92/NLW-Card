let isIgnite = false

function changeCard() {
  const card = event.currentTarget
  const body =document.querySelector('body')
  const bg = isIgnite ? "explorer" : "ignite"
  
  isIgnite = !isIgnite
  card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`

  if(isIgnite){
    body.classList.remove('explorer')
    body.classList.add('ignite')
  }else{
    body.classList.remove('ignite')
    body.classList.add('explorer')
  }

}
