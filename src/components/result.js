export class Result {
    constructor() {
        document.getElementById('result-score').innerText = localStorage.getItem('resScore') + '/' + localStorage.getItem('resTotal');
    }
}