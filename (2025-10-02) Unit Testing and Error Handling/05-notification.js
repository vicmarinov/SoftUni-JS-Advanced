function notify (message) {
    const notificationElement = document.getElementById('notification');
    notificationElement.textContent = message;
    notificationElement.style.display = 'block';
    notificationElement.addEventListener('click', hideNotification);

    function hideNotification (event) {
        const notificationElement = event.currentTarget;
        notificationElement.style.display = 'none';
    }
}