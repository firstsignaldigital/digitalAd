import ServicePageLayout from "/src/components/services/ServicePageLayout";
import services from "/src/data/servicesDetail";

export default function DatabaseSolutions() {
    return <ServicePageLayout service={services.databaseSolutions} />;
}