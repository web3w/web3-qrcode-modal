// import * as safeJson from "@walletconnect/safe-json";
export function safeJsonParse(value) {
    if (typeof value !== "string") {
        throw new Error(`Cannot safe json parse value of type ${typeof value}`);
    }
    try {
        return JSON.parse(value);
    } catch (_a) {
        return value;
    }
}

export function safeJsonStringify(value) {
    return typeof value === "string" ? value : JSON.stringify(value);
}


export const wallets = {
    "count": 5,
    "listings": {
        "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369": {
            "id": "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369",
            "name": "Rainbow",
            "description": "Rainbow is a fun, simple, and secure way to get started with crypto and explore the new world of Ethereum",
            "homepage": "https://rainbow.me/",
            "chains": [
                "eip155:1",
                "eip155:10",
                "eip155:137",
                "eip155:42161"
            ],
            "versions": [
                "1"
            ],
            "app_type": "wallet",
            "image_id": "6089655c-cb7e-414b-f742-01fdc154be00",
            "image_url": {
                "sm": "https://registry.walletconnect.com/api/v2/logo/sm/6089655c-cb7e-414b-f742-01fdc154be00",
                "md": "https://registry.walletconnect.com/api/v2/logo/md/6089655c-cb7e-414b-f742-01fdc154be00",
                "lg": "https://registry.walletconnect.com/api/v2/logo/lg/6089655c-cb7e-414b-f742-01fdc154be00"
            },
            "app": {
                "browser": null,
                "ios": "https://apps.apple.com/app/rainbow-ethereum-wallet/id1457119021",
                "android": "https://play.google.com/store/apps/details?id=me.rainbow",
                "mac": null,
                "windows": null,
                "linux": null
            },
            "mobile": {
                "native": "rainbow:",
                "universal": "https://rnbwapp.com"
            },
            "desktop": {
                "native": null,
                "universal": null
            },
            "metadata": {
                "shortName": "Rainbow",
                "colors": {
                    "primary": "#001e59",
                    "secondary": null
                }
            }
        },
        "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0": {
            "id": "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
            "name": "Trust Wallet",
            "description": "",
            "homepage": "https://trustwallet.com/",
            "chains": [
                "eip155:1"
            ],
            "versions": [
                "1"
            ],
            "app_type": "wallet",
            "image_id": "0528ee7e-16d1-4089-21e3-bbfb41933100",
            "image_url": {
                "sm": "https://registry.walletconnect.com/api/v2/logo/sm/0528ee7e-16d1-4089-21e3-bbfb41933100",
                "md": "https://registry.walletconnect.com/api/v2/logo/md/0528ee7e-16d1-4089-21e3-bbfb41933100",
                "lg": "https://registry.walletconnect.com/api/v2/logo/lg/0528ee7e-16d1-4089-21e3-bbfb41933100"
            },
            "app": {
                "browser": "",
                "ios": "https://apps.apple.com/app/apple-store/id1288339409",
                "android": "https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp",
                "mac": "",
                "windows": "",
                "linux": ""
            },
            "mobile": {
                "native": "trust:",
                "universal": "https://link.trustwallet.com"
            },
            "desktop": {
                "native": "",
                "universal": ""
            },
            "metadata": {
                "shortName": "Trust",
                "colors": {
                    "primary": "#3375bb",
                    "secondary": ""
                }
            }
        },
        "cf21952a9bc8108bf13b12c92443751e2cc388d27008be4201b92bbc6d83dd46": {
            "id": "cf21952a9bc8108bf13b12c92443751e2cc388d27008be4201b92bbc6d83dd46",
            "name": "Argent",
            "description": "",
            "homepage": "https://argent.xyz/",
            "chains": [
                "eip155:1"
            ],
            "versions": [
                "1"
            ],
            "app_type": "wallet",
            "image_id": "ce5fbfe8-13b5-4f5f-184a-34f6ee7a3d00",
            "image_url": {
                "sm": "https://registry.walletconnect.com/api/v2/logo/sm/ce5fbfe8-13b5-4f5f-184a-34f6ee7a3d00",
                "md": "https://registry.walletconnect.com/api/v2/logo/md/ce5fbfe8-13b5-4f5f-184a-34f6ee7a3d00",
                "lg": "https://registry.walletconnect.com/api/v2/logo/lg/ce5fbfe8-13b5-4f5f-184a-34f6ee7a3d00"
            },
            "app": {
                "browser": "",
                "ios": "https://apps.apple.com/us/app/argent/id1358741926",
                "android": "https://play.google.com/store/apps/details?id=im.argent.contractwalletclient",
                "mac": "",
                "windows": "",
                "linux": ""
            },
            "mobile": {
                "native": "argent://app",
                "universal": "https://argent.link/app"
            },
            "desktop": {
                "native": "",
                "universal": ""
            },
            "metadata": {
                "shortName": "Argent",
                "colors": {
                    "primary": "#ff875b",
                    "secondary": ""
                }
            }
        },
        "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96": {
            "id": "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
            "name": "MetaMask",
            "description": "",
            "homepage": "https://metamask.io/",
            "chains": [
                "eip155:1"
            ],
            "versions": [
                "1"
            ],
            "app_type": "wallet",
            "image_id": "fb5269f0-1870-42d6-82b4-26d27626e800",
            "image_url": {
                "sm": "https://registry.walletconnect.com/api/v2/logo/sm/fb5269f0-1870-42d6-82b4-26d27626e800",
                "md": "https://registry.walletconnect.com/api/v2/logo/md/fb5269f0-1870-42d6-82b4-26d27626e800",
                "lg": "https://registry.walletconnect.com/api/v2/logo/lg/fb5269f0-1870-42d6-82b4-26d27626e800"
            },
            "app": {
                "browser": "",
                "ios": "https://apps.apple.com/us/app/metamask/id1438144202",
                "android": "https://play.google.com/store/apps/details?id=io.metamask",
                "mac": "",
                "windows": "",
                "linux": ""
            },
            "mobile": {
                "native": "metamask:",
                "universal": "https://metamask.app.link"
            },
            "desktop": {
                "native": "",
                "universal": ""
            },
            "metadata": {
                "shortName": "MetaMask",
                "colors": {
                    "primary": "#ffffff",
                    "secondary": ""
                }
            }
        },
        "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f": {
            "id": "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
            "name": "Gnosis Safe Multisig",
            "description": null,
            "homepage": "https://gnosis-safe.io/",
            "chains": [
                "eip155:1"
            ],
            "versions": [
                "1"
            ],
            "app_type": "wallet",
            "image_id": "0b7e0f05-0a5b-4f3c-315d-59c1c4c22c00",
            "image_url": {
                "sm": "https://registry.walletconnect.com/api/v2/logo/sm/0b7e0f05-0a5b-4f3c-315d-59c1c4c22c00",
                "md": "https://registry.walletconnect.com/api/v2/logo/md/0b7e0f05-0a5b-4f3c-315d-59c1c4c22c00",
                "lg": "https://registry.walletconnect.com/api/v2/logo/lg/0b7e0f05-0a5b-4f3c-315d-59c1c4c22c00"
            },
            "app": {
                "browser": "https://gnosis-safe.io/app/",
                "ios": "https://apps.apple.com/app/id1515759131",
                "android": "https://play.google.com/store/apps/details?id=io.gnosis.safe",
                "mac": null,
                "windows": null,
                "linux": null
            },
            "mobile": {
                "native": "gnosissafe:",
                "universal": "https://gnosis-safe.io/"
            },
            "desktop": {
                "native": null,
                "universal": null
            },
            "metadata": {
                "shortName": "Gnosis Safe",
                "colors": {
                    "primary": "#091828",
                    "secondary": "#fff"
                }
            }
        },
    }
}
