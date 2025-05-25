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
var maxDepth = function(root) {
    return getDepth(root, 0);
};

const getDepth = (node, sum) => {
    if(!node) {
        return sum;
    } else {
        return Math.max(getDepth(node.right, sum+1), getDepth(node.left, sum+1));
    }
}