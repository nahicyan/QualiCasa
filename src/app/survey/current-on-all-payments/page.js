'use client';

import { useRouter } from "next/navigation";
import { useSurvey } from "@/app/context/SurveyContext";
import MotionContainer from "@/components/MotionContainer"; // Import reusable MotionContainer component

export default function CurrentOnAllPaymentsPage() {
    const router = useRouter();
    const { updateSurveyData, surveyData } = useSurvey();

    // Function to handle selection for "Current On All Payments"
    const handleCurrentOnAllPaymentsSelection = (choice) => {
        updateSurveyData("current_on_all_payments", choice);
        console.log("Current On All Payments: ", choice);

        // Determine if the user should be disqualified
        let disqualificationFlag = surveyData.disqualificationFlag || false;

        if (choice === "No") {
            disqualificationFlag = true;
        }

        updateSurveyData("disqualificationFlag", disqualificationFlag);
        console.log("Disqualification Flag: ", disqualificationFlag);

        // Redirect to the next page
        router.push("/survey/down-payment");
    };

    return (
        <MotionContainer>
            <h2 className="heading">
                Have you been current on all rent or housing payments over the last 12 months?
            </h2>
            <div className="element-container">
                <button
                    onClick={() => handleCurrentOnAllPaymentsSelection("Yes")}
                    className="button"
                >
                    Yes
                </button>
                <button
                    onClick={() => handleCurrentOnAllPaymentsSelection("No")}
                    className="button"
                >
                    No
                </button>
            </div>
        </MotionContainer>
    );
}
