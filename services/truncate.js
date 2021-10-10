const truncate = (str) => {
    const n = str.length;

    if (n <= 9) {
        return str;
    }
    else if (str.charAt(8) == '.') {
        return str.substring(0, 8);
    }
    else {
        return str.substring(0, 9);
    }
}

export { truncate }