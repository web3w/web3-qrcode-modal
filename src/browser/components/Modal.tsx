import React, {useEffect, useState} from "react";
import {
    isMobile,
    isAndroid,
    formatIOSMobile,
    saveMobileLinkInfo,
    getMobileLinkRegistry,
    formatMobileRegistry,
    wallets
} from "../utils";

import {Header} from "./Header";
import {LinkDisplay} from "./LinkDisplay";
import {QRCodeDisplay} from "./QRCodeDisplay";

import {WALLETCONNECT_MODAL_ID} from "../constants";
import {IMobileRegistryEntry, IQRCodeModalOptions, TextMap} from "../types";


interface ModalProps {
    text: TextMap;
    uri: string;
    onClose: any;
    qrcodeModalOptions?: IQRCodeModalOptions;
}

export function Modal(props: ModalProps) {
    const android = isAndroid();
    const mobile = isMobile();

    const whitelist = mobile
        ? props.qrcodeModalOptions && props.qrcodeModalOptions.mobileLinks
            ? props.qrcodeModalOptions.mobileLinks
            : undefined
        : props.qrcodeModalOptions && props.qrcodeModalOptions.desktopLinks
            ? props.qrcodeModalOptions.desktopLinks
            : undefined;
    const [loading, setLoading] = useState(false);
    const [fetched, setFetched] = useState(false);
    const [displayQRCode, setDisplayQRCode] = React.useState(!mobile);
    const displayProps = {
        mobile,
        text: props.text,
        uri: props.uri,
        qrcodeModalOptions: props.qrcodeModalOptions,
    };

    const [singleLinkHref, setSingleLinkHref] = useState("");
    const [hasSingleLink, setHasSingleLink] = useState(false);
    const [links, setLinks] = useState<IMobileRegistryEntry[]>([]);
    const [errorMessage, setErrorMessage] = useState("");

    const getLinksIfNeeded = () => {
        debugger
        if (fetched || loading || (whitelist && !whitelist.length) || links.length > 0) {
            return;
        }
        useEffect(() => {
            const initLinks = async () => {
                if (android) return;
                setLoading(true);
                try {

                    const registry = wallets.listings as any;
                    const platform = mobile ? "mobile" : "desktop";
                    const _links = getMobileLinkRegistry(formatMobileRegistry(registry, platform), whitelist);
                    setLoading(false);
                    setFetched(true);
                    setErrorMessage(!_links.length ? props.text.no_supported_wallets : "");
                    debugger
                    setLinks(_links);
                    const hasSingleLink = _links.length === 1;
                    if (hasSingleLink) {
                        setSingleLinkHref(formatIOSMobile(props.uri, _links[0]));
                        setDisplayQRCode(true);
                    }
                    setHasSingleLink(hasSingleLink);
                } catch (e) {
                    debugger
                    setLoading(false);
                    setFetched(true);
                    setErrorMessage(props.text.something_went_wrong);
                    console.error(e); // eslint-disable-line no-console
                }
            };
            initLinks();
        });
    };
    // debugger
    getLinksIfNeeded();

    const rightSelected = mobile ? displayQRCode : !displayQRCode;
    debugger
    return (
        <div id={WALLETCONNECT_MODAL_ID} className="walletconnect-qrcode__base animated fadeIn">
            <div className="walletconnect-modal__base">
                <Header onClose={props.onClose}/>
                {hasSingleLink && displayQRCode ? (
                    <div className="walletconnect-modal__single_wallet">
                        <a
                            onClick={() => saveMobileLinkInfo({
                                name: links[0].name,
                                href: singleLinkHref
                            })}
                            href={singleLinkHref}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {props.text.connect_with + " " + (hasSingleLink ? links[0].name : "") + " ›"}
                        </a>
                    </div>
                ) : android || loading || (!loading && links.length) ? (
                    <div
                        className={`walletconnect-modal__mobile__toggle${
                            rightSelected ? " right__selected" : ""
                        }`}
                    >
                        <div className="walletconnect-modal__mobile__toggle_selector"/>
                        {mobile ? (
                            <>
                                <a onClick={() => (setDisplayQRCode(false), getLinksIfNeeded())}>
                                    {props.text.mobile}
                                </a>
                                <a onClick={() => setDisplayQRCode(true)}>{props.text.qrcode}</a>
                            </>
                        ) : (
                            <>
                                <a onClick={() => setDisplayQRCode(true)}>{props.text.qrcode}</a>
                                <a onClick={() => (setDisplayQRCode(false), getLinksIfNeeded())}>
                                    {props.text.desktop}
                                </a>
                            </>
                        )}
                    </div>
                ) : null}

                <div>
                    {displayQRCode || (!android && !loading && !links.length) ? (
                        <QRCodeDisplay {...displayProps} />
                    ) : (
                        <LinkDisplay {...displayProps} links={links} errorMessage={errorMessage}/>
                    )}
                </div>
            </div>
        </div>
    );
}

