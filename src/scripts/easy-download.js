import {netcine, pnetcine } from './netcine'
import form from './form'

if (window.location.host == "netcine.us") {
  netcine()
} else if(window.location.host == "p.netcine.us"){
  pnetcine()
} else if (window.location.host == "www.micetop.us" || window.location.host == "micetop.us"){

  console.log("Don't inspect any more! - p.netcine");

  fetch(document.URL).then((res) => {
    res.text().then((data) => {
      document.querySelector("#demo").style.display = "none"

      const re = /file: "(.*)"/g
      const result = re[Symbol.match](data)
      let high
      let low

      result.forEach((item, index) => {
        (index == 0)
          ? low = item.slice(7,-1)
          : high = item.slice(7,-1)
      })

      form(high, low)

    })
  });
}

