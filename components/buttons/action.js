export const Action = (props) => {
    const {children, link} = props;
    
    return (
        <a href={link}>
            <div className="text-sm bg-gray-900 text-gray-100 w-32 h-32 rounded-full flex justify-center items-center hover:animate-rotate-45">
                {children}
            </div>
        </a>
    );
}