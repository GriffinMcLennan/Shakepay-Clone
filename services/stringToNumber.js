const stringToNumber = (s) => {
    if (typeof (s) == "number") {
        s = s.toString();
    }
    return Number(s.replaceAll(',', ''));
}

export { stringToNumber }