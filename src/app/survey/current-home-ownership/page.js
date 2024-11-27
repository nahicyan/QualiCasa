'use client';

import { useRouter } from "next/navigation";
import { useSurvey } from "@/app/context/SurveyContext";
import MotionContainer from "@/components/MotionContainer"; // Import the reusable MotionContainer component

export default function CurrentHomeOwnershipPage() {
    const router = useRouter();
    const { updateSurveyData } = useSurvey();

    // Function to handle selection of current home ownership
    const handleHomeOwnershipSelection = (ownershipStatus) => {
        updateSurveyData("current_home_ownership", ownershipStatus);
        console.log("Current Home Ownership: ", ownershipStatus);

        // Navigate based on selection
        if (ownershipStatus === "Yes. I currently own a home") {
            router.push("/survey/plan-to-sell-home");
        } else {
            router.push("/survey/current-on-all-payments");
        }
    };

    return (
        <MotionContainer>
            <h2 className="heading">
                Do you currently own a home?
            </h2>
            <div className="element-container">
                <button
                    onClick={() => handleHomeOwnershipSelection("Yes. I currently own a home")}
                    className="button"
                >
                    Yes. I currently own a home
                </button>
                <button
                    onClick={() => handleHomeOwnershipSelection("No. I am currently renting")}
                    className="button"
                >
                    No. I am currently renting
                </button>
                <button
                    onClick={() => handleHomeOwnershipSelection("No. I have other living arrangements")}
                    className="button"
                >
                    No. I have other living arrangements
                </button>
            </div>
        </MotionContainer>
    );
}
