import * as nodeLib from "./node";
import * as browserLib from "./browser";
import {IQRCodeModalOptions} from "./browser/types";
import {isNode} from "./browser/utils/browser";

function open(uri: string, cb: any, qrcodeModalOptions?: IQRCodeModalOptions) {
    console.log(uri);
    if (isNode()) {
        nodeLib.open(uri);
    } else {
        browserLib.open(uri, cb, qrcodeModalOptions);
    }
}

function close() {
    if (isNode()) {
        nodeLib.close();
    } else {
        browserLib.close();
    }
}

export default {open, close};
