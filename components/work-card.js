import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

export const WorkCard = (props) => {
    const { to, title, desc, years, firm, firmLink, image, position = 'top' } = props;

    return (
        <Link href={to}>
            <a className={`group ${position === 'top' ? 'sm:mt-10' : 'sm:mb-10'}`}>
                <div className={`relative h-80 w-full ${!image && 'bg-gray-900'}`}>
                    {image && 
                        <Image
                            src={image}
                            layout='fill'
                            objectFit='contain'
                        />
                    }
                </div>
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
                        <p className="text-sm">{desc} &bull; {years} &bull; <a className="text-yellow-400 underline hover:text-yellow-500" href={firmLink} target="_blank" rel="noreferrer">{firm}</a></p>
                    </div>
                </div>
            </a>
        </Link>
    );
}