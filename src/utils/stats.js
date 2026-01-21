export function average(values) {
    if (!values.length) return 0;
    return values.reduce((a, b) => a + b, 0) / values.length;
}

export function stdDeviation(values) {
    if (!values.length) return 0;
    const avg = average(values);
    const variance =
        values.reduce((sum, v) => sum + (v - avg) ** 2, 0) / values.length;
    return Math.sqrt(variance);
}
