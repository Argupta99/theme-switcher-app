type ButtonProps = {
    text: string;
    onClick?: () => void;

}

function Button ({text, onClick}: ButtonProps) {
    return (
        <button onClick={onClick} className="px-4 py-2 bg-[var(--accent-color)] text-white rounded hover:scale-105 transition mt-4">
            {text}
        </button>
    )
}

export default Button;