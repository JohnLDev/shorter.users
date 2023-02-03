import { createServer } from 'http';
const PORT = process.env.PORT || 3000;

// create http server
console.log(process.env.STAGE);
console.log(process.env.NODE_ENV);
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});
server.listen(3000, () => console.log(`Server running on port ${PORT}`));
