import {
    Users,
    Building2,
    GraduationCap,
    Hospital,
    Boxes,
    Receipt,
    FileText,
    ClipboardCheck,
    UserCheck,
    Wallet,
    ShieldCheck,
    Bot,
} from "lucide-react";

const products = [
    {
        title: "CRM Platform",
        url: "/solutions/crm",
        category: "Sales",
        icon: Users,
        description:
            "Manage leads, customers, follow-ups, quotations and sales pipelines from one centralized platform.",
    },
    {
        title: "HRMS",
        url: "/solutions/hrms",
        category: "Human Resources",
        icon: Building2,
        description:
            "Employee management, payroll, leave, attendance and performance tracking.",
    },
    {
        title: "School ERP",
        url: "/solutions/education-management",
        category: "Education",
        icon: GraduationCap,
        description:
            "Complete school management including admissions, fees, attendance and parent communication.",
    },
    {
        title: "Hospital Management",
        url: "/solutions/hospital-management",
        category: "Healthcare",
        icon: Hospital,
        description:
            "Manage patients, appointments, billing, pharmacy and reports efficiently.",
    },
    {
        title: "Inventory Management",
        url: "/solutions/inventory-management",
        category: "Business",
        icon: Boxes,
        description:
            "Track stock, suppliers, purchase orders and warehouse operations in real time.",
    },
    {
        title: "Billing & POS",
        url: "/solutions/billing-and-pos",
        category: "Retail",
        icon: Receipt,
        description:
            "Fast billing, GST invoices, customer management and retail analytics.",
    },
    {
        title: "Document Management",
        url: "/solutions",
        category: "Enterprise",
        icon: FileText,
        description:
            "Securely organize, manage and retrieve business documents from anywhere.",
    },
    {
        title: "Attendance System",
        url: "/solutions/hrms",
        category: "Workforce",
        icon: ClipboardCheck,
        description:
            "GPS-enabled employee attendance with check-in, check-out and reporting.",
    },
    {
        title: "Visitor Management",
        url: "/solutions",
        category: "Security",
        icon: UserCheck,
        description:
            "Digital visitor registration with QR passes and security approvals.",
    },
    {
        title: "Loan Management",
        url: "/solutions",
        category: "Finance",
        icon: Wallet,
        description:
            "Loan applications, approvals, collections and customer tracking.",
    },
    {
        title: "Compliance Manager",
        url: "/solutions/business-compliance",
        category: "Enterprise",
        icon: ShieldCheck,
        description:
            "Monitor policies, audits and compliance activities across departments.",
    },
    {
        title: "AI Helpdesk",
        url: "/services/ai-solutions",
        category: "Artificial Intelligence",
        icon: Bot,
        description:
            "AI-powered support assistant for websites, customer service and internal teams.",
    },
];

export default products;