import SolutionPageLayout from "/src/components/solutions/SolutionPageLayout";
import solutions from "/src/data/solutions";

export default function BillingAndPosSolutions() {
    return <SolutionPageLayout solution={solutions.billingAndPos} />;
}