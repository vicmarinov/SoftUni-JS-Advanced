function isSymmetric (arr) {
    if (!Array.isArray(arr)) {
        return false; // Non-arrays are non-symmetric
    }

    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let g = JSON.stringify(arr), d = JSON.stringify(reversed);
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

export { isSymmetric };