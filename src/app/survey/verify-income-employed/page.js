'use client';

import { useSurvey } from "@/app/context/SurveyContext";
import { useRouter } from "next/navigation";
import MotionContainer from "@/components/MotionContainer"; // Import reusable MotionContainer component

export default function VerifyIncomeEmployedPage() {
    const router = useRouter();
    const { updateSurveyData, surveyData } = useSurvey();

    // Function to handle income verification selection
    const handleIncomeVerificationSelection = (choice) => {
        updateSurveyData("verify_income_employed", choice);

        // Determine if the user should be disqualified
        let disqualificationFlag = surveyData.disqualificationFlag || false;

        // Set disqualification flag to true if the user is unable to verify income
        if (choice === "I am unable to at the moment") {
            disqualificationFlag = true;
        }

        // Update the disqualification flag in the survey context
        updateSurveyData("disqualificationFlag", disqualificationFlag);

        // Log current state for debugging purposes
        console.log("Verify Income Employed: ", choice);
        console.log("Disqualification Flag: ", disqualificationFlag);

        // Navigate to the next step
        router.push("/survey/income-history");
    };

    return (
        <MotionContainer>
            <h2 className="heading">
                Can you verify your income and provide last year's W-2 and two most recent pay stubs?
            </h2>
            <div className="element-container">
                <button
                    onClick={() => handleIncomeVerificationSelection("Yes, I can")}
                    className="button"
                >
                    Yes, I can
                </button>
                <button
                    onClick={() => handleIncomeVerificationSelection("I am unable to at the moment")}
                    className="button"
                >
                    I am unable to at the moment
                </button>
            </div>
        </MotionContainer>
    );
}
