var drawerOn = false
function drawerSwitcher() {
    var drawerBox = document.getElementById("drawer-box");
    var overlay = document.getElementById("whole-page-overlay");
    var minItemBg = document.getElementsByClassName("min-items");

    if (drawerOn == false){
        drawerBox.classList.add("drawer-on");
        drawerBox.classList.remove("drawer-off");
        overlay.classList.add("overlay-on");
        for (i = 0; i < minItemBg.length; i++) {
            minItemBg[i].classList.add("vis-hidden");
        }
        drawerOn = true;
    } else {
        drawerBox.classList.add("drawer-off");
        drawerBox.classList.remove("drawer-on");
        overlay.classList.remove("overlay-on");
        for (i = 0; i < minItemBg.length; i++) {
            minItemBg[i].classList.remove("vis-hidden");
        }
        drawerOn = false;
    }
}

function drawerSwitcherMobile() {
    var drawerBox = document.getElementById("m-nav-drawer-box");
    var overlay = document.getElementById("m-whole-page-overlay");

    if (drawerOn == false){
        drawerBox.classList.add("drawer-on");
        drawerBox.classList.remove("drawer-off");
        overlay.classList.add("overlay-on");
        drawerOn = true;
    } else {
        drawerBox.classList.add("drawer-off");
        drawerBox.classList.remove("drawer-on");
        overlay.classList.remove("overlay-on");
        drawerOn = false;
    }
}

// When drawer is on, detect mouse is hovering over List in Drawer, with Minimal List in the middle.
function listBgIsHovered(id) {
    var ele = document.getElementById(id);
    ele.classList.add("super-hover");
}

function listBgIsNotHovered(id) {
    var ele = document.getElementById(id);
    ele.classList.remove("super-hover");
}

//float-drawer-button icon change.
function FDBicoIsHovered() {
    var ele = document.getElementById("FDB-bg");
    ele.classList.add("opacity0");
    setTimeout(function() {
        ele.classList.remove("ico-menu");
        ele.classList.remove("ico-gp");
        ele.classList.remove("ico-left");
        if (drawerOn) {ele.classList.add("ico-left");}
        else {ele.classList.add("ico-menu");};
        ele.classList.remove("opacity0");
    }, 150);
}

function FDBicoIsNotHovered() {
    var ele = document.getElementById("FDB-bg");
    setTimeout(function() {
        ele.classList.add("opacity0");
        setTimeout(function() {
            ele.classList.add("ico-gp");
            ele.classList.remove("ico-menu");
            ele.classList.remove("ico-left");
            ele.classList.remove("opacity0");
        }, 150);
    }, 100);
}