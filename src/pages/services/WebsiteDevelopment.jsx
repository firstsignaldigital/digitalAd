import ServicePageLayout from "/src/components/services/ServicePageLayout";
import services from "/src/data/servicesDetail";

export default function WebsiteDevelopment() {
    return <ServicePageLayout service={services.websiteDevelopment} />;
}