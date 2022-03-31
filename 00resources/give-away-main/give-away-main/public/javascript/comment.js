
async function commentFormHandler(event) {
  event.preventDefault();

  const context = document.querySelector('textarea[name="comment-body"]').value.trim();
  const item_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (context) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({
        item_id,
        context
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.comment-btn').addEventListener('click', commentFormHandler);
