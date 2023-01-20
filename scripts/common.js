function checkUserData() {
    const name = localStorage.getItem('name');
    const lastname = localStorage.getItem('lastName');
    const email = localStorage.getItem('email');

    if (!name || !lastname || !email) {
        location.href = 'index.html';
    }
}