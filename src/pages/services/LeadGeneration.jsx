import ServicePageLayout from "/src/components/services/ServicePageLayout";
import services from "/src/data/servicesDetail";

export default function LeadGeneration() {
    return <ServicePageLayout service={services.leadGeneration} />;
}