'use client';

import { useRouter } from "next/navigation";
import { useSurvey } from "../context/SurveyContext";
import MotionContainer from "@/components/MotionContainer"; 

export default function SurveyPage() {
    const router = useRouter();
    const { updateSurveyData } = useSurvey();

    // Function to handle button click for language selection
    const handleLanguageSelection = (language) => {
        updateSurveyData('language', language);

        if (language === "English") {
            router.push("/survey/property-price");
            console.log("Language: ", language);
        } else {
            alert("Currently, Spanish is not Supported");
        }
    };

    return (
        <MotionContainer>
            <h2 className="heading">
                Choose Your Language
            </h2>
            <div className="element-container">
                <button
                    onClick={() => handleLanguageSelection("English")}
                    className="button"
                >
                    English
                </button>
                <button
                    onClick={() => handleLanguageSelection("Spanish")}
                    className="button"
                >
                    Spanish
                </button>
            </div>
        </MotionContainer>
    );
}

