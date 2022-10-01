const newFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_text = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_text,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);