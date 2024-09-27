const y=5;
if (true) {
    const y = 10; // This is a different 'y' than the one outside the block
    console.log(y); //Output: 10 (inside the block)
}
console.log(y); //Output: 5 (outside the block)