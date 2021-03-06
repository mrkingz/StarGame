import path from 'path';
import express from 'express';

const app = express();

app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/dist') });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App listening on Port ${PORT}...`);
});
