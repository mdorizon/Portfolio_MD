




const mailCopy = document.querySelectorAll('.mail-copy');
mailCopy.forEach((copy) => {
  copy.addEventListener('click', () => {
    if (copy.classList.contains('mdorizon17@gmail.com')) {
      navigator.clipboard.writeText(copyText);
    }
  })
})