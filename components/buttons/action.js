import Link from "next/link";

export const Action = (props) => {
    const {children, link, isPage = false} = props;

    if (isPage) {
        return (
            <Link href={link}>
                <a>
                    <div className="text-sm bg-gray-900 text-gray-100 w-32 h-32 rounded-full flex justify-center items-center hover:animate-rotate-45">
                        {children}
                    </div>
                </a>
            </Link>
        );
    }
    
    return (
        <a href={link}>
            <div className="text-sm bg-gray-900 text-gray-100 w-32 h-32 rounded-full flex justify-center items-center hover:animate-rotate-45">
                {children}
            </div>
        </a>
    );
}