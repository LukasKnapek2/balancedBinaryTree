function nodeFactory(data) {
  return {
    data: data,
    left: null,
    right: null,
  };
}

function treeFactory(array) {
  let root = buildTree(array);

  function buildTree(array) {
    if (array.length === 0) return null; // base case

    let sortedArray = [...new Set(array)].sort((a, b) => a - b); // sort + remove duplicates
    let middleIndex = Math.floor(sortedArray.length / 2);
    let root = nodeFactory(sortedArray[middleIndex]);

    root.left = buildTree(sortedArray.slice(0, middleIndex));
    root.right = buildTree(sortedArray.slice(middleIndex + 1));

    return root;
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

  function insert(node, value) {
    if (node === null) {
      return nodeFactory(value);
    }
    if (node.data > value) {
      node.left = insert(node.left, value);
    } else if (node.data < value) {
      node.right = insert(node.right, value);
    }
    return node;
  }

  function deleteNode(node, value) {
    if (node === null) {
      return null;
    }
    if (node.data > value) {
      node.left = deleteNode(node.left, value);
    } else if (node.data < value) {
      node.right = deleteNode(node.right, value);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }
      let successor = getSuccessor(node);
      node.data = successor.data;
      node.right = deleteNode(node.right, successor.data);
    }

    return node;
  }

  function getSuccessor(node) {
    node = node.right;
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  function find(node, value) {
    if(node === null) return null
    if(node.data === value) {
      return node
    }
    if(node.data > value) {
      return find(node.left, value)
    }
    if(node.data < value) {
      return find(node.right, value)
    }
  }

  function levelOrder(node, callback) {
    if (typeof callback !== "function") {
      throw new Error("A valid callback function must be provided");
    }
  
    const queue = [];
    queue.push(node)
    while(queue.length !== 0) {
      let currentNode = queue.shift()
      callback(currentNode)
      if(currentNode.left !== null) {
        queue.push(currentNode.left)
      }
      if(currentNode.right !== null) {
        queue.push(currentNode.right)
      }

    }
  }

  function levelOrderRecursive(node, callback) {
    if (typeof callback !== "function") {
      throw new Error("A valid callback function must be provided");
    }
    const height = getHeight(node)
    for(let level = 1; level <= height; level++) {
      processLevel(node, level, callback)
    }
    function processLevel(node, level, callback) {
      if(node === null) {return}

      if(level === 1) {
        callback(node)
      }
      else {
        processLevel(node.left, level - 1, callback)
        processLevel(node.right, level - 1, callback)
      }
    }

  }

  function getHeight(node) {
    if(node === null) {
      return 0
    }
    let leftHeight = getHeight(node.left)
    let rightHeight = getHeight(node.right)
    return 1 + Math.max(leftHeight, rightHeight)
  }

  function preOrderTraversal(node, callback) {
    if (typeof callback !== "function") {
      throw new Error("A valid callback function must be provided");
    }
  
    const queueLeft = [];
    const queueRight = [];
    queueLeft.push(node)
    while(queueLeft.length !== 0 || queueRight.length !== 0) {
      let currentNode
      if(queueLeft.length > 0) {
        currentNode = queueLeft.shift()
      }
      else{
        currentNode = queueRight.shift()
      }
      callback(currentNode)
      if(currentNode.left !== null) {
        queueLeft.push(currentNode.left)
      }
      if(currentNode.right !== null || currentNode !== node) {
        queueRight.push(currentNode.right)
      }

    }
  }

}
