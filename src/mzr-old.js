// I like this initial attempt,
// but I don't think that displaying the measure count over the text is pleasing.
// Yet, I'm still going keep this around as a reminder

var cpl = function(id, min, target, max) {
  var targetElement = document.getElementById(id),
    text = targetElement.innerHTML,
    pos1 = min,
    pos2 = target,
    pos3 = max,
    front = text.slice(0, pos1 - 1),
    mid = text.slice(pos1 - 1, pos3),
    end = text.slice(pos3, text.length),
    cplMin = mid[0],
    cplTarget = mid[pos2 - pos1],
    cplMax = mid[mid.length - 1],
    midLeft = mid.slice(1, pos2 - pos1),
    midRight = mid.slice(pos2 - pos1 + 1, mid.length - 1);

  frankenLine =
    front +
    "<span class=cplRange><span class=tooltip data-tooltip=" +
    pos1 +
    ">" +
    cplMin +
    "</span>" +
    midLeft +
    "<span class=tooltip data-tooltip=" +
    pos2 +
    ">" +
    cplTarget +
    "</span>" +
    midRight +
    "<span class=tooltip data-tooltip=" +
    pos3 +
    ">" +
    cplMax +
    "</span></span>" +
    end;

  targetElement.innerHTML = frankenLine;
};
