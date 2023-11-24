const express = require('express');
const app = express();

// ... other middleware and routes

// Serve index.html for any unmatched routes
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
