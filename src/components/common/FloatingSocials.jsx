import SocialLinks from "./SocialLinks";

export default function FloatingSocials() {
    return (
        <div className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 md:block">
            <SocialLinks vertical size="sm" />
        </div>
    );
}