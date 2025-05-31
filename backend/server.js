// Update this line in server.js
app.use(express.static(path.join(__dirname, 'public'))); // For files in backend/public
// OR if frontend is in a different location:
app.use(express.static(path.join(__dirname, '../frontend')));
