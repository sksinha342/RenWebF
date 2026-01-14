const API_BASE_URL = "https://sksinha342.onrender.com"; // Apna Render URL yahan dalein

async function loginUser(email, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("API Error:", error);
    }
}
