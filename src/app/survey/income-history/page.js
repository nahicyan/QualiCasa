'use client';

import { useSurvey } from "@/app/context/SurveyContext";
import { useRouter } from "next/navigation";
import MotionContainer from "@/components/MotionContainer"; // Import reusable MotionContainer component

export default function IncomeHistoryPage() {
    const router = useRouter();
    const { updateSurveyData, surveyData } = useSurvey();

    // Function to handle income history selection
    const handleIncomeHistorySelection = (choice) => {
        updateSurveyData("income_history", choice);

        // Determine if the user should be disqualified
        let disqualificationFlag = surveyData.disqualificationFlag || false;

        // Set disqualification flag to true if the user cannot provide a 2-year income history
        if (choice === "No, I don't have it") {
            disqualificationFlag = true;
        }

        // Update the disqualification flag in the survey context
        updateSurveyData("disqualificationFlag", disqualificationFlag);

        // Log current state for debugging purposes
        console.log("Income History: ", choice);
        console.log("Disqualification Flag: ", disqualificationFlag);

        // Navigate to the next step
        router.push("/survey/open-credit-lines");
    };

    return (
        <MotionContainer>
            <h2 className="heading">
                Do you have a 2-year income history and can it be documented?
            </h2>
            <div className="element-container">
                <button
                    onClick={() => handleIncomeHistorySelection("Yes, of course")}
                    className="button"
                >
                    Yes, of course
                </button>
                <button
                    onClick={() => handleIncomeHistorySelection("No, I don't have it")}
                    className="button"
                >
                    No, I don't have it
                </button>
            </div>
        </MotionContainer>
    );
}
