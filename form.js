const commentForm = document.getElementById('comment-form')

commentForm.onsubmit = function() {
  event.preventDefault()

  const comment = document.getElementById('comment').value

  alert(comment)
}
