import ServicePageLayout from "/src/components/services/ServicePageLayout";
import services from "/src/data/servicesDetail";

export default function DigitalTransformation() {
    return <ServicePageLayout service={services.digitalTransformation} />;
}