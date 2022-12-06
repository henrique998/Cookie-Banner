import './styles/global.scss'
import './styles/main.scss'

const bannerContainer = document.querySelector('.banner-container')
const closeBannerButton = document.querySelector<HTMLButtonElement>('[data-button="close-button"]')
const acceptButton = document.querySelector<HTMLButtonElement>('[data-button="accept-button"]')
const declineButton = document.querySelector<HTMLButtonElement>('[data-button="decline-button"]')

function bootStrap() {
    const cookieExists = document.cookie.includes('@cookie-banner')

    if (!cookieExists) {
        bannerContainer?.classList.add('show')
    }
}

function closeBanner() {
    bannerContainer?.classList.remove('show')
}

function setCookie() {
    document.cookie = '@cookie-banner = accept-conditions; max-age =' + 60 * 60 * 24 * 30

    closeBanner()
}

window.addEventListener('load', bootStrap)
closeBannerButton?.addEventListener('click', closeBanner)
declineButton?.addEventListener('click', closeBanner)
acceptButton?.addEventListener('click', setCookie)