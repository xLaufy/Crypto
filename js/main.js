import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/GyQVYEawmp5x8q2R/scene.splinecode');

spline.load('https://prod.spline.design/GyQVYEawmp5x8q2R/scene.splinecode', {
	credentials: 'include',
	mode: 'no-cors',
});

const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active')
}



navBtn.addEventListener('click', handleNav)



const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();