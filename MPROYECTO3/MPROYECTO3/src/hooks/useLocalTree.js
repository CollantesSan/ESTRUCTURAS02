export function loadTreeFromStorage() {
    const stored = localStorage.getItem("treeData");
    return stored ? JSON.parse(stored) : null;
}

export function saveTreeToStorage(tree) {
    localStorage.setItem("treeData", JSON.stringify(tree));
}
