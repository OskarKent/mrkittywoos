const message = document.getElementById('message');
const name = document.getElementById('name');
const submit = document.getElementById('submit');

emailjs.init({
  publicKey: 'qy4Hy6xZFsxY7Xirg'
});

const send = (event) => {
  if (message.value && name.value) {    
    event.preventDefault();
    emailjs.send("mrkittywoos","template_vrrfyph",{
      message: message.value,
      name: name.value
    }).then(() => {
      alert('Email Sent! Click OK To Go Back To The Home Page.')
      window.location.replace('index.html');
    }).catch((error) => {
      alert('Error! Email Not Sent.')
      console.log("There Was An Error! ", error.text)
    });
  } else {
    alert('Please enter your name and your message!')
  }
}

submit.addEventListener('click', send)