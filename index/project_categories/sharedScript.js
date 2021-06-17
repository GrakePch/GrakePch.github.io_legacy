/*Initialization*/


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

function updateNav() {
    if (window.scrollY <= 1) {

        for (let i = 0; i < elesOfBackToTop.length; i++) {
            elesOfBackToTop[i].classList.add("hidden");
        }
        document.getElementsByClassName("bottom-nav")[0].classList.remove("floating");

    }
    else if ((window.innerHeight + window.scrollY + 1) >= document.body.offsetHeight) {

        for (let i = 0; i < elesOfForwardToBottom.length; i++) {
            elesOfForwardToBottom[i].classList.add("hidden");
        }
        document.getElementsByClassName("bottom-nav")[0].classList.remove("floating");

    }
    else {

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
    window.addEventListener('scroll', updateNav);
}, 500);
