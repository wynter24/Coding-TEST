/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0;
    let queue = [{node: root, depth: 1}];

    while(queue.length) {
        const n = queue.shift();
        if(!n.node.left && !n.node.right) return n.depth;
        if(n.node.left) queue.push({node: n.node.left, depth: n.depth+1});
        if(n.node.right) queue.push({node: n.node.right, depth: n.depth+1});
    }
};