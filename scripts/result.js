(function () {
    const Result = {
        init() {
            document.getElementById('result-score').innerText = localStorage.getItem('resScore') + '/' + localStorage.getItem('resTotal');
        }
    }
    Result.init();
})();