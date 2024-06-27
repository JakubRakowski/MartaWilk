const burgerBtn = document.querySelector('.burger-btn')
const burgerIcon = document.querySelector('.burger-icon')
const navMobileList = document.querySelector('.nav-mobile-list')
const navMobileListItems = document.querySelectorAll('.nav-mobile-list-item')
const navDesktop = document.querySelector('.nav-desktop')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	navMobileList.classList.toggle('active')
	let delayTime = 0
	navMobileListItems.forEach(item => {
		item.classList.toggle('nav-item-animation')
		item.computedStyleMap.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
	navMobileListItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobileList.classList.remove('active')
		})
	})
}
function addShadow() {
	if (window.scrollY >= 100) {
		navDesktop.classList.add('shadow-bg')
	} else {
		navDesktop.classList.remove('shadow-bg')
	}
}
const hanndleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
hanndleCurrentYear()
window.addEventListener('scroll', addShadow)
burgerBtn.addEventListener('click', handleNav)