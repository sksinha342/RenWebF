// login.html mein form ka id 'loginForm' rakhein
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Isse URL badalna band ho jayega

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value; // Agar password field hai to

    try {
        const response = await fetch('https://your-backend-render-url.onrender.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert("Login Successful!");
            window.location.href = "dash.html"; // Dashboard par bhejein
        } else {
            alert("Login Failed: " + data.message);
        }
    } catch (error) {
        console.error("API Error:", error);
        alert("Server se connection nahi ho paa raha!");
    }
});
