var darkModeOn = false
function darkModeSwitcher() {
    var h1All = document.getElementsByTagName("h1");
    var pAll = document.getElementsByTagName("p");
    var lightDarkElements = document.getElementsByClassName("light-dark-theme");

    if (darkModeOn == false) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "#000";
        
        for (i = 0; i < lightDarkElements.length; i++) {
            lightDarkElements[i].classList.add("dark-mode");
            lightDarkElements[i].classList.remove("light-mode");
        }

        for (i = 0; i < h1All.length; i++) {
            h1All[i].style.color = "#fff";
        }
        for (i = 0; i < pAll.length; i++) {
            pAll[i].style.color = "#fff";
        }
        darkModeOn = true;
    } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "#fff";

        for (i = 0; i < lightDarkElements.length; i++) {
            lightDarkElements[i].classList.add("light-mode");
            lightDarkElements[i].classList.remove("dark-mode");
        }

        for (i = 0; i < h1All.length; i++) {
            h1All[i].style.color = "#000";
        }
        for (i = 0; i < pAll.length; i++) {
            pAll[i].style.color = "#000";
        }
        darkModeOn = false;
    }
}