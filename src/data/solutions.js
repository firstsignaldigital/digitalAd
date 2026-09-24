import {
    Users,
    Briefcase,
    ClipboardCheck,
    LayoutDashboard,
    GraduationCap,
    Hospital,
    Clock3,
    Boxes,
    Receipt,
    ShieldCheck,
} from "lucide-react";

const implementationProcess = [
    "Business Discovery",
    "Requirements & Planning",
    "Design & Prototyping",
    "Development & Testing",
    "Deployment & Training",
    "Ongoing Support & Growth",
];

const solutions = {
    crm: {
        slug: "crm",
        name: "CRM & Sales Automation",
        category: "Business Systems",
        icon: Users,
        short:
            "Manage leads, customers, follow-ups, quotations and sales pipelines from one centralized platform.",
        h1: "CRM & Sales Automation for Growing Businesses",
        metaTitle: "CRM Solutions for Businesses | First Signal Digital",
        metaDescription:
            "Custom CRM & sales automation built around your team — lead management, customer lifecycle, quotations, follow-ups and sales analytics in one platform.",
        description:
            "We design and build CRM platforms that give your sales team one place to manage leads, customers and follow-ups. Sales pipelines, quotations and customer history are visible at a glance, so no opportunity gets lost and decisions are based on real data.",
        intro:
            "A CRM solution keeps every customer conversation and sales action in one organized system — reducing missed follow-ups and giving owners a clear picture of what is moving forward.",
        features: [
            "Lead management with stages and ownership",
            "Customer lifecycle and contact history",
            "Quotation creation and follow-up tracking",
            "Sales analytics and pipeline dashboards",
            "Activity and task reminders for the team",
            "Role-based access with secure permissions",
        ],
        problems: [
            "Leads and customer details are scattered across calls, messages, spreadsheets and individual phones.",
            "Follow-ups depend on memory, so enquiries quietly go cold and sales opportunities are lost.",
            "Owners have no reliable view of the pipeline or team performance, making sales decisions guesswork.",
        ],
        useCases: [
            "Sales and business development teams that need pipeline visibility",
            "B2B and service businesses that track quotations and follow-ups",
            "Companies that want customer data centralized in one secure system",
            "Startups preparing a sales process that can scale beyond one person",
        ],
        benefits: [
            "One source of truth for every customer interaction",
            "Fewer missed follow-ups and better response time",
            "Visible sales pipeline for owners and managers",
            "Data-backed decisions instead of gut feel",
        ],
        faqs: [
            {
                q: "What is a CRM solution?",
                a: "A CRM is a shared system where your team stores and manages leads, customers, quotations and follow-ups so sales activity is organized and visible.",
            },
            {
                q: "What businesses can use a CRM?",
                a: "Any business that manages leads and customers — from service firms and B2B companies to retail and real estate teams.",
            },
            {
                q: "Can a CRM be customized?",
                a: "Yes. We build CRM systems around your actual workflow, fields and reporting, instead of forcing you into a fixed product.",
            },
        ],
        relatedSolutions: ["erp", "dashboards", "appointment-booking"],
        relatedServices: [
            "software-development",
            "ai-solutions",
            "website-development",
        ],
    },

    erp: {
        slug: "erp",
        name: "Custom ERP Solutions",
        category: "Business Systems",
        icon: Briefcase,
        short:
            "Operations, inventory, finance, procurement and workflow automation tailored to your business.",
        h1: "Custom ERP Solutions for Business Operations",
        metaTitle: "ERP Solutions for Businesses | First Signal Digital",
        metaDescription:
            "Bespoke ERP covering operations, inventory, finance, procurement and workflow automation — tailored to how your business actually works.",
        description:
            "We build ERP platforms that bring operations, inventory, finance and procurement into one connected system. Instead of adapting your business to off-the-shelf software, the ERP is designed around your departments, workflows and reporting needs.",
        intro:
            "An ERP connects the departments that usually work in separate tools — so data flows once and everyone works from the same, current picture.",
        features: [
            "Operations and process management",
            "Inventory and stock tracking",
            "Finance, accounts and expense modules",
            "Procurement and purchase order handling",
            "Workflow automation and approvals",
            "Department-wise reports and dashboards",
        ],
        problems: [
            "Departments work in separate tools, so data, costs and stock are re-entered again and again.",
            "Manual operations slow down purchasing, billing and reporting as the business grows.",
            "Management gets outdated, piecemeal numbers instead of one reliable view of the business.",
        ],
        useCases: [
            "Manufacturers that need production and inventory in one system",
            "Distributors tracking purchases, stock and sales across locations",
            "Growing companies replacing spreadsheets and disconnected software",
            "Organizations that need department-level reporting and approvals",
        ],
        benefits: [
            "One connected system for core business operations",
            "Less manual data entry and fewer errors",
            "Real-time visibility into stock, money and work",
            "Software that adapts to your process, not the reverse",
        ],
        faqs: [
            {
                q: "What is an ERP solution?",
                a: "ERP is a software system that connects core business areas — operations, inventory, finance and procurement — in one platform so data flows between departments.",
            },
            {
                q: "Which business processes can ERP manage?",
                a: "Common modules include inventory, procurement, sales, finance, project operations and reporting. We scope modules to what your business actually needs.",
            },
            {
                q: "Is an ERP only for large companies?",
                a: "No. We tailor the scope — a growing business can start with the modules it uses today and add more as it scales.",
            },
        ],
        relatedSolutions: ["crm", "inventory-management", "dashboards"],
        relatedServices: [
            "software-development",
            "database-solutions",
            "cloud-solutions",
        ],
    },

    hrms: {
        slug: "hrms",
        name: "HRMS & Attendance",
        category: "Business Systems",
        icon: ClipboardCheck,
        short:
            "Employee attendance, leave management, payroll integration, geo check-in/out, reports and dashboards.",
        h1: "HRMS & Attendance Platform for Workforces",
        metaTitle: "HRMS Solutions for Businesses | First Signal Digital",
        metaDescription:
            "HRMS with geo attendance, leave management, payroll-ready data, reports and mobile apps — built for HR teams and administrators.",
        description:
            "We build HRMS platforms that manage attendance, leave and employee records in one place. With GPS check-in/out, automated leave workflows and payroll-ready reports, HR teams stop reconciling registers and focus on people.",
        intro:
            "An HRMS removes the manual work of attendance registers and leave sheets, giving HR accurate, real-time employee data with far less effort.",
        features: [
            "GPS geo check-in and check-out",
            "Live attendance dashboards",
            "Leave management with approvals",
            "Payroll-ready attendance reports",
            "Admin portal with role-based access",
            "Mobile apps for employees and managers",
        ],
        problems: [
            "Attendance is tracked on registers and files, taking hours to consolidate every month.",
            "Leave requests and approvals run through messages and calls, with no single record.",
            "Payroll teams re-enter attendance data, introducing errors and delays every cycle.",
        ],
        useCases: [
            "Organizations with field staff across multiple locations",
            "HR teams that want accurate, automated attendance records",
            "Companies preparing clean data for payroll every month",
            "Managers who need real-time visibility of their teams",
        ],
        benefits: [
            "Accurate attendance without manual registers",
            "Structured leave and approval workflows",
            "Payroll-ready reports every cycle",
            "Real-time visibility for managers and HR",
        ],
        faqs: [
            {
                q: "What is an HRMS solution?",
                a: "An HRMS is software that manages employee attendance, leave, records and reports — reducing the manual administrative load on HR departments.",
            },
            {
                q: "Does attendance work without special hardware?",
                a: "Yes. Our platform supports GPS-based check-in/out from a mobile app, so no biometric hardware is required.",
            },
            {
                q: "Can HRMS data be used for payroll?",
                a: "Yes. Attendance and leave data can be exported in payroll-ready formats that your payroll team or software can use.",
            },
        ],
        relatedSolutions: ["erp", "dashboards", "business-compliance"],
        relatedServices: [
            "software-development",
            "mobile-app-development",
            "ai-solutions",
        ],
    },

    dashboards: {
        slug: "dashboards",
        name: "Business Dashboards & Analytics",
        category: "Business Systems",
        icon: LayoutDashboard,
        short:
            "Live dashboards and reports that turn scattered business data into clear decisions.",
        h1: "Business Dashboards & Analytics for Smarter Decisions",
        metaTitle: "Business Dashboard & Analytics Development | First Signal Digital",
        metaDescription:
            "Custom business dashboards and analytics that bring scattered data into live reports, KPIs and clear decisions for your team.",
        description:
            "We build custom dashboards that collect data from your systems and present it as live reports, KPIs and trend views. Instead of waiting for weekly spreadsheets, you see how the business is performing the moment it happens.",
        intro:
            "A dashboard connects the numbers your team actually works with — sales, attendance, stock, leads — into one live, easy-to-read view.",
        features: [
            "Live KPI dashboards",
            "Automated periodic reports",
            "Data combined from multiple systems",
            "Role-based views for teams and owners",
            "Trend charts and performance tracking",
            "Custom report layouts",
        ],
        problems: [
            "Reports are stitched together manually, so they arrive late and out of date.",
            "Business data lives in different tools, making a single accurate picture difficult.",
            "Managers act on intuition because the numbers they need take too long to prepare.",
        ],
        useCases: [
            "Owners and managers who want daily performance visibility",
            "Teams that depend on weekly or monthly manual reports",
            "Businesses with data spread across several systems",
            "Leaders tracking KPIs across sales, operations or finance",
        ],
        benefits: [
            "Current numbers instead of stale reports",
            "Clear KPIs that drive action",
            "Less manual reporting effort",
            "One view that combines all your data",
        ],
        faqs: [
            {
                q: "What is a business dashboard?",
                a: "A business dashboard shows your key performance numbers — leads, sales, stock, attendance — in live charts and reports pulled from your systems.",
            },
            {
                q: "Can a dashboard combine data from different sources?",
                a: "Yes. We connect the systems you already use so data can be combined into a single dashboard view.",
            },
            {
                q: "Who uses these dashboards?",
                a: "Owners, managers and department heads who need current, trustworthy numbers to make decisions.",
            },
        ],
        relatedSolutions: ["crm", "erp", "hrms"],
        relatedServices: [
            "software-development",
            "database-solutions",
            "ai-solutions",
        ],
    },

    educationManagement: {
        slug: "education-management",
        name: "School ERP & Education Management",
        category: "Industry Solutions",
        icon: GraduationCap,
        short:
            "Student management, admissions, fees, attendance and parent communication.",
        h1: "School ERP & Education Management Software",
        metaTitle: "School ERP & Education Management Software | First Signal Digital",
        metaDescription:
            "Education management software for schools, colleges and coaching institutes — admissions, fees, attendance, results and parent communication in one system.",
        description:
            "We build education management platforms for schools, colleges and coaching institutes. Admissions, student records, fees, attendance and parent communication live in one system, so administrative staff spend less time on files and more time on students.",
        intro:
            "A school ERP organizes a busy institution — students, fees, staff and parents — into one clear system with role-based access for each team.",
        features: [
            "Student records and admissions",
            "Fee management and receipts",
            "Attendance tracking for students and staff",
            "Exams, grades and report generation",
            "Timetable and class management",
            "Parent communication and notices",
        ],
        problems: [
            "Student records and fees are kept across files, making daily administration slow and error-prone.",
            "Fee collection and reminders are manual, so dues are missed and follow-ups are awkward.",
            "Staff and parents communicate through scattered channels, with no consistent record.",
        ],
        useCases: [
            "Schools and colleges that want organized student administration",
            "Coaching institutes tracking batches, attendance and payments",
            "Institutions replacing paper registers and Excel records",
            "Management teams that need fee and enrollment reports",
        ],
        benefits: [
            "Student information in one reliable system",
            "Clear fee tracking and collection",
            "Better staff communication with parents",
            "Accurate attendance and report generation",
        ],
        faqs: [
            {
                q: "What is a school ERP?",
                a: "A school ERP manages a school's daily operations — student records, admissions, fees, attendance and parent communication — in one software platform.",
            },
            {
                q: "Can it handle both schools and coaching institutes?",
                a: "Yes. The platform is scoped to your institution — whether it's a school, college or coaching institute.",
            },
            {
                q: "Can parents access their child's information?",
                a: "We can provide parent-facing access such as notices, attendance and fee status depending on your requirement.",
            },
        ],
        relatedSolutions: ["hrms", "appointment-booking", "dashboards"],
        relatedServices: [
            "website-development",
            "software-development",
            "media-production",
        ],
    },

    hospitalManagement: {
        slug: "hospital-management",
        name: "Hospital Management",
        category: "Industry Solutions",
        icon: Hospital,
        short:
            "Patient records, appointments, billing, pharmacy and reporting for clinics and hospitals.",
        h1: "Hospital Management Software for Clinics & Hospitals",
        metaTitle: "Hospital Management Software | First Signal Digital",
        metaDescription:
            "Hospital management systems with patient records, appointments, billing, pharmacy and reporting — built for hospitals, clinics, labs and diagnostic centers.",
        description:
            "We build hospital management software that keeps patient records, appointments, billing and pharmacy in one secure system. Front desk, doctors and administrators work from the same current data — reducing wait times and paperwork.",
        intro:
            "A hospital management system gives a clinic or hospital one connected view of patients, appointments, billing and pharmacy operations.",
        features: [
            "Patient registration and records",
            "Appointment scheduling",
            "Billing and payment handling",
            "Pharmacy and medicine stock records",
            "Department and doctor profiles",
            "Reports for administrators",
        ],
        problems: [
            "Patient history on paper is slow to find and easy to lose or misread.",
            "Appointments and billing depend on manual processes during busy hours.",
            "Medicine stock and purchases are tracked manually, risking shortages and errors.",
        ],
        useCases: [
            "Hospitals and multi-specialty clinics",
            "Diagnostic centers and laboratories",
            "Single-clinic practices that want structured records",
            "Administrators who need accurate patient and billing reports",
        ],
        benefits: [
            "Patient records available quickly and securely",
            "Smoother appointments and front-desk flow",
            "Accurate billing and pharmacy records",
            "Better reporting on patients and revenue",
        ],
        faqs: [
            {
                q: "What is a hospital management system?",
                a: "It's software that manages patient records, appointments, billing, pharmacy and reporting for a hospital or clinic in one connected system.",
            },
            {
                q: "Is patient data kept secure?",
                a: "Yes. We apply role-based access, encrypted storage and audit logging appropriate to healthcare data handling.",
            },
            {
                q: "Can it work for small clinics too?",
                a: "Yes. The scope is sized to the facility — from a single clinic to a multi-department hospital.",
            },
        ],
        relatedSolutions: ["appointment-booking", "inventory-management", "dashboards"],
        relatedServices: [
            "software-development",
            "website-development",
            "cyber-security",
        ],
    },

    appointmentBooking: {
        slug: "appointment-booking",
        name: "Appointment & Booking",
        category: "Industry Solutions",
        icon: Clock3,
        short:
            "Scheduling, reminders, calendars, payments and customer self-service portals.",
        h1: "Appointment & Booking Solutions for Service Businesses",
        metaTitle: "Appointment & Booking Software | First Signal Digital",
        metaDescription:
            "Online booking and scheduling with reminders, calendars, payments and self-service portals for clinics, salons, consultants and service businesses.",
        description:
            "We build booking systems that let customers schedule appointments online, cancel and reschedule, and receive reminders — while your team manages calendars and availability without phone tag.",
        intro:
            "An appointment system removes the back-and-forth of booking — customers choose a slot themselves and receive automatic reminders.",
        features: [
            "Online self-service scheduling",
            "Automatic booking reminders",
            "Calendar and slot management",
            "Payment collection with bookings",
            "Customer self-service portal",
            "Staff and resource availability",
        ],
        problems: [
            "Bookings come through calls and messages, creating double bookings and missed slots.",
            "Customers forget appointments, and no-shows waste staff time and revenue.",
            "There is no central calendar linking staff, locations and availability.",
        ],
        useCases: [
            "Clinics and healthcare practices",
            "Salons and grooming businesses",
            "Consultants and professional service providers",
            "Any service business that runs on appointments",
        ],
        benefits: [
            "Fewer double bookings and no-shows",
            "Less time spent on phone scheduling",
            "Reminders that bring customers back",
            "A clearer workload view for your team",
        ],
        faqs: [
            {
                q: "How does online booking work?",
                a: "Customers choose a service, pick an available slot and book — your calendar and reminders update automatically without phone tag.",
            },
            {
                q: "Can customers pay while booking?",
                a: "Yes, we can include payment collection with the booking where your business needs it.",
            },
            {
                q: "Which businesses benefit most?",
                a: "Service businesses that depend on appointments — clinics, salons, consultants, studios and repair services.",
            },
        ],
        relatedSolutions: ["hospital-management", "crm"],
        relatedServices: ["website-development", "mobile-app-development"],
    },

    inventoryManagement: {
        slug: "inventory-management",
        name: "Inventory Management",
        category: "Industry Solutions",
        icon: Boxes,
        short:
            "Track stock, suppliers, purchase orders and warehouse operations in real time.",
        h1: "Inventory Management Software for Real-Time Stock Control",
        metaTitle: "Inventory Management Software | First Signal Digital",
        metaDescription:
            "Inventory management with stock tracking, suppliers, purchase orders and warehouse operations in real time — built for distributors, retailers and manufacturers.",
        description:
            "We build inventory systems that track stock, suppliers, purchase orders and warehouse movement in real time. When goods move, the record updates instantly — so buying decisions and fulfilment run on current numbers.",
        intro:
            "An inventory system tells you exactly what you have, where it is and what to reorder — without counting shelves or trusting memory.",
        features: [
            "Real-time stock tracking",
            "Supplier and purchase order management",
            "Warehouse and location tracking",
            "Low-stock alerts",
            "Batch and expiry tracking where needed",
            "Stock movement reports",
        ],
        problems: [
            "Stock registers and spreadsheets don't reflect what is actually on the floor.",
            "Businesses over-order or run out because they don't know current levels in time.",
            "Purchase orders and suppliers are managed from memory and files, not one record.",
        ],
        useCases: [
            "Wholesalers and distributors managing multiple products",
            "Retailers that need accurate stock between branches",
            "Manufacturers tracking raw materials and finished goods",
            "Businesses that want purchasing driven by real data",
        ],
        benefits: [
            "Current stock levels for every location",
            "Fewer stock-outs and less over-ordering",
            "Clear supplier and purchase history",
            "Reports that support better buying decisions",
        ],
        faqs: [
            {
                q: "What is inventory management software?",
                a: "It's a system that tracks stock levels, purchases, suppliers and warehouse movements so you always know what you have and what to reorder.",
            },
            {
                q: "Can it track multiple locations?",
                a: "Yes. We can track stock across warehouses and branches separately.",
            },
            {
                q: "Does it warn about low stock?",
                a: "Yes, low-stock alerts can be set per product so reordering happens before you run out.",
            },
        ],
        relatedSolutions: ["erp", "billing-and-pos", "dashboards"],
        relatedServices: ["software-development", "database-solutions"],
    },

    billingAndPos: {
        slug: "billing-and-pos",
        name: "Billing & POS",
        category: "Business Operations",
        icon: Receipt,
        short:
            "Fast billing, GST invoices, customer management and retail analytics.",
        h1: "Billing & POS Software for Retail and Restaurants",
        metaTitle: "Billing & POS Software Solutions | First Signal Digital",
        metaDescription:
            "Fast billing, GST invoices, customer management and retail analytics with a POS system built around your counter and payment flow.",
        description:
            "We build billing and POS systems for retail counters and restaurants — quick billing, GST-capable invoices, payment handling and customer records, with sales reports that tell you what is actually selling.",
        intro:
            "A POS system makes checkout fast and accurate, and turns every bill into data your business can learn from.",
        features: [
            "Fast counter billing",
            "GST invoice generation",
            "Multiple payment modes",
            "Customer records and purchase history",
            "Daily and monthly sales reports",
            "Product and price management",
        ],
        problems: [
            "Slow billing makes customers wait and pushes staff under pressure during rush hours.",
            "Manual invoices invite GST and pricing errors that are costly to fix.",
            "Owners can't see what is selling day to day without compiling records by hand.",
        ],
        useCases: [
            "Retail stores and shops",
            "Restaurants and cafes",
            "Distributors with counter sales",
            "Businesses that need GST-compliant invoices",
        ],
        benefits: [
            "Faster checkout and shorter queues",
            "Accurate, GST-ready invoices",
            "Customer and sales history in one place",
            "Daily reports that guide buying and pricing",
        ],
        faqs: [
            {
                q: "What is a POS system?",
                a: "A point-of-sale (POS) system is the software used at your counter for billing, invoicing and payments, with sales records built in.",
            },
            {
                q: "Does it generate GST invoices?",
                a: "Yes, the system can generate GST-compliant invoices with your business details and tax configuration.",
            },
            {
                q: "Can it connect to inventory?",
                a: "Yes — we can connect billing to inventory tracking so sales reduce stock automatically.",
            },
        ],
        relatedSolutions: ["inventory-management", "crm", "dashboards"],
        relatedServices: ["software-development", "website-development"],
    },

    businessCompliance: {
        slug: "business-compliance",
        name: "Business Compliance",
        category: "Business Operations",
        icon: ShieldCheck,
        short:
            "Document workflows, approvals, audits and compliance management systems.",
        h1: "Business Compliance Management Systems",
        metaTitle: "Business Compliance Management Software | First Signal Digital",
        metaDescription:
            "Compliance management with document workflows, approvals, audits and policy tracking across departments — built for regulated and enterprise organizations.",
        description:
            "We build compliance platforms that manage documents, approvals and audits in one auditable system. Required policies, submissions and renewals stay tracked — so nothing slips through unnoticed.",
        intro:
            "A compliance system makes responsible for documents, approvals and audits visible and organized, instead of scattered across files and inboxes.",
        features: [
            "Central document and policy storage",
            "Approval workflows with tracking",
            "Audit trails on every action",
            "Compliance checklists and reminders",
            "Department-wise responsibility mapping",
            "Management reports on status",
        ],
        problems: [
            "Compliance documents live across files and inboxes, with no single source of truth.",
            "Approvals move through messages with no record of who approved what and when.",
            "Deadlines for renewals and audits are missed because tracking is manual.",
        ],
        useCases: [
            "Enterprises managing policies across departments",
            "Finance and regulated businesses tracking approvals",
            "Organizations that need clear audit trails",
            "Teams that must meet compliance deadlines repeatedly",
        ],
        benefits: [
            "One organized home for compliance documents",
            "Clear, recorded approval workflows",
            "Audit trails that stand up to review",
            "Fewer missed renewals and deadlines",
        ],
        faqs: [
            {
                q: "What is a compliance management system?",
                a: "It's software that organizes documents, approvals, policies and audit records so compliance work is tracked and visible.",
            },
            {
                q: "Which organizations need this?",
                a: "Enterprises and regulated businesses that manage approvals, policies, audits and renewal deadlines across departments.",
            },
            {
                q: "Does it keep an audit trail?",
                a: "Yes. Every document action and approval is logged, giving you a clear record of what happened and when.",
            },
        ],
        relatedSolutions: ["erp", "dashboards"],
        relatedServices: ["software-development", "cyber-security"],
    },
};

export default solutions;
export { implementationProcess };