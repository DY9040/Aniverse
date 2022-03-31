

async function editprofilePic() {
    const profile_pic = document.querySelector('#modal-url').value.trim();
    const user_id = document.querySelector('.value').innerHTML.replace('th Member', '');
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ]
console.log(user_id)


console.log(id)
    if (profile_pic
        ) {
      const response = await fetch(`/api/users/${user_id}`, {
        method: 'PUT',
        body: JSON.stringify({
          profile_pic
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }


  
async function editprofileDesc() {
      const profile_desc = document.querySelector('#profile-textarea').value.trim();
      const user_id = document.querySelector('.value').innerHTML.replace('th Member', '');

  
      if (profile_desc) {
        const response = await fetch(`/api/users/${user_id}`, {
          method: 'PUT',
          body: JSON.stringify({
            profile_desc
          }),
          headers: { 'Content-Type': 'application/json' }
        });
    
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
    }

    document.querySelector('#desc_btn').addEventListener('click', editprofileDesc) 
  document.querySelector('#pic_btn').addEventListener('click', editprofilePic) 