function setSentiment() {
  if (document.getElementsByClassName("lv_ratio_light").length == 0) {
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

      let light = document.createElement("p");
      lv_ratio = (likes / views) * 100;
      console.log(lv_ratio, "lv_ratio");
      if (lv_ratio > green) {
        light.innerHTML = "🟢";
      } else if (lv_ratio > yellow) {
        light.innerHTML = "🟡";
      } else {
        light.innerHTML = "🔴";
      }
      light.style.fontSize = "30px";
      light.classList.add("lv_ratio_light");

      likeButton.parentNode.insertBefore(light, likeButton);
    });
  }
}

setInterval(() => {
  setSentiment();
}, 1000);
