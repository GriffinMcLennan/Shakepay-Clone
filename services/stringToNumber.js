const stringToNumber = (s) => {
    return Number(s.replaceAll(',', ''));
}

export { stringToNumber }