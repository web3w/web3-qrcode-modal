// import { IClientMeta } from "@walletconnect/types";

// import * as windowMetadata from "@walletconnect/window-metadata";
// import * as windowGetters from "@walletconnect/window-getters";
import {
    detect,
    BrowserInfo,
    BotInfo,
    NodeInfo,
    SearchBotDeviceInfo,
    ReactNativeInfo,
} from "detect-browser";

export function detectEnv(
    userAgent?: string,
): BrowserInfo | BotInfo | NodeInfo | SearchBotDeviceInfo | ReactNativeInfo | null {
    return detect(userAgent);
}

export function detectOS() {
    const env = detectEnv();
    return env && env.os ? env.os : undefined;
}

export function isAndroid(): boolean {
    const os = detectOS();
    return os ? os.toLowerCase().includes("android") : false;
}

export function isIOS(): boolean {
    const os = detectOS();
    return os
        ? os.toLowerCase().includes("ios") ||
        (os.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1)
        : false;
}

export function isMobile(): boolean {
    const os = detectOS();
    return os ? isAndroid() || isIOS() : false;
}

export function isNode(): boolean {
    const env = detectEnv();
    const result = env && env.name ? env.name.toLowerCase() === "node" : false;
    return result;
}

// export function isBrowser(): boolean {
//   const result = !isNode() && !!getNavigator();
//   return result;
// }

// export const getFromWindow = windowGetters.getFromWindow;
//
// export const getFromWindowOrThrow = windowGetters.getFromWindowOrThrow;

function getFromWindow(name):any {
    let res = undefined;
    if (typeof window !== "undefined" && typeof window[name] !== "undefined") {
        res = window[name] as any;
    }
    return res;
}

export function getLocalStorage() {
    return getFromWindow("localStorage");
}

// export const getLocalStorage =getFromWindow("localStorage");


function getFromWindowOrThrow(name) {
    const res = getFromWindow(name);
    if (!res) {
        throw new Error(`${name} is not defined in Window`);
    }
    return res;
}

export function getDocumentOrThrow(){
    return getFromWindowOrThrow("document");
}


export function getNavigatorOrThrow() {
    return getFromWindowOrThrow("navigator");
}




//
//
// export const getDocument = windowGetters.getDocument;
//
// export const getNavigatorOrThrow = windowGetters.getNavigatorOrThrow;
//
// export const getNavigator = windowGetters.getNavigator;
//
// export const getLocationOrThrow = windowGetters.getLocationOrThrow;
//
// export const getLocation = windowGetters.getLocation;
//
// export const getCryptoOrThrow = windowGetters.getCryptoOrThrow;
//
// export const getCrypto = windowGetters.getCrypto;
//
// export const getLocalStorageOrThrow = windowGetters.getLocalStorageOrThrow;
//


//
// export function getClientMeta(): IClientMeta | null {
//   return windowMetadata.getWindowMetadata();
// }
