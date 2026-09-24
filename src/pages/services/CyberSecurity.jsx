import ServicePageLayout from "/src/components/services/ServicePageLayout";
import services from "/src/data/servicesDetail";

export default function CyberSecurity() {
    return <ServicePageLayout service={services.cyberSecurity} />;
}