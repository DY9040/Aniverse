async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text
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

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);

const mainEl = document.querySelector('main');
const postEl = document.querySelector('.post .title');

if (screen.orientation.angle === 00 && screen.width >= 1024) {
  mainEl.classList.add('column-view');
}

screen.orientation.addEventListener('change', (e) => {
  mainEl.classList.toggle('column-view');
});

if (window.location.pathname.includes('/post/')) {
  postEl.classList.add('comment-page');
} else {
  postEl.classList.remove('comment-page');
}