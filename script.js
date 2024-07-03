
function updateDateTime() {
    const currentTimeUTC = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    
    document.querySelector('[data-testid="currentTimeUTC"]').innerText = currentTimeUTC;
    document.querySelector('[data-testid="currentDay"]').innerText = currentDay;
}

// Update date and time 
updateDateTime();

//  Update every minute
setInterval(updateDateTime, 60000);
