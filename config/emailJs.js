import emailjs from 'emailjs-com';

// to send user data when applying
 function sendUserData({emailtest}){
    e.preventDefault();

    emailjs.sendForm('service_m2azucq', 'template_6qnh9fc', emailtest, 'user_sRP5iBhZmFEbxe9NtZU2b')
      .then((result) => {
        alert("Application was submitted successfully");
      }, (error) => {
        alert("Application was not submitted successfully");
      });
  };

// contact us page
 function sendFeedback({formref}) {
    e.preventDefault();

    emailjs.sendForm('service_m2azucq', 'template_gp268sw', formref, 'user_sRP5iBhZmFEbxe9NtZU2b')
      .then((result) => {
        alert("Message was sent successfully");
      }, (error) => {
        alert("Message was not sent successfully");
      });
  }
export {sendUserData, sendFeedback};