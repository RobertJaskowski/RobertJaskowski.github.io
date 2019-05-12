window.onload = addFooter;

function addFooter(){
    var doc = document.getElementsByClassName("populate-footer")[0]

    // var footerContent = document.createElement("div")
    // footerContent.setAttribute('class','footer-content')
    // doc.appendChild(footerContent)


    var footer = document.getElementById("footerCopyright")
    var copyright = document.createElement('p')
    copyright.innerHTML = "2019 &copy Robert Jaśkowski"
    footer.appendChild(copyright)

    // var socials = document.createElement("div")
    // socials.setAttribute('class','socials')
    // footerContent.appendChild(socials)



    createSocial(doc, "https://maxxxer123.deviantart.com", "img/deviantart.svg")
    createSocial(doc, "https://www.artstation.com/robertjaskowski", "img/artstation.svg")
    createSocial(doc, "https://github.com/robertjaskowski", "img/github.svg")
    createSocial(doc, "https://www.youtube.com/channel/UCCa3HL9yIiH0SEtnEw0cxqg", "img/youTube.svg")
    createSocial(doc, "https://twitter.com/rjjaskowski", "img/twitter.svg")
    createSocial(doc, "https://www.linkedin.com/in/robert-jaśkowski-331a9214b/", "img/linkedin.svg")



    //  <div class="col-3 col-sm-2 col-md-2 col-xl-1 max-width-50" >
    //   <img class="img-fluid" src="img/deviantart.svg" alt="asd">
    // </div>
    // <div class="col-3 col-sm-2 col-md-2 col-xl-1 max-width-50" >
    //   <img class="img-fluid" src="img/deviantart.svg" alt="asd">
    // </div>
    // <div class="col-3 col-sm-2 col-md-2 col-xl-1 max-width-50" >
    //   <img class="img-fluid" src="img/deviantart.svg" alt="asd">
    // </div>
    //
    // <div class="col-3 col-sm-2 col-md-2 col-xl-1 max-width-50" >
    //   <img class="img-fluid" src="img/deviantart.svg" alt="asd">
    // </div>
    // <div class="col-3 col-sm-2 col-md-2 col-xl-1 max-width-50" >
    //   <img class="img-fluid" src="img/deviantart.svg" alt="asd">
    // </div>
    // <div class="col-3 col-sm-2 col-md-2 col-xl-1 max-width-50" >
    //   <img class="img-fluid" src="img/deviantart.svg" alt="asd">
    // </div>

}


function createSocial(doc, link, src){
  var div = document.createElement("div")
  div.setAttribute('class','col-4 col-sm-2 col-md-2 col-xl-2 ')
  doc.appendChild(div)
  var element = document.createElement('a')
  element.setAttribute('href', link);
  element.setAttribute('target', "_blank")
  div.appendChild(element)
  var img = document.createElement('img')
  img.setAttribute('src',src)
  img.setAttribute('class','img-fluid')
  element.appendChild(img)

}
