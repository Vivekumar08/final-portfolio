import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Buttons = (props) => {
    if (props.href) {
        return (
            <div className={"frame"}>
                <a href={props.href} className={"custom-btn btn-3"}>
                    <span>{props.title}</span>
                </a>
            </div>
        );
    }
    if (props.to) {
        return (
            <div className={"frame"}>
                <Link href={props.to} className={"custom-btn btn-3"}>
                    <span>{props.title}</span>
                </Link>
            </div>
        );
    }
    return (
        <div className={"frame"}>
            <button
                type={props.type}
                onClick={props.onClick}
                disabled={props.disabled}
                className={"custom-btn btn-3"}
            >
                <span>{props.title}</span>
            </button>
        </div>
    );
};

export const Buttons7 = (props) => {
    if (props.href) {
        return (
            <div className={"frame w-full"}>
                <Link href={props.href} className={"custom-btn btn-7 "} target="_blank">
                    <span className="flex items-center">{props.title}&nbsp; <FontAwesomeIcon icon={faUpRightFromSquare} className="w-[18px] h-[18px]"/></span>

                </Link>
            </div>
        );
    }
    if (props.to) {
        return (
            <div className={"frame"}>
                <Link href={props.to} className={"custom-btn btn-7"}>
                    <span>{props.title}</span>
                </Link>
            </div>
        );
    }
    return (
        <div className={"frame"}>
            <button
                type={props.type}
                onClick={props.onClick}
                disabled={props.disabled}
                className={"custom-btn btn-7"}
            >
                <span>{props.title}</span>
            </button>
        </div>
    );
};

export const Buttons8 = (props) => {
    if (props.href) {
        return (
            <div className={"frame-12"}>
                <a href={props.href} className="custom-btn  btn-12">
                    <span>Click!</span>
                    <span>{props.title}</span>
                </a>
            </div>
        );
    }
    if (props.to) {
        return (
            <div className={"frame-12"}>
                <Link href={props.to} className="custom-btn  btn-12">
                    <span>Click!</span>

                    <span>{props.title}</span>
                </Link>
            </div>
        );
    }
    return (
        <div className={"frame-12"}>
            <button
                type={props.type}
                onClick={props.onClick}
                disabled={props.disabled}
                className="custom-btn  btn-12"
            >
                <span>Click!</span>

                <span>{props.title}</span>
            </button>
        </div>
    );
};

export default Buttons;