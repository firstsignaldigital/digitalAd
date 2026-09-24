import ServicePageLayout from "/src/components/services/ServicePageLayout";
import services from "/src/data/servicesDetail";

export default function Branding() {
    return <ServicePageLayout service={services.branding} />;
}