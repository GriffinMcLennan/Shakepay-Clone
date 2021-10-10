const formatNumber = (number) => {
    if (typeof (number) !== 'String') {
        number = number.toString();
    }

    const n = number.length;

    const parts = number.split(".");
    let formatted = [];
    let cnt = 0;

    for (let i = parts[0].length - 1; i >= 0; i--) {
        if (cnt == 3) {
            formatted.unshift(",");
            cnt = 0;
        }

        formatted.unshift(parts[0].charAt(i));
        cnt++;
    }

    if (parts.length == 2) {
        formatted.push(".");

        for (let i = 0; i < parts[1].length; i++) {
            formatted.push(parts[1].charAt(i))
        }
    }

    return formatted;
}

export { formatNumber };