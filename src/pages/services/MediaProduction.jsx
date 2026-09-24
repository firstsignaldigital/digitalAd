import ServicePageLayout from "/src/components/services/ServicePageLayout";
import services from "/src/data/servicesDetail";

export default function MediaProduction() {
    return <ServicePageLayout service={services.mediaProduction} />;
}