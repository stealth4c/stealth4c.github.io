var timesClicked = 0;

function onClick() {
    timesClicked++;
}

if (timesClicked < 20) {
    document.getElementById("howManyTimesClicked").innerHTML = "you clicked the button " + toString(timesClicked) + " times.";
} else if (timesClicked >= 20 && timesClicked < 40) {
    document.getElementById("howManyTimesClicked").innerHTML = "you clicked the button " + toString(timesClicked) + " times.\nyou must be really good at this.\nor bored.";
} else {
    document.getElementById("howManyTimesClicked").innerHTML = "bruh what is wrong with you?\nfind something else to do.";
}