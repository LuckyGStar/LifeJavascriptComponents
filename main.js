// Load HTTP module
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

// Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

const matrix = [
  [1, 0, 1, 5, 6],
  [3, 3, 0, 3, 3], 
  [2, 9, 2, 1, 2],
  [0, 2, 4, 2, 0]
];

// Load Custom Components
const randomIdGenerator = require('./components/random-id-generator/random-id-generator');
const matrixChallenge = require('./components/matrix-challenge/matrix-challenge');
const subMatrixMaxSum = require('./components/sub-matrix-max-sum/sub-matrix-max-sum');

// console.log(`New generated id: ${randomIdGenerator.generate(12)}`);
console.log(`Matrix Challenge Result:`);
console.log(subMatrixMaxSum.process(matrix, 2));

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
