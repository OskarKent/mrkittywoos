const message = document.getElementById('message');
const name = document.getElementById('name');
const submit = document.getElementById('submit');
let sent = false

emailjs.init({
  publicKey: 'qy4Hy6xZFsxY7Xirg'
});

const send = (event) => {
  if (message.value && name.value && sent === false) {    
    event.preventDefault();
    emailjs.send("mrkittywoos","template_vrrfyph",{
      message: message.value,
      name: name.value
    }).then(() => {
      alert('Email Sent!')
      name.value = "";
      submit.textContent = "Email Sent!"
      message.value = "";
      sent = true;
    }).catch((error) => {
      alert('Error! Email Not Sent.')
      console.log("There Was An Error! ", error.text)
    });
  } else {
    if (sent === false) {
      alert('Please enter your name and your message!')
    } else {
    	alert("email already sent!")
    }
  }
}

submit.addEventListener('click', send)