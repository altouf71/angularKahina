const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const app = express();

app.use(cookieParser());

app.use(express.json());

app.use(cors(
    {origin: 'http://localhost:4200', credentials: true}    
));

const PORT = process.env.PORT || 3000;


app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;

    // In a real application, you would verify username and password from the database
    if (username !== 'admin' && password !== '1234') {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({userId:1, username }, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '1h' });

    res.cookie('access_token', token, { httpOnly: true, sameSite: 'lax', secure: false, maxAge: 3600000 }); // Set secure: true in production with HTTPS

    res.json({success: true });
});


app.post('/api/auth/logout', (req, res) => {
    res.clearCookie('access_token');
    res.json({ success: true });
});

const authMiddleware = require('./auth.middleware');

app.get('/api/secure/profile', authMiddleware, (req, res) => {
    res.json({id: req.user.userId, username: req.user.username});
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK' , time: new Date() });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// Serve static files from the Angular app
//app.use(express.static(path.join(__dirname, '../dist/my-angular-app')));