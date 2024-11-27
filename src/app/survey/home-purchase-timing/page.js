'use client';

import { useRouter } from "next/navigation";
import { useSurvey } from "@/app/context/SurveyContext";
import MotionContainer from "@/components/MotionContainer"; // Import the reusable MotionContainer component

export default function HomePurchaseTimingPage() {
    const router = useRouter();
    const { updateSurveyData } = useSurvey();

    // Function to handle selection of home purchase timing
    const handleHomePurchaseTimingSelection = (timing) => {
        updateSurveyData("home_purchase_timing", timing);
        console.log("Home Purchase Timing:", timing);

        // Redirect to the next page
        router.push("/survey/current-home-ownership");
    };

    return (
        <MotionContainer>
            <h2 className="heading">
                When are you planning to make your home purchase?
            </h2>
            <div className="element-container">
                <button
                    onClick={() => handleHomePurchaseTimingSelection("Immediately: I have a signed purchase agreement")}
                    className="button"
                >
                    Immediately: I have a signed purchase agreement
                </button>
                <button
                    onClick={() => handleHomePurchaseTimingSelection("ASAP: I have found a house / Offer pending")}
                    className="button"
                >
                    ASAP: I have found a house / Offer pending
                </button>
                <button
                    onClick={() => handleHomePurchaseTimingSelection("Within 30 Days")}
                    className="button"
                >
                    Within 30 Days
                </button>
                <button
                    onClick={() => handleHomePurchaseTimingSelection("2-3 Months")}
                    className="button"
                >
                    2-3 Months
                </button>
                <button
                    onClick={() => handleHomePurchaseTimingSelection("3-6 months")}
                    className="button"
                >
                    3-6 Months
                </button>
                <button
                    onClick={() => handleHomePurchaseTimingSelection("6+ months")}
                    className="button"
                >
                    6+ Months
                </button>
                <button
                    onClick={() => handleHomePurchaseTimingSelection("I don't know")}
                    className="button"
                >
                    I don't know
                </button>
            </div>
        </MotionContainer>
    );
}
