const form = (high, low) => {
  let box = document.createElement("div")
  box.classList = "box"

  let closebtn = document.createElement("div")
  closebtn.classList = "closebtn"

  let cbtn = document.createElement("button")
  cbtn.textContent = "x"
  cbtn.addEventListener('click', () => {
    box.remove()
  })

  let boxcontent = document.createElement("div")
  boxcontent.classList = "boxcontent"

  let img = document.createElement("img")
  img.width = "250"
  img.src = "https://i.imgur.com/Jl9XAFI.png"

  let buttons = document.createElement("div")
  buttons.classList = "buttons"

  let highbtn = document.createElement("a")
  highbtn.textContent = "Alta qualidade"
  highbtn.href = high
  highbtn.download = ""

  let lowbtn = document.createElement("a")
  lowbtn.textContent = "Baixa qualidade"
  lowbtn.href = low
  lowbtn.download = ""

  buttons.appendChild(highbtn)
  buttons.appendChild(lowbtn)

  boxcontent.appendChild(img)
  boxcontent.appendChild(buttons)

  closebtn.appendChild(cbtn)

  box.appendChild(closebtn)
  box.appendChild(boxcontent)

  document.body.appendChild(box)
}

export default form
