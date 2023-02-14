const infoElements = Array.from(document.querySelectorAll('.info__item'))
const SUBTITLE_DELAY = 0.4
const TITLE_DELAY = 1
const MY_RANDOM_NUMBER_FOR_DELAY = 1.5

const tl = gsap.timeline()
gsap.registerPlugin(ScrollTrigger)

infoElements.forEach((item, id) => {
    const RANDOMNUMBERFORAXIS = Math.ceil(Math.random() * 2)
    if (RANDOMNUMBERFORAXIS !== 1) {
        return tl.fromTo(
            item,
            {
                x: Math.floor(Math.random() * 201) - 100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
            },
            id / MY_RANDOM_NUMBER_FOR_DELAY
        )
    }
    tl.fromTo(
        item,
        {
            y: Math.floor(Math.random() * 201) - 100,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
        },
        id / MY_RANDOM_NUMBER_FOR_DELAY
    )
})

tl.fromTo(
    '.title',
    {
        x: -100,
        opacity: 0,
    },
    {
        x: 0,
        opacity: 1,
        duration: 1.5,
    },
    TITLE_DELAY
)
    .fromTo(
        '.subtitle',
        {
            y: 50,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
        },
        SUBTITLE_DELAY
    )

    .fromTo(
        '.menu_list li',
        {
            y: -50,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
        },
        3
    )

    .fromTo(
        '.logo',
        {
            y: -50,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.85,
        },
        2.85
    )

gsap.to('.header__item', {
    scrollTrigger: {
        start: 'top top',
        scrub: 1,
    },
    xPercent: -60,
    opacity: 0,
    duration: 1.5,
})

gsap.from('.about', {
    scrollTrigger: {
        start: 'top top',
    },
    xPercent: -30,
    opacity: 0,
    duration: 0.5,
})
gsap.from('.work', {
    scrollTrigger: {
        start: 'top top',
    },
    xPercent: -30,
    opacity: 0,
    duration: 0.5,
})

gsap.from('.about__num', {
    scrollTrigger: {
        trigger: '.header',
        start: '20%',
    },
    yPercent: -60,
    opacity: 0,
    scale: 0,
    duration: 0.8,
})
gsap.from('.about__text', {
    scrollTrigger: {
        trigger: '.header',
        start: '20%',
    },
    xPercent: -80,
    opacity: 0,
    duration: 1.2,
})
