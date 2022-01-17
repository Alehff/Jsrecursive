
function fatorialRec(n){
    if(n==1) {
        return 1;
    }
    return n * fatorialRec(n-1);
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]];

function printMatrix(matrix){
    if(matrix.length == 0){
        return;
    }
    console.log(matrix[0]);
    printMatrix(matrix.slice(1));

}

printMatrix(matrix)
