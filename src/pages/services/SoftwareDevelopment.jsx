import ServicePageLayout from "/src/components/services/ServicePageLayout";
import services from "/src/data/servicesDetail";

export default function SoftwareDevelopment() {
    return <ServicePageLayout service={services.softwareDevelopment} />;
}