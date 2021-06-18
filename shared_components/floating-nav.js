/*Initialization*/

var styleElem = document.head.appendChild(document.createElement("style"));


/*Button for 'Back to top' and 'Forward to bottom'*/

var elesOfBackToTop = document.getElementsByClassName("back-to-top");
for (let i = 0; i < elesOfBackToTop.length; i++) {
    elesOfBackToTop[i].addEventListener('click', () => {
        document.getElementsByClassName('welcome-page')[0].scrollIntoView({ behavior: 'smooth' });
    });
}

var elesOfForwardToBottom = document.getElementsByClassName("forward-to-bottom");
for (let i = 0; i < elesOfForwardToBottom.length; i++) {
    elesOfForwardToBottom[i].addEventListener('click', () => {
        document.getElementsByTagName('footer')[0].scrollIntoView({ behavior: 'smooth' });
    });
}


/*Update visibility of buttons and navs*/

function updateNav() {
    if (window.scrollY <= 1) {

        for (let i = 0; i < elesOfBackToTop.length; i++) {
            elesOfBackToTop[i].classList.add("hidden");
        }
        document.getElementsByClassName("bottom-nav")[0].classList.remove("floating");

    } else if ((window.innerHeight + window.scrollY + 1) >= document.body.offsetHeight) {

        for (let i = 0; i < elesOfBackToTop.length; i++) {
            elesOfBackToTop[i].classList.remove("hidden");
        }
        for (let i = 0; i < elesOfForwardToBottom.length; i++) {
            elesOfForwardToBottom[i].classList.add("hidden");
        }
        document.getElementsByClassName("bottom-nav")[0].classList.remove("floating");

    } else {

        for (let i = 0; i < elesOfBackToTop.length; i++) {
            elesOfBackToTop[i].classList.remove("hidden");
        }
        for (let i = 0; i < elesOfForwardToBottom.length; i++) {
            elesOfForwardToBottom[i].classList.remove("hidden");
        }
        document.getElementsByClassName("bottom-nav")[0].classList.add("floating");

    }
}

setTimeout(function () {
    updateNav();
    window.addEventListener('scroll', () => {
        updateNav();
    });
}, 500);


/*Right Settings toggle*/

var isSettingsDrawerOn = false;
var SettingsDrawerElem = document.querySelector(".settings-drawer");

function openSettingsDrawer() {
    SettingsDrawerElem.classList.remove("hidden");
    styleElem.innerHTML = ".icon-btn.settings::before {transform: rotate(210deg);}";
    isSettingsDrawerOn = true;
}

function closeSettingsDrawer() {
    SettingsDrawerElem.classList.add("hidden");
    styleElem.innerHTML = ".icon-btn.settings::before {transform: rotate(0);}";
    isSettingsDrawerOn = false;
}

var settingsButton = document.querySelector(".right-settings > .settings");
settingsButton.addEventListener('click', () => {
    if (isSettingsDrawerOn) {
        closeSettingsDrawer();
    } else {
        openSettingsDrawer();
    }
});


window.addEventListener('scroll', () => {
    if (isSettingsDrawerOn) {
        closeSettingsDrawer();
    }
});

var isOnSettings = false;
document.querySelector(".right-settings").onmouseover = function () { isOnSettings = true; };
document.querySelector(".right-settings").onmouseout = function () { isOnSettings = false; };
window.addEventListener('click', () => {
    if (!isOnSettings && isSettingsDrawerOn) {
        closeSettingsDrawer();
    }
});


/*Bottom setting section*/

var isBottomSettingsExpanded = false;
var bottomSettingsElem = document.querySelector(".bottom-nav > .settings-section");
var bottomMainSectionElem = document.querySelector(".bottom-nav > .main-section");

function expandBottomSettings() {
    bottomSettingsElem.classList.remove("collapse");
    styleElem.innerHTML = ".icon-btn.settings::before {transform: rotate(-30deg);}";
    bottomMainSectionElem.style.opacity = "0";
    isBottomSettingsExpanded = true;
}

function collapseBottomSetting() {
    bottomSettingsElem.classList.add("collapse");
    styleElem.innerHTML = ".icon-btn.settings::before {transform: rotate(0);}";
    bottomMainSectionElem.style.opacity = "1";
    isBottomSettingsExpanded = false;
}

var btmSettingsButton = document.querySelector(".bottom-nav .settings-section > .settings");
btmSettingsButton.addEventListener('click', () => {
    if (isBottomSettingsExpanded) {
        collapseBottomSetting();
    } else {
        expandBottomSettings();
    }
});


window.addEventListener('scroll', () => {
    if (isBottomSettingsExpanded) {
        collapseBottomSetting();
    }
});

var isOnBtmNav = false;
document.querySelector(".bottom-nav").onmouseover = function () { isOnBtmNav = true; };
document.querySelector(".bottom-nav").onmouseout = function () { isOnBtmNav = false; };
window.addEventListener('click', () => {
    if (!isOnBtmNav && isBottomSettingsExpanded) {
        collapseBottomSetting();
    }
})




/*Theme toggle*/

console.log(localStorage.getItem("CurrentTheme"));


