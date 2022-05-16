const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

// to be changed build to public in development mode
const publicPath = path.join(__dirname, '..', 'build');
app.use(express.static(publicPath));

app.get('/*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
});
