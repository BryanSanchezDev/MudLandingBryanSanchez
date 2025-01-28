window.downloadCVFile = () => {
    const url = '/files/BryanSanchezCV.pdf'; // Adjusted path to be relative to the root
    const anchorElement = document.createElement('a');
    anchorElement.href = url;
    anchorElement.download = 'BryanSanchezCV.pdf';
    anchorElement.click();
    anchorElement.remove();
}