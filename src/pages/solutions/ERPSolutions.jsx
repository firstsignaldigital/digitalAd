import SolutionPageLayout from "/src/components/solutions/SolutionPageLayout";
import solutions from "/src/data/solutions";

export default function ERPSolutions() {
    return <SolutionPageLayout solution={solutions.erp} />;
}