document.getElementById('parking-lot').addEventListener('change', function() {
    const spots = document.getElementById('parking-spots');
    spots.innerHTML = '';
    const selectedLot = this.value;
    
    for (let i = 1; i <= 10; i++) {
        const spot = document.createElement('div');
        spot.textContent = `Vị trí ${i}`;
        spots.appendChild(spot);
    }
});