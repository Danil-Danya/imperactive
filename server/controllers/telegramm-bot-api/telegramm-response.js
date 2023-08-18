import sendTelegrammMessage from "./telegramm-controller";

export const getMessageFromClient = (req, res) => {
    const name = req.body.name;
    const number = req.body.number;
    const messageText = req.body.message;

    const message = 'Имя клиента: ' + name + '\n' +
                    "Номер клиента: " + number + '\n' +
                    'Сообщение клиента: ' + messageText;

    sendTelegrammMessage(message);

    res.status('200')
}