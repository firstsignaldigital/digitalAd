import {
    BriefcaseBusiness,
    Building2,
    ClipboardCheck,
} from "lucide-react";

const solutionsMenu = {
    categories: [
        {
            title: "Business Systems",
            icon: BriefcaseBusiness,
            solutions: [
                { label: "CRM & Sales Automation", url: "/solutions/crm" },
                { label: "Custom ERP Solutions", url: "/solutions/erp" },
                { label: "HRMS & Attendance", url: "/solutions/hrms" },
                {
                    label: "Business Dashboards & Analytics",
                    url: "/solutions/dashboards",
                },
            ],
        },
        {
            title: "Industry Solutions",
            icon: Building2,
            solutions: [
                {
                    label: "School ERP & Education",
                    url: "/solutions/education-management",
                },
                {
                    label: "Hospital Management",
                    url: "/solutions/hospital-management",
                },
                {
                    label: "Appointment & Booking",
                    url: "/solutions/appointment-booking",
                },
                {
                    label: "Inventory Management",
                    url: "/solutions/inventory-management",
                },
            ],
        },
        {
            title: "Business Operations",
            icon: ClipboardCheck,
            solutions: [
                { label: "Billing & POS", url: "/solutions/billing-and-pos" },
                {
                    label: "Business Compliance",
                    url: "/solutions/business-compliance",
                },
            ],
        },
    ],
    viewAll: {
        label: "View All Solutions",
        url: "/solutions",
    },
};

export default solutionsMenu;