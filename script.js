function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /* outra maneira de escrever
  
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  
  */

  const imagem = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    imagem.setAttribute("src", "./assets/Avatar-light.png")
    imagem.setAttribute(
      "alt",
      "foto de Taynara Veloso usando óculos escuro e cabelo de Pucca"
    )
  } else {
    imagem.setAttribute("src", "./assets/Avatar-dark.png")
    imagem.setAttribute(
      "alt",
      "foto de Taynara Veloso sorrindo com camisa preta e cabelo black power"
    )
  }
}
