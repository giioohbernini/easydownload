export const netcine = () => {

  console.log( "Don't inspect any more! - Netcine" )

  let playermenu = document.querySelector(".player-menu")
  const playercontent = document.querySelectorAll(".player-content")

  playercontent.forEach((item, index) => {
    const uri = item.querySelector('iframe').src

    let download = document.createElement("li")
    let downloadLink = document.createElement("a")

    downloadLink.href = uri
    downloadLink.textContent = "Download #" + (index + 1) + " - " + uri.slice(-3)
    download.appendChild(downloadLink)
    playermenu.appendChild(download)

  })
}

export const pnetcine = () => {

  const iframe = document.querySelector("iframe")
  window.location = iframe.src
}
