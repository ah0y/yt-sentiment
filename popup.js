chrome.storage.sync.get({ green: 3, yellow: 1 }, function (result) {
  green = result.green;
  yellow = result.yellow;

  $("#green").text("green: " + green + "- 5");
  $("#yellow").text("yellow: " + yellow + "-" + green);
  $("#red").text("red: " + "0.5" + "-" + yellow);
});

$(".slider").slider({
  min: 0.5,
  max: 5,
  range: true,
  step: 0.1,
  values: [1, 3],
  slide: function (event, ui) {
    $("#green").text("green: " + ui.values[1] + "- 5");
    $("#yellow").text("yellow: " + ui.values[0] + "-" + ui.values[1]);
    $("#red").text("red: " + "0.5" + "-" + ui.values[0]);
    chrome.storage.sync.set({ yellow: ui.values[0] });
    chrome.storage.sync.set({ green: ui.values[1] });
  },
});
