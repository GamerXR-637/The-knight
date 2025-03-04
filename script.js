document.addEventListener('DOMContentLoaded', () => {
    const loadingBar = document.getElementById('loading-bar');
    let width = 0;

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            loadingBar.style.display = 'none';
        } else {
            width += 10;
            loadingBar.style.width = width + '%';
        }
    }, 400);

    // Add event listener to "Link 1"
    const link1 = document.getElementById('link1');
    link1.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.style.backgroundColor = 'pink';
    });

    // Add event listener to "Link 2"
    const link2 = document.getElementById('link2');
    link2.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.style.backgroundColor = 'purple';
    });

    // Add event listener to "Link 3"
    const link3 = document.getElementById('link3');
    link3.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.style.backgroundColor = 'blue';
    });
});
