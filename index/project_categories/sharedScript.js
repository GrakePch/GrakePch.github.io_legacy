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

function updateLeftNav() {
    if (window.scrollY > 1) {
        for (let i = 0; i < elesOfBackToTop.length; i++) {
            elesOfBackToTop[i].classList.remove("hidden");
        }
    }
    else {
        for (let i = 0; i < elesOfBackToTop.length; i++) {
            elesOfBackToTop[i].classList.add("hidden");
        }
    }

    if ((window.innerHeight + window.scrollY + 1) >= document.body.offsetHeight) {
        for (let i = 0; i < elesOfForwardToBottom.length; i++) {
            elesOfForwardToBottom[i].classList.add("hidden");
        }
    }
    else {
        for (let i = 0; i < elesOfForwardToBottom.length; i++) {
            elesOfForwardToBottom[i].classList.remove("hidden");
        }
    }
}

setTimeout(function () {
    updateLeftNav();
    window.addEventListener('scroll', updateLeftNav);
}, 500);
