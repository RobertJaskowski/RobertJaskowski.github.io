window.onload = addFooter;

function addFooter(){
    var doc = document.getElementById("footer")

    var footerContent = document.createElement("div")
    footerContent.setAttribute('class','footer-content')
    doc.appendChild(footerContent)

    var copyright = document.createElement('p')
    copyright.innerHTML = "2019 &copy Robert Jaśkowski"
    footerContent.appendChild(copyright)

    var socials = document.createElement("div")
    socials.setAttribute('class','socials')

    footerContent.appendChild(socials)



    createSocial(socials, "https://maxxxer123.deviantart.com", "img/deviantart.svg")
    createSocial(socials, "https://www.artstation.com/robertjaskowski", "img/artstation.svg")
    createSocial(socials, "https://github.com/robertjaskowski", "img/github.svg")
    createSocial(socials, "https://www.youtube.com/channel/UCCa3HL9yIiH0SEtnEw0cxqg", "img/youTube.svg")
    createSocial(socials, "https://twitter.com/rjjaskowski", "img/twitter.svg")
    createSocial(socials, "https://www.linkedin.com/in/robert-jaśkowski-331a9214b/", "img/linkedin.svg")



}


function createSocial(doc, link, src){
    var element = document.createElement('a')
    element.setAttribute('href', link);
    element.setAttribute('target', "_blank")
    var img = document.createElement('img')
    img.setAttribute('src',src)
    element.appendChild(img)

    doc.appendChild(element);
}
