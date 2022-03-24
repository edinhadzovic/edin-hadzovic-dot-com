import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon = (props) => {
    const { className, icon, link } = props;
    return (
        <div className={`w-20 h-20 rounded-full border-2 flex justify-center items-center border-gray-200 ${className}`}>
            <a href={link} target="_blank" rel="noreferrer">
                <div className="bg-yellow-200 w-14 h-14 flex justify-center items-center rounded-full">
                    <FontAwesomeIcon icon={icon} size="2x" className="w-8 h-8"/>
                </div>
            </a>
        </div>
    )
}