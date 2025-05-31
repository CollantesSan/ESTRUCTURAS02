export function countSubordinates(node) {
    if (!node || !node.children) return 0;

    let total = node.children.length;
    node.children.forEach(child => {
        total += countSubordinates(child);
    });
    return total;
}
