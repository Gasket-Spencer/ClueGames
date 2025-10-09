self.addEventListener('push', event => {
    console.log('Push received:', event);

    let data = {};
    if (event.data) {
        data = event.data.json();
    }

    const title = data.title || "New Notification";
    const options = {
        body: data.body || "Test notification",
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        // Opens site
        clients.openWindow('/')
    );
});
