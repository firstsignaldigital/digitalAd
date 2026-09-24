import ServicePageLayout from "/src/components/services/ServicePageLayout";
import services from "/src/data/servicesDetail";

export default function CloudSolutions() {
    return <ServicePageLayout service={services.cloudSolutions} />;
}