import React from "react";

import {WALLETCONNECT_CONNECT_BUTTON_ID} from "../constants";

interface ConnectButtonProps {
    name: string;
    color: string;
    href: string;
    onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function ConnectButton(props: ConnectButtonProps) {
    // console.log("!11")
    return (
        <a
            className="walletconnect-connect__button"
            href={props.href}
            id={`${WALLETCONNECT_CONNECT_BUTTON_ID}-${props.name}`}
            onClick={props.onClick}
            rel="noopener noreferrer"
            style={{backgroundColor: props.color}}
            target="_blank"
        >
            {props.name}
        </a>
    );
}
