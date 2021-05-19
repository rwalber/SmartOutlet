import PushNotification from "react-native-push-notification";

class NotificationHandler {
    onNotification(notification) {
        console.log('NotificationHandler:', notification);

        if (typeof this._onNotification === 'function') {
            this._onNotification(notification);
        }
    }

    onRegister(token) {
        console.log('NotificationHandler:', token);

        if (typeof this._onRegister === 'function') {
            this._onRegister(token);
        }
    }

    onAction(notification) {
        console.log('Notification action received:');
        console.log(notification.action);
        console.log(notification);

        if (notification.action === 'Yes') {
            PushNotification.invokeApp(notification);
        }
    }

    attachRegister(handler) {
        this._onRegister = handler;
    }

    attachNotification(handler) {
        this._onNotification = handler;
    }
}

const ConfigureLocalNotification = () => {
    const handler = new NotificationHandler();
    
    PushNotification.configure({
        onRegister: handler.onRegister.bind(handler),
        onNotification: handler.onNotification.bind(handler),
        onAction: handler.onAction.bind(handler),
        permissions: {
            alert: true,
            badge: true,
            sound: true,
        },
        popInitialNotification: true,
        requestPermissions: Platform.OS === 'ios'
    });
    
    PushNotification.createChannel(
        {
            channelId: "_outletNotify",
            channelName: `_notify`,
            importance: 4,
            vibrate: true,
        },
        (created) => console.log(`createChannel '_outletNotify' returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
}

export default ConfigureLocalNotification;