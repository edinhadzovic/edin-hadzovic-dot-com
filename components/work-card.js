import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const WorkCard = (props) => {
    const { to, title, desc, years, firm, position = 'top' } = props;

    return (
        <Link href={to}>
            <a className={`group ${position === 'top' ? 'sm:mt-10' : 'sm:mb-10'}`}>
                <div className="h-80 w-full bg-black "></div>
                <div className="space-y-2">
                    <div className="flex mt-10">
                        <h3 className="flex-1 text-2xl">{title}</h3>
                        <div className="flex-1">
                            <div className="flex justify-end">
                                <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm">{desc} &bull; {years} &bull; {firm}</p>
                    </div>
                </div>
            </a>
        </Link>
    );
}