import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrimaryButton({
    children,
    to,
    className = "",
}) {
    const content = (
        <>
            {children}

            <ArrowRight size={18} />
        </>
    );

    if (to) {
        return (
            <Link
                to={to}
                className={`inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-xl ${className}`}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            className={`inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-xl ${className}`}
        >
            {content}
        </button>
    );
}