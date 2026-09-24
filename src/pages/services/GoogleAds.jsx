import ServicePageLayout from "/src/components/services/ServicePageLayout";
import services from "/src/data/servicesDetail";

export default function GoogleAds() {
    return <ServicePageLayout service={services.googleAds} />;
}