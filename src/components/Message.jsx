const variantClasses = {
    info: "bg-blue-100 text-blue-800 border border-blue-200",
    danger: "bg-red-100 text-red-800 border border-red-200",
    success: "bg-green-100 text-green-800 border border-green-200",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-200",
};

const Message = ({ variant = "info", children }) => {
    return (
        <div className={`p-4 rounded ${variantClasses[variant]}`}>
            {children}
        </div>
    );
};

export default Message;
