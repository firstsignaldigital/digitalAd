import ServicePageLayout from "/src/components/services/ServicePageLayout";
import services from "/src/data/servicesDetail";

export default function SEO() {
    return <ServicePageLayout service={services.seo} />;
}