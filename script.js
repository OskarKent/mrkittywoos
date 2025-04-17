const loading = document.getElementById('loading');

window.addEventListener('load', () => {
	loading.style.display = 'none';
})

emailjs.init({
	publicKey: 'qy4Hy6xZFsxY7Xirg'
})

const contactform = document.getElementById('contactform');

contactform.addEventListener('submit', (event) => {
	event.preventDefault();
	emailjs.sendForm('mrkittywoos', 'template_vrrfyph', contactform).then(() => {
		alert('Message Sent!');
		contactform.reset();
	}).catch((error) => {
		console.log('error!', error)
		alert('error sending email!')
	})
})


const follow = document.getElementById('follow');
if (window.innerWidth > 1000) {	

	let halfOfFollow = follow.clientWidth/2;

	window.addEventListener('mousemove', async (event) => {
		await follow.animate({
			left: event.clientX - halfOfFollow + 'px',
			top: event.clientY - halfOfFollow + 'px'
		}, 1500)
		follow.style.left = event.clientX - halfOfFollow + 'px';
		follow.style.top = event.clientY - halfOfFollow + 'px';
		halfOfFollow = follow.clientWidth/2
	})
} else {
	follow.style.display = 'none';
}

