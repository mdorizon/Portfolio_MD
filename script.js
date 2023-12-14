




const mailCopy = document.querySelectorAll('.mail-copy');
mailCopy.forEach((copy) => {
  copy.addEventListener('click', () => {
    const emailAddress = copy.textContent.trim();
    navigator.clipboard.writeText(emailAddress)

  })
})