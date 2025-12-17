const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' , time: new Date() });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Serve static files from the Angular app
//app.use(express.static(path.join(__dirname, '../dist/my-angular-app')));