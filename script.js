liczbaKropek = 0;
setInterval(() => {
    kropki.innerHTML = ".".repeat(liczbaKropek++ % 4);
}, 333)

function scrollToElement(query) {
    document.querySelector(query).scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToNextElement(element) {
    element.parentNode.nextElementSibling.scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToPreviousElement(element) {
    element.parentNode.previousElementSibling.scrollIntoView({
        behavior: 'smooth'
    });
}