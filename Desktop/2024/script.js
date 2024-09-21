document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.text();
    if (response.ok) {
        alert('เข้าสู่ระบบสำเร็จ!');
        // เปลี่ยนไปยังหน้าอื่น ๆ ที่ต้องการ
    } else {
        document.getElementById('error-message').innerText = result;
    }
});
