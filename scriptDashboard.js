function clickSpan(evt, componentName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("activeImgNone");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("selectAnimate");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(componentName).style.display = "block";
    evt.currentTarget.className += " active";
}
