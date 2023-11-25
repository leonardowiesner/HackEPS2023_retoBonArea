import express from 'express';
import open from 'open';

const server = express();

// Serve HTML content
server.get("/", (req, res) => {
  res.send("<b>Hello !</b>");
});

// Start the server
const port = 8080;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  
  // Launch the default browser and navigate to the server URL
  open(`http://localhost:${port}`);
});
