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

function buildTree(arr) {}

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


