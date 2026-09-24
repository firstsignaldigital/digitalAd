import SolutionPageLayout from "/src/components/solutions/SolutionPageLayout";
import solutions from "/src/data/solutions";

export default function DashboardSolutions() {
    return <SolutionPageLayout solution={solutions.dashboards} />;
}