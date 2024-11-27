'use client';

import { useSurvey } from "@/app/context/SurveyContext";
import { useRouter } from "next/navigation";
import MotionContainer from "@/components/MotionContainer"; // Import reusable MotionContainer component

export default function ForeclosureForbearancePage() {
    const router = useRouter();
    const { updateSurveyData, surveyData } = useSurvey();

    // Function to handle foreclosure or forbearance selection
    const handleForeclosureForbearanceSelection = (choice) => {
        updateSurveyData("foreclosure_forbearance", choice);

        // Determine if the user should be disqualified
        let disqualificationFlag = surveyData.disqualificationFlag || false;

        // Set disqualification flag to true if the user is in foreclosure or forbearance
        if (choice === "Yes") {
            disqualificationFlag = true;
        }

        // Update the disqualification flag in the survey context
        updateSurveyData("disqualificationFlag", disqualificationFlag);

        // Log current state for debugging purposes
        console.log("Foreclosure or Forbearance: ", choice);
        console.log("Disqualification Flag: ", disqualificationFlag);

        // Navigate to the next step
        router.push("/survey/declared-bankruptcy");
    };

    return (
        <MotionContainer>
            <h2 className="heading">
                Are you currently in foreclosure or forbearance?
            </h2>
            <div className="element-container">
                <button
                    onClick={() => handleForeclosureForbearanceSelection("Yes")}
                    className="button"
                >
                    Yes
                </button>
                <button
                    onClick={() => handleForeclosureForbearanceSelection("No")}
                    className="button"
                >
                    No
                </button>
            </div>
        </MotionContainer>
    );
}
