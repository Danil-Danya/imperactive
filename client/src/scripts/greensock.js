import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";

const headerTitle = '.header__title';
const headerButton = '.header__button';

const advantagesItems = '.advantages__item';

const aboutTrigger = '.about';
const aboutImage = '.about__left';
const aboutText = '.about__right';

const sevicesTrigger = '.services';
const servicesItem = '.services__item';

const poetryItem = '.poetry__item';
const poetryTrigger = '.poetry__container';

gsap.registerPlugin(ScrollTrigger);


export function headerAnimation () {
    gsap.fromTo(headerTitle, {
        x: -300,
        opacity: 0
    },{
        x: 0,
        opacity: 1,
        duration: 1
    },0.5);

    gsap.fromTo(headerButton, {
        y: 100,
        opacity: 0,
        duration: 0
    },{
        y: 0,
        opacity: 1,
        duration: 1
    },0.5);
}

export function advantagesAnimation () {
    if (window.innerWidth > 1000) {
        gsap.fromTo(advantagesItems, {
            x: -50,
            opacity: 0,
            lazy: false
        }, {
            scrollTrigger: {
                trigger: '.call__item',
                start: 'top 0%',
                end: "+=300px",
                scrub: 3,
            },
            lazy: false,
            opacity: 1,
            x: 0,
            stagger: 1,
            duration: 1,
            ease: 'none'
        })
    }
    else {
        gsap.fromTo(advantagesItems, {
            x: -100,
            opacity: 0,
            lazy: false
        }, {
            scrollTrigger: {
                trigger: '',
                start: 'top -30%',
                end: "+=700px",
                scrub: 3,
            },
            lazy: false,
            opacity: 1,
            x: 0,
            stagger: 1,
            duration: 1,
            ease: 'none'
        })
    }
}

export function aboutAnimationLeft () {
    if (window.innerWidth > 1000) {
        gsap.fromTo(aboutImage, {
            x: -300,
            opacity: 0,
            lazy: false
        }, {
            scrollTrigger: {
                trigger: aboutTrigger,
                start: 'top 80%',
                end: "+=300px",
                scrub: 3,
            },
            lazy: false,
            opacity: 1,
            x: 0,
            stagger: 1,
            duration: 1,
            ease: 'none'
        })
    }
}

export function aboutAnimationRight () {
    if (window.innerWidth > 1000) {
        gsap.fromTo(aboutText, {
            y: 300,
            opacity: 0,
            lazy: false
        }, {
            scrollTrigger: {
                trigger: aboutTrigger,
                start: 'top 80%',
                end: "+=300px",
                scrub: 3,
            },
            lazy: false,
            opacity: 1,
            y: 0,
            stagger: 1,
            duration: 1,
            ease: 'none'
        })
    }
}

export function servicesAnimation () {
    if (window.innerWidth < 1000) {
        gsap.fromTo(servicesItem, {
            x: -100,
            opacity: 0,
            lazy: false
        }, {
            scrollTrigger: {
                trigger: servicesItem,
                start: 'top 50%',
                end: "+=700px",
                scrub: 1,
            },
            lazy: false,
            opacity: 1,
            x: 0,
            stagger: 1,
            duration: 1,
            ease: 'none'
        })
    }
}

export function poetryAnimation () {
    const poetryItemElement = document.querySelectorAll(poetryItem);

    const classLeft = 'poetry__item-left-animation';
    const classRight = 'poetry__item-right-animation';
    const classLast = 'poetry__item-last-animation';

    for (let i = 0; i < poetryItemElement.length; i++) {
        if (i % 2 === 0) {
            poetryItemElement[i].classList.add(classRight);
        }
        else {
            poetryItemElement[i].classList.add(classLeft);
        }

        if (window.innerWidth > 1000) {
            if (i % 2 === 0 && i === poetryItemElement.length -1) {
                poetryItemElement[i].classList.remove(classRight);
                poetryItemElement[i].classList.add(classLast);
            }
        }
    }

    gsap.fromTo(`.${classRight}`, {
        x: -50,
        opacity: 0,
        lazy: false
    }, {
        scrollTrigger: {
            trigger: poetryTrigger,
            start: 'top 50%',
            end: "+=700px",
            scrub: 1,
        },
        lazy: false,
        opacity: 1,
        x: 0,
        stagger: 1,
        duration: 1,
        ease: 'none'
    })
    gsap.fromTo(`.${classLeft}`, {
        x: 50,
        opacity: 0,
        lazy: false
    }, {
        scrollTrigger: {
            trigger: poetryTrigger,
            start: 'top 50%',
            end: "+=700px",
            scrub: 1,
        },
        lazy: false,
        opacity: 1,
        x: 0,
        stagger: 1,
        duration: 1,
        ease: 'none'
    })

    if (window.innerWidth > 1000) {
        gsap.fromTo(`.${classLast}`, {
            y: 100,
            opacity: 0,
            lazy: false
        }, {
            scrollTrigger: {
                trigger: poetryTrigger,
                start: 'top 50%',
                end: "+=700px",
                scrub: 1,
            },
            lazy: false,
            opacity: 1,
            y: 0,
            stagger: 1,
            duration: 1,
            ease: 'none'
        })
    }
}