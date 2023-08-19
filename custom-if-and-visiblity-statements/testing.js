// Define a function to be tested
function add(a, b) {
    return a + b;
}

// Test cases
function testAdd() {
    console.log("Running testAdd...");

    // Test case 1
    const result1 = add(2, 3);
    console.log("Test case 1:", result1 === 5);

    // Test case 2
    const result2 = add(-1, 5);
    console.log("Test case 2:", result2 === 4);

    // Test case 3
    const result3 = add(0, 0);
    console.log("Test case 3:", result3 === 0);

    console.log("testAdd complete!");
}

// Run the tests
testAdd();
