document.addEventListener("DOMContentLoaded", () => {
    const counters = [
        { id: 'counter1', deadId: 'dead1' },
        { id: 'counter2', deadId: 'dead2' },
        { id: 'counter3', deadId: 'dead3' },
        { id: 'counter4', deadId: 'dead4' }
    ];

    // Final count goal
    const finalCount = 46318;

    // Total time for the counter to finish (in milliseconds)
    const duration = 2500; // 3 seconds
    const steps = finalCount; // Number of steps to reach 45,000
    const increment = finalCount / (duration / 10); // Increment per interval

    counters.forEach(({ id, deadId }) => {
        let currentCount = 1;
        const counterElement = document.getElementById(id);
        const deadElement = document.getElementById(deadId);

        // Function to update counter
        const updateCounter = () => {
            currentCount += increment;
            if (currentCount >= finalCount) {
                currentCount = finalCount;
                clearInterval(counterInterval); // Stop the interval when we reach the final count
                deadElement.style.opacity = 1; // Make "Dead" visible after counting finishes
            }
            counterElement.textContent = Math.round(currentCount); // Round the value to avoid decimals
        };

        // Set interval to update the counter every 10ms
        const counterInterval = setInterval(updateCounter, 10); // 10ms interval
    });
});
