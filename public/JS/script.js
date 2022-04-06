const closeMessage = document.querySelector("#close")
const message = document.querySelector("#message")

closeMessage.addEventListener("click", function (){
    message.style.display = "none"
})

setTimeout(() => {
    message.style.display = "none"
}, 5000)

$('.carousel').carousel({
    interval: 3000
  })