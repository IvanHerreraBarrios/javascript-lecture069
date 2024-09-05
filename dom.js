window.addEventListener("resize", e=> {
    console.clear()
    console.log(window.innerWidth)
    console.log(window.innerHeight)
    //monitor
    console.log(window.outerHeight)
    console.log(window.outerWidth)
    console.log(window.scrollX)
    console.log(window.scrollY)
})

window.addEventListener("scroll", e => {
    console.clear()
    console.log("-------------Scroll-----")
    console.log(window.scrollX)
    console.log(window.scrollY)
})

window.addEventListener("load", e => {
    console.clear()
    console.log("----------Load--------")
    console.log(window.scrollX)
    console.log(window.scrollY)
})

document.addEventListener("DOMContentLoaded", e => {
    console.log("---------DOM--------")
    console.log(window.scrollX)
    console.log(window.scrollY)
})