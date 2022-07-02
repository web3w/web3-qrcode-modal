import QRCode from "qrcode";

export function open(uri: string) {
    QRCode.toString(uri, {type: "terminal"}).then(console.log);
}

export function close() {
    // empty
}
