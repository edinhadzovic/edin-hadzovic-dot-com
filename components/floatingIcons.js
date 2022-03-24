import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../styles/floatingIcons.module.css";

export const FloatingIcons = (props) => {
    const {icon, className, link} = props;

    return (
        <div className={`absolute animate-move-up-down w-48 h-48 rounded-full border-2 flex justify-center items-center border-gray-200 ${className}`}>
            <a href={link} target="_blank" rel="noreferrer">
                <div className="bg-yellow-200 animate-bubble-down hover:animate-bubble-up w-14 h-14 flex justify-center items-center rounded-full">
                    <FontAwesomeIcon icon={icon} size="2x" className="w-8 h-8"/>
                </div>
            </a>
        </div>
        
    );
}