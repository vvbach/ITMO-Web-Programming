(function() {
    window.addEventListener('load', function() {
        performance.mark('pageEnd');
        const pageEnd = performance.getEntriesByName('pageEnd')[0];
        const loadTime = (pageEnd.startTime / 1000).toFixed(4);
        const footerText = document.getElementsByClassName('footer__text')[0];
        footerText.textContent += ` Page load time is ${loadTime} seconds`;
    });
})();