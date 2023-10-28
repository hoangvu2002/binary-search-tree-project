function Node(data) {
  return {
    data: data,
    left: null,
    right: null,
  };
}

function Tree(arr) {
  const mainArr = mergeSort(removeDuplicate(arr));
  const end = mainArr.length;
  const root = buildTree(mainArr, 0, end - 1);
  return root;
}

function buildTree(arr, start, end) {
  if (start > end) {
    return null;
  }
  const mid = Math.floor((start + end) / 2);
  const root = Node(arr[mid]);
  root.left = buildTree(arr, start, mid - 1);
  root.right = buildTree(arr, mid + 1, end);
  return root;
}

function removeDuplicate(arr) {
  const uniqueArr = [...new Set(arr)];
  return uniqueArr;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const leftHalf = array.slice(0, Math.floor(array.length / 2));
    const rightHalf = array.slice(Math.floor(array.length / 2));
    const firstHalf = mergeSort(leftHalf);
    const secondHalf = mergeSort(rightHalf);
    const sortedArray = [];
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < firstHalf.length && j < secondHalf.length) {
      if (firstHalf[i] < secondHalf[j]) {
        sortedArray[k] = firstHalf[i++];
        k++;
      } else {
        sortedArray[k] = secondHalf[j++];
        k++;
      }
    }
    for (; i < firstHalf.length; i++) {
      sortedArray[k] = firstHalf[i];
      k++;
    }
    for (; j < secondHalf.length; j++) {
      sortedArray[k] = secondHalf[j];
      k++;
    }
    //return [...mergeSort(firstHalf),...mergeSort(secondHalf)];
    return sortedArray;
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

function insert(root, data) {
  if (root===null) {
    root = Node(data);
  } 

  if (data < root.data) {
    root.left = insert(root.left, data);
  } else if (data > root.data) {
    root.right = insert(root.right, data);
  }

  return root;
}

function checkValue(root, val) {
  if (root === null) {
    return false;
  }

  if (root.data === val) {
    return true;
  }
  if (checkValue(root.left, val)) {
    return true;
  };
  if (checkValue(root.right, val)) {
    return true;
  };

  return false;
}



console.log(Tree([2, 1, 5, 3]));
console.log(Tree([2, 1, 1, 5, 3]));
console.log(Tree([2,1,5, 7, 6, 4,3]));
prettyPrint(Tree([2,1,5, 7, 6, 4,3]));
prettyPrint(Tree([2, 1, 1, 5, 3]));
const tree = Tree([2, 1, 5, 3, 7]);
prettyPrint(tree);
insert(tree, 8);
prettyPrint(tree);
console.log(checkValue(tree, 8));
console.log(checkValue(tree, 9));