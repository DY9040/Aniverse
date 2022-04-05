async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const persona = document.querySelector('#persona-signup').value;

    console.log(persona)
   
    if(persona==="Allmight"){
      filename="allmight.png"
    }
    else if(persona==="One Punch"){
      filename="one_punch.png"
    }
    else if(persona==="Sailor Moon"){
      filename="sailor_moon.png"
    }
    else if(persona==="Goku"){
      filename="goku.png"
    }else if(persona==="Deku"){
      filename="deku.png"
    }else{
      filename="shoto.png"
    }
    console.log(filename)
  
    if (username && email && password&&persona&&filename) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password,
          persona,
          filename
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        console.log('success');
      } else {
        alert(response.statusText);
      }
    }
  }


  async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  