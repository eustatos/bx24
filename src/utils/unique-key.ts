function uniqueKey(): string {
    let key = '';
    for (let counter = 0; counter < 4; counter++) {
      key += Math.random()
        .toString(32)
        .slice(2, 8);
    }
    return key;
}

export default uniqueKey;