import { netcine, pnetcine } from './netcine'
import form from './form'

const host = window.location.host;

if (host == "netcine.us") {
  netcine()
} else if(host == "p.netcine.us"){
  pnetcine()
} else if (host == "www.micetop.us" || host == "micetop.us"){

  console.log("Don't inspect any more! - p.netcine");

  fetch(document.URL)
    .then(res => res.text())
    .then(data => {
      document.querySelector("#demo").style.display = "none"

      const regex = /file: "(.*)"/g
      const result = regex[Symbol.match](data)

      const links = result.map((item, index) =>
        item.slice(7,-1)
      )

      form(...links)

    })
}

