function nodeFactory(data) {
    return {
        data: data,
        left: null,
        right: null
    }
}

function treeFactory(array) {
    return {
        root: buildTree(array)
    }
}

function buildTree(array) {
    let sortedArray = array.sort((a, b) => a -b)
    let middleOfArray = Math.floor(sortedArray.length / 2)
    let root = nodeFactory(sortedArray[middleOfArray])
    root.left = buildTree(sortedArray.slice(0, middleOfArray - 1))
    root.left = buildTree(sortedArray.slice(middleOfArray +1))


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
 