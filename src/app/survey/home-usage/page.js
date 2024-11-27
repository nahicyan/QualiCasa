'use client';

import { useRouter } from "next/navigation";
import { useSurvey } from "@/app/context/SurveyContext";
import MotionContainer from "@/components/MotionContainer";

export default function HomeUsagePage() {
    const router = useRouter();
    const { updateSurveyData } = useSurvey();

    // Function to handle the selection of a home usage option
    const handleHomeUsageSelection = (usage) => {
        updateSurveyData("home_usage", usage);
        console.log("Home Usage Answer: ", usage);

        // Redirect to the next page
        router.push("/survey/real-estate-agent");
    };

    return (
        <MotionContainer>
            <h2 className="heading">
                How will you use your new home?
            </h2>
            <div className="element-container">
            <button
                    onClick={() => handleHomeUsageSelection("Primary Residence")}
                    className="button"
                >
                    Primary Residence
                </button>
                <button
                    onClick={() => handleHomeUsageSelection("Secondary/Vacation Home")}
                    className="button"
                >
                    Secondary/Vacation Home
                </button>
                <button
                    onClick={() => handleHomeUsageSelection("Investment Property")}
                    className="button"
                >
                    Investment Property
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
