function modoAlternancia() {
  const html = document.documentElement
  html.classList.toggle("claro")

  //pegar a tag img
  const imagem = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("claro")) {
    //se tiver modo claro, adicionar a imagem perfil-noite
    imagem.setAttribute("src", "./assets/perfil-noite.png")
  } else {
    imagem.setAttribute("src", "./assets/perfil.png")
  }
}
