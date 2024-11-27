'use client';

import { useSurvey } from "@/app/context/SurveyContext";
import { useRouter } from "next/navigation";
import MotionContainer from "@/components/MotionContainer"; // Import reusable MotionContainer component

export default function OpenCreditLinesPage() {
    const router = useRouter();
    const { updateSurveyData } = useSurvey();

    // Function to handle open credit lines selection
    const handleOpenCreditLinesSelection = (choice) => {
        updateSurveyData("open_credit_lines", choice);

        console.log("Credit Lines: ", choice);

        if (choice === "Yes, I do") {
            router.push("/survey/total-monthly-payments");
        } else {
            router.push("/survey/gross-annual-income");
        }
    };

    return (
        <MotionContainer>
            <h2 className="heading">
                Do you have any open credit lines on your credit report? (Car payment, credit card, etc.)
            </h2>
            <div className="element-container">
                <button
                    onClick={() => handleOpenCreditLinesSelection("Yes, I do")}
                    className="button"
                >
                    Yes, I do
                </button>
                <button
                    onClick={() => handleOpenCreditLinesSelection("No, I don't")}
                    className="button"
                >
                    No, I don't
                </button>
            </div>
        </MotionContainer>
    );
}
