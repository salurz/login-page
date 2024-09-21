const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let users = []; // ตัวอย่างฐานข้อมูลผู้ใช้

// เพิ่มผู้ใช้ตัวอย่าง
(async () => {
    const hashedPassword = await bcrypt.hash('password123', 10);
    users.push({ username: 'user1', password: hashedPassword });
})();

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);

    if (user && await bcrypt.compare(password, user.password)) {
        res.status(200).send('เข้าสู่ระบบสำเร็จ');
    } else {
        res.status(401).send('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
