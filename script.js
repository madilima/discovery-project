function toggleModel() {
  const html = document.documentElement

  //if(html.classList.contains('light')) {
    //html.classList.remove('light')
  //} else {
  // html.classList.add('light') }

  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

//subistituição de imagem
  if(html.classList.contains('light')) {
   img.setAttribute('src', './asset/avatar-light-mode.png.png')
  } else {img.setAttribute('src', './asset/avatar-dark-mode.png.png')}
}
