const pdfLink = document.querySelector('.links-attached');
pdfLink.addEventListener('click', (event) => {
  event.preventDefault();
  const pdfUrl = pdfLink.getAttribute('href');
  const embedHtml = `<embed src="${pdfUrl}" type="application/pdf" width="100%" height="500px" />`;
  document.body.innerHTML = embedHtml;
});