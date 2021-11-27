function setSentiment() {
     interactionMenu = document.getElementById("menu-container").children[0].children[0].children[0]
     likes = parseInt(interactionMenu.children[0].children[0].children[1].ariaLabel.split(" likes")[0].replace(/,/g, ''), 10)
     views = parseInt(document.getElementsByClassName("view-count style-scope ytd-video-view-count-renderer")[0].innerHTML.split(" views")[0].replace(/,/g, ''), 10)


    likeButton = interactionMenu.children[0]

    let emoji = document.createElement("p")
    lr_ratio = likes / views * 100
    if (lr_ratio > 3) {
        emoji.innerHTML =  "🟢"
    }
    else if (lr_ratio > 2) {
        emoji.innerHTML =  "🟠"
    }
    else if (lr_ratio > 1) {
        emoji.innerHTML =  "🟡"
    }
    else {
        emoji.innerHTML =  "🔴"
    }
    emoji.style.fontSize = "30px"


    likeButton.parentNode.insertBefore(emoji, likeButton)

}

window.addEventListener("load", function(){
    setInterval(setSentiment, 250)
});
