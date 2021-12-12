function setSentiment() {
  interactionMenu =
    document.getElementById("menu-container").children[0].children[0]
      .children[0];

  likes = parseInt(
    interactionMenu.children[0].children[0].children[1].ariaLabel
      .split(" likes")[0]
      .replace(/,/g, ""),
    10
  );
  views = parseInt(
    document
      .getElementsByClassName(
        "view-count style-scope ytd-video-view-count-renderer"
      )[0]
      .innerHTML.split(" views")[0]
      .replace(/,/g, ""),
    10
  );

  chrome.storage.sync.get({ green: 3, yellow: 1 }, function (result) {
    green = result.green;
    yellow = result.yellow;

    likeButton = interactionMenu.children[0];

    let emoji = document.createElement("p");
    lv_ratio = (likes / views) * 100;
    console.log(lv_ratio, "lv_ratio");
    if (lv_ratio > green) {
      emoji.innerHTML = "🟢";
    } else if (lv_ratio > yellow) {
      emoji.innerHTML = "🟡";
    } else {
      emoji.innerHTML = "🔴";
    }
    emoji.style.fontSize = "30px";

    likeButton.parentNode.insertBefore(emoji, likeButton);
  });
}

setInterval(() => {
  setSentiment();
}, 1000);
