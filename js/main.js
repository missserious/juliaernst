// fade in effect for header
window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
    document.getElementById('my-name').classList.add('fade-in');
    document.getElementById('my-job').classList.add('fade-in');
  

    const header = document.querySelector('header');
    header.className += 'fade-in-header';

});
