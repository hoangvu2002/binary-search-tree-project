function Node(data) {
  return {
    data: data,
    left: null,
    right: null,
  };
}

function Tree(arr) {
    const root = buildTree(arr);
}

function buildTree(arr) {

}

function removeDuplicate(arr) {
    const uniqueArr = [...new Set(arr)];
    return uniqueArr;
}

console.log(removeDuplicate([1,1,2,3]));