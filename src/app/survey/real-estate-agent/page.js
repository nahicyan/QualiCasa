'use client';

import { useRouter } from "next/navigation";
import { useSurvey } from "@/app/context/SurveyContext";
import MotionContainer from "@/components/MotionContainer";

export default function RealEstateAgentPage() {
    const router = useRouter();
    const { updateSurveyData } = useSurvey();

    // Function to handle selection of real estate agent option
    const handleRealEstateAgentSelection = (hasAgent) => {
        updateSurveyData('real_estate_agent', hasAgent);
        console.log("Real Estate Agent: ", hasAgent);

        // Redirect to the next page
        router.push("/survey/home-purchase-timing");
    };

    return (
        <MotionContainer>
            <h2 className="heading">
                Do you have a Real Estate Agent?
            </h2>
            <div className="element-container">
                <button
                    onClick={() => handleRealEstateAgentSelection("Yes")}
                    className="button"
                >
                    Yes
                </button>
                <button
                    onClick={() => handleRealEstateAgentSelection("No")}
                    className="button"
                >
                    No
                </button>
                <div style={{ marginTop: "20px" }}>
                <button
                    onClick={() => router.back()}
                    className="button-back"
                >
                    Back
                </button>
            </div>
            </div>
        </MotionContainer>
    );
}
