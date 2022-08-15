const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header');
const tabTitles = document.querySelectorAll('.tab-title');
const tabItems = document.querySelectorAll('.tab-item');
const faqs = document.querySelectorAll('.question');
const form = document.querySelector('form')
const emailInput = document.querySelector('.email')
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

hamburger.addEventListener('click', () => {
    const images = hamburger.querySelectorAll('img')
    for (const element of images) {
        element.classList.toggle('closed')
    }
    header.classList.toggle('menu-opened')
})

for (const tabTitle of tabTitles) {
    tabTitle.addEventListener('click', (event) => {
        const index = parseInt(event.target.dataset.index)
        const currentTab = tabItems[index]
        for (const element of tabTitles) {
            element.classList.remove('active')
        }
        for (const element of tabItems) {
            element.classList.remove('active')
        }
        tabTitle.classList.add('active')
        currentTab.classList.add('active')
    })
}

for (const faq of faqs) {
    const text = faq.querySelector('.faq-flex')
    text.addEventListener('click', () => {
        if (!faq.classList.contains('question-opened')) {
            faqs.forEach(faqElement => faqElement.classList.remove('question-opened'))
        }
        faq.classList.toggle('question-opened')
    })
}

emailInput.addEventListener('input', () => {
    form.classList.remove('error')
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const email = emailInput.value
    if (EMAIL_REGEX.test(email)) {
        alert('thank you for reaching out')
        form.classList.remove('error')
        emailInput.value = ''
    }
    else {
        form.classList.add('error')
    }
})
