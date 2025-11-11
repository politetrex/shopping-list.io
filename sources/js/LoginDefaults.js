// Check if the "UserLogged" cookie exists
function checkUserLogged() {
    const cookies = document.cookie.split(';');
    const userLogged = cookies.find(cookie => cookie.trim().startsWith('UserLogged='));

    if (userLogged) {
        // Redirect to index.html if the cookie exists
        window.location.href = 'index.html';
    } else {
        // Redirect to login.html if the cookie does not exist
        window.location.href = 'login.html';
    }
}

// Execute the function on page load
checkUserLogged();