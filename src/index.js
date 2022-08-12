
// You should implement your task here.

module.exports = 
function towelSort (matrix) {
  let result = [];
  if ( matrix == null ) return [];

  matrix.map((element, index) => {
    if(index % 2 != 0) {
      element.reverse();
    }
  });

  return matrix.flat();
  
}

// towelSort([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]);
