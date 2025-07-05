import { useEffect, useState } from "react";

export const StarBackground = () => {

    //id, size, x, y, opacity, annimationDuration
    const [stars, setStars] = useState([]);

    useEffect(() => {
        generateStars();
    }, []);


    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000 // Adjust the divisor to control star density
        );
        const newStars = []

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 2 + 1,
                // Random size between 1 and 3
                x: Math.random() * 100,  // Random position in percentage
                y: Math.random() * 100,// Random position in percentage
                opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1
                animationDuration: Math.random() * 4 + 2, // Random duration between 2 and 6 seconds
            })
        }
    }

    setStars(newStars);    // This component is intentionally left empty.
    // It serves as a placeholder for future background effects or animations.
    return <div>
    </div>;

}