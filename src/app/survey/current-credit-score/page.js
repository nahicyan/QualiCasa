'use client';

import { useRouter } from "next/navigation";
import { useSurvey } from "@/app/context/SurveyContext";
import { useState } from "react";
import MotionContainer from "@/components/MotionContainer"; // Import reusable MotionContainer component

export default function CurrentCreditScorePage() {
    const router = useRouter();
    const { updateSurveyData, surveyData } = useSurvey();
    const [selectedChoice, setSelectedChoice] = useState(null);

    // Function to handle selecting a choice and automatically submitting
    const handleSelectChoice = (choice) => {
        setSelectedChoice(choice);

        // Update survey data
        updateSurveyData("current_credit_score", choice);

        // Retrieve the current value of disqualificationFlag
        let disqualificationFlag = surveyData.disqualificationFlag || false;

        // Update the disqualification flag based on the user's answer
        if (
            choice === "Below average (620-659)" ||
            choice === "Poor (580-619)" ||
            choice === "Bad (Below 580)"
        ) {
            disqualificationFlag = true; // Set flag to true if the credit score is poor or bad
        }

        // Update the disqualification flag in the survey context
        updateSurveyData("disqualificationFlag", disqualificationFlag);

        // Log the updated flag for debugging
        console.log("Current Credit Score: ", choice);
        console.log("Disqualification Flag: ", disqualificationFlag);

        router.push("/survey/liens-or-judgments");
    };

    return (
        <MotionContainer>
            <h2 className="heading">
                What is your current credit score?
            </h2>
            <div className="element-container">
                <button
                    onClick={() => handleSelectChoice("Excellent (720+)")}
                    className={`button ${selectedChoice === "Excellent (720+)" ? "selected" : ""}`}
                >
                    Excellent (720+)
                </button>
                <button
                    onClick={() => handleSelectChoice("Good (680-719)")}
                    className={`button ${selectedChoice === "Good (680-719)" ? "selected" : ""}`}
                >
                    Good (680-719)
                </button>
                <button
                    onClick={() => handleSelectChoice("Fair (660-679)")}
                    className={`button ${selectedChoice === "Fair (660-679)" ? "selected" : ""}`}
                >
                    Fair (660-679)
                </button>
                <button
                    onClick={() => handleSelectChoice("Below average (620-659)")}
                    className={`button ${selectedChoice === "Below average (620-659)" ? "selected" : ""}`}
                >
                    Below average (620-659)
                </button>
                <button
                    onClick={() => handleSelectChoice("Poor (580-619)")}
                    className={`button ${selectedChoice === "Poor (580-619)" ? "selected" : ""}`}
                >
                    Poor (580-619)
                </button>
                <button
                    onClick={() => handleSelectChoice("Bad (Below 580)")}
                    className={`button ${selectedChoice === "Bad (Below 580)" ? "selected" : ""}`}
                >
                    Bad (Below 580)
                </button>
                <button
                    onClick={() => handleSelectChoice("No Credit")}
                    className={`button ${selectedChoice === "No Credit" ? "selected" : ""}`}
                >
                    No Credit
                </button>
            </div>
            <div className="element-container">
                <button
                    onClick={() => router.back()}
                    className="button back-button"
                >
                    Back
                </button>
            </div>
        </MotionContainer>
    );
}
