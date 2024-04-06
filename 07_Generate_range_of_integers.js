
function generateRange(min, max, step) {
    const result = [];
    for (let i = min; i <= max; i += step) {
        result.push(i);
    }
    return result;
}

describe("generateRange(2, 10, 2)", function() {
    const expected = [2, 4, 6, 8, 10];
    const result = generateRange(2, 10, 2);
    console.log('Expected:', expected);
    console.log('Result:', result);
    console.log('Test Passed:', JSON.stringify(expected) === JSON.stringify(result));
});