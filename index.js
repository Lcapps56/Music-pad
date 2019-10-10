window.addEventListener("load",() => {
    const sounds = document.querySelectorAll(".sound")
    const pads = document.querySelectorAll(".pads div")
    const visual = document.querySelector(".visual")
    const colors = [
        "#60d394",
        "#d3d160",
        "#d360c9",
        "#7160d3",
        "#d3607d",
        "#60d3cd"
    ]
    console.log(sounds)

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0
            sounds[index].play()

            createBubbles(index)
        })
    })
    const createBubbles = (index) => {
        const bubble = document.createElement("div")
        visual.appendChild(bubble)
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = "jump 1s ease"
        bubble.addEventListener("animationed", function (){
            visual.removeChild(this)
        })
    }
})
