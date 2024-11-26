let hoverTrig = document.getElementById("trigger")
  let target = document.getElementById("target")

hoverTrig.addEventListener('mouseenter', change => {
  target.src = "img/PicB.jpg"
})
hoverTrig.addEventListener('mouseleave', change =>{
  target.src = "img/PicA.jpg"
})