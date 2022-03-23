import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export function Bar(props) {
    const { onClick } = props;

    return (
        <button onClick={onClick} className="bg-gray-800 hover:bg-gray-700 hover:cursor-pointer w-12 h-12 flex justify-center items-center rounded-full shadow">
            <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-yellow-400"/>
        </button>
    );
}