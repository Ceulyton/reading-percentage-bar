//pick up the text container
const postWrap = document.querySelector(".post-wrap")

// create the bar
let bar = document.createElement("div")

// bar style
bar.style.height = "4px"
bar.style.width = "0"
bar.style.backgroundColor = "#6633cc"
bar.style.position = "fixed"
bar.style.top = "0"
bar.style.left = "0"
bar.style.zIndex = "999"
bar.style.transition = "0.2s"

//add to the body of the page
document.body.append(bar)

//upgrade the bar
function updateBar() {
    //box size containing text
    const textHeight = postWrap.offsetHeight

    //check in what position of the page I'm
    const pagePositionY = window.pageYOffset

    //rule of 3
    const updateBar = pagePositionY * 100 / textHeight

    bar.style.width = updateBar + "%"
}

window.addEventListener("load", () => {
    //check scroll movement
    document.addEventListener("scroll", updateBar)
})