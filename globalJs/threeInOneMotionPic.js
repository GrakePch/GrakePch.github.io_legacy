function foldSiblingPics(targetId) {
    var windowWidth = document.body.clientWidth

    if (windowWidth >= 820) {
        var x = document.getElementById(targetId).parentNode.children
        var i;
        for (i = 0; i < x.length; i++) {
            if (x[i] != document.getElementById(targetId)) {
                x[i].style.width = "57px";
            } else {
                x[i].style.width = "546px";
                x[i].style.cursor = "default";
            }
        }
    }

    else {
        var x = document.getElementById(targetId).parentNode.children
        var i;
        for (i = 0; i < x.length; i++) {
            if (x[i] != document.getElementById(targetId)) {
                x[i].style.height = "68px";
            } else {
                x[i].style.height = "172px";
                x[i].style.cursor = "default";
            }
        }
    }
}


function highlightHoverPics(targetId) {
    var x = document.getElementById(targetId).parentNode.children
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i] != document.getElementById(targetId)) {
            x[i].style.opacity = "0.6";
        } else {
            x[i].style.opacity = "1";
        }
    }
}


function resetPicsStyle(targetId) {
    var windowWidth = document.body.clientWidth

    if (windowWidth >= 820) {
        var x = document.getElementById(targetId).children
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.width = "220px";
            x[i].style.opacity = "1";
            x[i].style.cursor = "pointer";
        }
    }

    else {
        var x = document.getElementById(targetId).children
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.height = "33.3%";
            x[i].style.opacity = "1";
            x[i].style.cursor = "pointer";
        }
    }
}