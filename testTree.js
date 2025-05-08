// You must paste or import your treeFactory and nodeFactory code above this line
const { treeFactory } = require('./balancedBST.js');

function testAllFunctions() {
  const values = [10, 5, 15, 3, 7, 12, 18];
  const tree = treeFactory(values);

  console.log("Initial Tree:");
  tree.prettyPrint();

  console.log("\nTesting find:");
  console.log("Find 7:", tree.find(7)?.data === 7);
  console.log("Find 100:", tree.find(100) === null);

  console.log("\nTesting insert:");
  tree.insert(6);
  console.log("Inserted 6:");
  tree.prettyPrint();

  console.log("\nTesting deleteNode:");
  tree.deleteNode(5);
  console.log("Deleted 5:");
  tree.prettyPrint();

  console.log("\nTesting levelOrder:");
  tree.levelOrder(node => console.log(node.data));

  console.log("\nTesting levelOrderRecursive:");
  tree.levelOrderRecursive(node => console.log(node.data));

  console.log("\nTesting preOrder:");
  tree.preOrder(node => console.log(node.data));

  console.log("\nTesting preOrderRecursive:");
  tree.preOrderRecursive(node => console.log(node.data));

  console.log("\nTesting inOrder:");
  tree.inOrder(node => console.log(node.data));

  console.log("\nTesting postOrder:");
  tree.postOrder(node => console.log(node.data));

  console.log("\nTesting getHeight:");
  console.log("Height:", tree.getHeight());

  console.log("\nTesting depth:");
  console.log("Depth of 12:", tree.depth(12));
  console.log("Depth of 100 (non-existent):", tree.depth(100));

  console.log("\nTesting isBalanced:");
  console.log("Balanced?", tree.isBalanced());

  console.log("\nAdding unbalancing values:");
  tree.insert(100);
  tree.insert(110);
  tree.insert(120);
  tree.prettyPrint();
  console.log("Balanced now?", tree.isBalanced());

  console.log("\nTesting rebalance:");
  tree.rebalance();
  tree.prettyPrint();
  console.log("Balanced after rebalance?", tree.isBalanced());
}

testAllFunctions();
