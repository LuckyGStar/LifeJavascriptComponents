const process = (mat, k) => {
  const M = mat.length;
  const N = mat[0].length;

  // preprocess the input matrix such that `sum[i][j]` stores
  // sum of elements in the matrix from `(0, 0)` to `(i, j)`
  const sum = [...new Array(M)].map(elem => new Array(N));

  sum[0][0] = mat[0][0];

  // preprocess the first row
  for (let j = 1; j < N; j++) {
    sum[0][j] = mat[0][j] + sum[0][j - 1];
  }
 
  // preprocess the first column
  for (let i = 1; i < M; i++) {
    sum[i][0] = mat[i][0] + sum[i - 1][0];
  }
 
  // preprocess the rest of the matrix
  for (i = 1; i < M; i++) {
    for (j = 1; j < N; j++) {
      sum[i][j] = mat[i][j] + sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1];
    }
  }
 
  // print the sum matrix
  for (i = 0; i < M; i++) {
    for (j = 0; j < N; j++) {
      console.log(`${sum[i][j]} ${i} ${j}`);
    }
    console.log('\n');
  }

  let total, max = 0;
  let index = 0;
  let subMat = [];

  // find the maximum sum submatrix
  
  // start from cell `(k-1, k-1)` and consider each
  // submatrix of size `k × k`
  for (i = k - 1; i < M; i++) {
    for (j = k - 1; j < N; j++) {
      total = sum[i][j];
      if (i - k >= 0) {
        total = total - sum[i - k][j];
      }

      if (j - k >= 0) {
        total = total - sum[i][j - k];
      }
  
      if (i - k >= 0 && j - k >= 0) {
        total = total + sum[i - k][j - k];
      }

      if (total > max) {
        max = total;
      }

      subMat.push({
        total: total,
        x: i,
        y: j,
      });
    }
  }

  let numbers = [];
  let finalSum = 0;

  for (p = 0; p < subMat.length; p++) {
    if (subMat[p].total === max) {
      for (i = 0; i < k; i++) {
        for (j = 0; j < k; j++) {
          const number = mat[i + subMat[p].x - k + 1][j + subMat[p].y - k + 1];
          if (numbers.indexOf(number) === -1) {
            numbers.push(number);
            finalSum += number;
          }
        }
      }
    }
  }

  return finalSum;
};

exports.process = process;
