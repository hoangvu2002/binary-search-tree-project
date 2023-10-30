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
  if (checkValue(root, data)) {
    return;
  }

  if (root === null) {
    root = Node(data);
  }

  if (data < root.data) {
    root.left = insert(root.left, data);
  } else if (data > root.data) {
    root.right = insert(root.right, data);
  }

  return root;
}

function deleteVal(root, val) {

  //base case
  if (root===null) {
    return root;
  }

  // Recursive calls for ancestors of the node to be deleted
  if (val < root.data) {
    root.left = deleteVal(root.left, val);
    return root;
  } else if (val > root.data) {
    root.right = deleteVal(root.right, val);
    return root;
  }

  // We reach here when root is the node to be deleted.

  // If one of the children is empty

  if (root.left === null) {
    return root.right;
  } else if (root.right === null) {
    return root.left;
  }

  // If both children exist
  let succParent = root;

  // Find successor
  let succ = root.right;
  while (succ.left !== null) {
    succParent = succ;
    succ = succ.left;
  }

  if (succParent !== root) {
    succParent.left = succ.right;
  } else {
    succParent.right = succ.right;
  }

    // Copy Successor Data to root
    root.data = succ.data;

    // Delete the Successor node and return root
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
  }
  if (checkValue(root.right, val)) {
    return true;
  }

  return false;
}

function find(root, val) {
  if (checkValue(root, val)) {
    return Node(val);
  };
  return null;
}

function levelOrder(root, callback=null) {
  if (root===null) return;
  const queue = [];
  queue.push(root);
  returnArray = [];

  
  while (queue.length > 0) {
    const current = queue.shift();
    if (callback) {
      callback(current);
    }
    returnArray.push(current.data);

    if (current.left!==null) {
      queue.push(current.left);
    }

    if (current.right!==null) {
      queue.push(current.right);
    }
  }

  if (!callback) {
    return returnArray;
  }
}

console.log(Tree([2, 1, 5, 3]));
console.log(Tree([2, 1, 1, 5, 3]));
console.log(Tree([2, 1, 5, 7, 6, 4, 3]));
prettyPrint(Tree([2, 1, 5, 7, 6, 4, 3]));
prettyPrint(Tree([2, 1, 1, 5, 3]));
const tree = Tree([2, 1, 5, 3, 7]);
prettyPrint(tree);
insert(tree, 8);
prettyPrint(tree);
console.log(checkValue(tree, 8));
console.log(checkValue(tree, 9));
insert(tree, 2);
prettyPrint(tree);
insert(tree, 9);
prettyPrint(tree);
deleteVal(tree, 8);
prettyPrint(tree);
deleteVal(tree, 3)
prettyPrint(tree);
console.log(find(tree, 5));
levelOrder(tree, (current) => {console.log(current.data)});
prettyPrint(tree);
console.log(levelOrder(tree));