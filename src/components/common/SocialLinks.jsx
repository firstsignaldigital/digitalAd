import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/firstsignaldigital/",
        icon: FaFacebookF,
        bg: "bg-[#1877F2]",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/firstsignaldigital/",
        icon: FaInstagram,
        bg: "bg-gradient-to-br from-[#f09433] via-[#e1306c] to-[#8134af]",
    },
    {
        name: "X",
        href: "https://x.com/1stsignldigital",
        icon: FaXTwitter,
        bg: "bg-black",
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/@FirstsignalDigital",
        icon: FaYoutube,
        bg: "bg-[#FF0000]",
    },
    {
        name: "WhatsApp",
        href: "https://wa.me/919817048962",
        icon: FaWhatsapp,
        bg: "bg-[#25D366]",
    },
];

export default function SocialLinks({
    showLabel = false,
    size = "md",
    vertical = false,
}) {
    const sizes = {
        sm: "w-10 h-10 text-base",
        md: "w-12 h-12 text-lg",
        lg: "w-14 h-14 text-xl",
    };

    return (
        <div className={`flex gap-4 ${vertical ? "flex-col" : "flex-wrap"}`}>
            {socials.map((item) => {
                const Icon = item.icon;
                return (
                    <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.name}
                        title={item.name}
                        className={`group inline-flex items-center justify-center gap-3 rounded-full text-white px-4 transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-xl ${showLabel ? "pr-5" : ""} ${item.bg}`}
                    >
                        <span className={`flex items-center justify-center rounded-full ${sizes[size]}`}>
                            <Icon />
                        </span>
                        {showLabel && (
                            <span className="font-medium">
                                {item.name}
                            </span>
                        )}
                    </a>
                );
            })}
        </div>
    );
}
