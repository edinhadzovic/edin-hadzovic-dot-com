import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Close = (props) => {
    const {onClick} = props;

    return (
        <div onClick={onClick} className="bg-gray-800 hover:bg-gray-700 hover:cursor-pointer w-12 h-12 flex justify-center items-center rounded-full shadow">
            <FontAwesomeIcon icon={faTimes} className="w-6 h-6 text-yellow-400"/>
        </div>
    );
}