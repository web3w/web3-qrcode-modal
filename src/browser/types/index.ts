export * from "./text";

export interface IAppEntry {
    id: string;
    name: string;
    homepage: string;
    chains: string[];
    image_id: string;
    image_url: {
        sm: string;
        md: string;
        lg: string;
    }
    app: {
        browser: string;
        ios: string;
        android: string;
        mac: string;
        windows: string;
        linux: string;
    };
    mobile: {
        native: string;
        universal: string;
    };
    desktop: {
        native: string;
        universal: string;
    };
    metadata: {
        shortName: string;
        colors: {
            primary: string;
            secondary: string;
        };
    };
}

export interface IQRCodeModalOptions {
    registryUrl?: string;
    mobileLinks?: string[];
    desktopLinks?: string[];
}

export interface IMobileRegistryEntry {
    name: string;
    shortName: string;
    color: string;
    logo: string;
    universalLink: string;
    deepLink: string;
}

export type IAppRegistry = {
    [id: string]: IAppEntry;
};

export type IMobileRegistry = IMobileRegistryEntry[];

export interface IMobileLinkInfo {
    name: string;
    href: string;
}
