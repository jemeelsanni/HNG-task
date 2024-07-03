document.addEventListener('DOMContentLoaded', () => {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');

    function updateTimeAndDay() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = days[now.getUTCDay()];

        currentTimeUTC.textContent = `Current Time (UTC): ${utcTime}`;
        currentDay.textContent = `Current Day: ${day}`;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 60000); // Update every minute
});
