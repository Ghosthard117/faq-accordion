const questions = document.querySelectorAll('.faq-question')

questions.forEach(question => {
  question.addEventListener('click', () => {
    question.classList.toggle('active')

    const content = question.nextElementSibling

    if (question.classList.contains('active')) {
      content.style.height = `${content.scrollHeight}px`
    } else {
      content.style.height = '0'
    }
  })
})
