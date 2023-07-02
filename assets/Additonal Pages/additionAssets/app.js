const pdfLink = document.querySelector('.pdf-link');
pdfLink.addEventListener('click', (event) => {
  event.preventDefault();
  const pdfUrl = "https://drive.google.com/file/d/1lo9KfP_KRMI8htlpMVF2WXfxuMmxu06K/view?usp=sharing";
  const embedHtml = `<embed src="${pdfUrl}" type="application/pdf" width="100%" height="500px" />`;
  document.body.innerHTML = embedHtml;
});