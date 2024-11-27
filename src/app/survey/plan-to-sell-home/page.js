'use client';

import { useRouter } from "next/navigation";
import { useSurvey } from "@/app/context/SurveyContext";
import MotionContainer from "@/components/MotionContainer"; // Import reusable MotionContainer component

export default function PlanToSellHomePage() {
    const router = useRouter();
    const { updateSurveyData } = useSurvey();

    // Function to handle selection for "Plan to Sell Home"
    const handlePlanToSellHomeSelection = (choice) => {
        updateSurveyData("plan_to_sell_home", choice);
        console.log("Plan to sell home: ", choice);

        // Redirect to the next page
        router.push("/survey/current-on-all-payments");
    };

    return (
        <MotionContainer>
            <h2 className="heading">
                Do you plan to sell your home?
            </h2>
            <div className="element-container">
                <button
                    onClick={() => handlePlanToSellHomeSelection("Yes")}
                    className="button"
                >
                    Yes
                </button>
                <button
                    onClick={() => handlePlanToSellHomeSelection("No")}
                    className="button"
                >
                    No
                </button>
            </div>
        </MotionContainer>
    );
}
