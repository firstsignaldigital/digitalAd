import ServicePageLayout from "/src/components/services/ServicePageLayout";
import services from "/src/data/servicesDetail";

export default function AISolutions() {
    return <ServicePageLayout service={services.aiSolutions} />;
}