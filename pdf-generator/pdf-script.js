document.querySelector('#download-pdf').addEventListener('click', function () {
  const downloadButton = document.querySelector('#download-pdf');
  const originalButtonText = downloadButton.textContent;
  downloadButton.textContent = 'Generating...';

  const contentToCapture = document.querySelector('.content');

  html2canvas(contentToCapture).then((canvas) => {
    const base64image = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'px', [canvas.width, canvas.height]);
    pdf.addImage(base64image, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save('attributes-results.pdf');

    downloadButton.textContent = originalButtonText;
  }).catch((error) => {
    console.error('An error occurred:', error);
    downloadButton.textContent = originalButtonText;
  });
});
