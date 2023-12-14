




const textCopy = document.querySelectorAll('.text-copy');
textCopy.forEach((copy) => {
  copy.addEventListener('click', () => {
    const emailAddress = copy.textContent.trim();
    navigator.clipboard.writeText(emailAddress)
  })
})