import SolutionPageLayout from "/src/components/solutions/SolutionPageLayout";
import solutions from "/src/data/solutions";

export default function HospitalManagementSolutions() {
    return <SolutionPageLayout solution={solutions.hospitalManagement} />;
}