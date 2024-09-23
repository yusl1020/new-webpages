document.addEventListener('DOMContentLoaded', function() {
    // Sample data for daily life and thoughts
    const dailyLog = [
        { date: '2023-10-01', activity: 'Went for a morning run.' },
        { date: '2023-10-02', activity: 'Read a new book.' }
    ];

    const thoughtLog = [
        { date: '2023-10-01', thought: 'Learning new things is always exciting.' },
        { date: '2023-10-02', thought: 'Staying positive is key to happiness.' }
    ];

    // Display daily life log
    const dailyLogDiv = document.getElementById('daily-log');
    dailyLog.forEach(log => {
        const logEntry = document.createElement('div');
        logEntry.innerHTML = `<strong>${log.date}:</strong> ${log.activity}`;
        dailyLogDiv.appendChild(logEntry);
    });

    // Display thoughts log
    const thoughtLogDiv = document.getElementById('thought-log');
    thoughtLog.forEach(log => {
        const logEntry = document.createElement('div');
        logEntry.innerHTML = `<strong>${log.date}:</strong> ${log.thought}`;
        thoughtLogDiv.appendChild(logEntry);
    });

    // Display photos from local directory
    const photoGallery = document.getElementById('photo-gallery');
    const photoFiles = [
        'photo1.jpg',
        'photo2.jpg',
        'photo3.jpg'
    ];

    photoFiles.forEach(file => {
        const img = document.createElement('img');
        img.src = file;
        img.alt = 'My Photo';
        photoGallery.appendChild(img);
    });
});
