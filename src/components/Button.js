import React from "react";
import styles from "../styles/button.module.css"
import Link from "next/link";

const Buttons = (props) => {
    if (props.href) {
        return (
            <div className={styles.frame}>
                <a href={props.href} className={"custom-btn btn-3"}>
                    <span>{props.title}</span>
                </a>
            </div>
        );
    }
    if (props.to) {
        return (
            <div className={styles.frame}>
                <Link href={props.to} className={"custom-btn btn-3"}>
                    <span>{props.title}</span>
                </Link>
            </div>
        );
    }
    return (
        <div className={styles.frame}>
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
            <div className={"frame"}>
                <Link href={props.href} className={"custom-btn btn-7"} target="_blank">
                    <span>{props.title}</span>
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