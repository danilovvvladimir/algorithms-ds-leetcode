namespace NSBinaryTree {
  class BinaryTreeNode<T> {
    data: T;
    left: BinaryTreeNode<T> | null;
    right: BinaryTreeNode<T> | null;

    constructor(data: T) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  enum TraversalMethod {
    PREORDER = "preOrder",
    INORDER = "inOrder",
    POSTORDER = "postOrder",
  }

  class BinaryTree<T> {
    root: BinaryTreeNode<T> | null;
    constructor() {
      this.root = null;
    }

    add(value: T) {
      const newNode = new BinaryTreeNode(value);
      if (this.root === null) {
        this.root = newNode;
        return;
      }

      let currentNode = this.root;
      while (currentNode) {
        if (newNode.data < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        } else if (newNode.data > currentNode.data) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        } else {
          throw new Error("Nodes' values can not repeat themselves");
        }
      }
    }

    preOrderTraverse(
      node: BinaryTreeNode<T> | null,
      callback: (value: T) => void
    ) {
      if (!node) return;

      callback(node.data);
      this.preOrderTraverse(node.left, callback);
      this.preOrderTraverse(node.right, callback);
    }

    inOrderTraverse(
      node: BinaryTreeNode<T> | null,
      callback: (value: T) => void
    ) {
      if (!node) return;

      this.inOrderTraverse(node.left, callback);
      callback(node.data);
      this.inOrderTraverse(node.right, callback);
    }

    postOrderTraverse(
      node: BinaryTreeNode<T> | null,
      callback: (value: T) => void
    ) {
      if (!node) return;

      this.postOrderTraverse(node.left, callback);
      this.postOrderTraverse(node.right, callback);
      callback(node.data);
    }

    traverseDFS(
      callback: (value: T) => void,
      method: TraversalMethod = TraversalMethod.PREORDER
    ) {
      if (method === TraversalMethod.PREORDER) {
        return this.preOrderTraverse(this.root, callback);
      } else if (method === TraversalMethod.INORDER) {
        return this.inOrderTraverse(this.root, callback);
      } else {
        return this.postOrderTraverse(this.root, callback);
      }
    }

    traverseBFS(callback: (value: T) => void) {
      if (this.root === null) {
        return null;
      }

      const queue = [this.root];

      while (queue.length > 0) {
        const node = queue.shift()!;
        callback(node.data);

        if (node?.left) {
          queue.push(node.left);
        }

        if (node?.right) {
          queue.push(node.right);
        }
      }
    }
  }

  const tree = new BinaryTree<number>();
  tree.add(8);
  tree.add(5);
  tree.add(10);
  tree.add(2);
  tree.add(14);
  tree.add(3);

  console.log(tree);
  // tree.traverseDFS(
  //   (number: number) => console.log(number),
  //   TraversalMethod.INORDER
  // );

  tree.traverseBFS((number: number) => console.log(number));
}
