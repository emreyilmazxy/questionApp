import './buttons.css'

type buttonProps = {
    variant?: "primary" | "primary-lg" | "option";
    children: React.ReactNode;
    onClick?: () => void;
}

const Button = ({ variant = "primary", children, onClick }: buttonProps) => {
    return (
        <button className={`btn btn--${variant}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;