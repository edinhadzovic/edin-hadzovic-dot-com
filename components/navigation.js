import { useState } from "react";
import { Bar, Close } from "./buttons";

export const Navigation = (props) => {
    const [active, setActive] = useState(false);

    const onBarClick = () => setActive(true);

    return (
        <div className="flex justify-end">
            <div className="z-20">
                { !active ? <Bar onClick={onBarClick} /> : <Close onClick={() => setActive(false)} /> }
            </div>
            {active &&
                <div className="absolute top-0 right-0 w-screen h-screen bg-gray-900 z-10">

                </div>
            }
        </div>
    );
}