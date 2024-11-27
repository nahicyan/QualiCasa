'use client';

import { useSurvey } from "@/app/context/SurveyContext";
import { useRouter } from "next/navigation";
import MotionContainer from "@/components/MotionContainer"; // Import reusable MotionContainer component

export default function EmploymentStatusPage() {
    const router = useRouter();
    const { updateSurveyData } = useSurvey();

    // Function to handle employment status selection
    const handleEmploymentStatusSelection = (status) => {
        updateSurveyData("employment_status", status);
        console.log("Employment Status is: ", status);

        // Handle different employment statuses using a switch-case statement
        switch (status) {
            case "Employed":
                router.push("/survey/verify-income-employed");
                break;

            case "Self-Employed 1099":
                router.push("/survey/verify-income-self-employed");
                break;

            case "Not Employed":
                router.push("/survey/verify-income-not-employed");
                break;

            case "Retired":
                router.push("/survey/verify-income-retired");
                break;

            default:
                console.log("Invalid employment status selected.");
        }
    };

    return (
        <MotionContainer>
            <h2 className="heading">
                What is your current employment status?
            </h2>
            <div className="element-container">
                <button
                    onClick={() => handleEmploymentStatusSelection("Employed")}
                    className="button"
                >
                    Employed
                </button>
                <button
                    onClick={() => handleEmploymentStatusSelection("Not Employed")}
                    className="button"
                >
                    Not Employed
                </button>
                <button
                    onClick={() => handleEmploymentStatusSelection("Self-Employed 1099")}
                    className="button"
                >
                    Self-Employed 1099
                </button>
                <button
                    onClick={() => handleEmploymentStatusSelection("Retired")}
                    className="button"
                >
                    Retired
                </button>
            </div>
        </MotionContainer>
    );
}
