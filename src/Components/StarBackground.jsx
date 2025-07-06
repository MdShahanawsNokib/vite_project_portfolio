import { useEffect, useState } from "react";

export const StarBackground = () => {

    //id, size, x, y, opacity, annimationDuration
    const [stars, setStars] = useState([]);

    //id, size, x, y, delay, annimationDuration
    const[meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();
        
        const handleResize = () => {
            generateStars();
        }
    //   return () =>  window.addEventListener("resize", "handleResize")
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
         setStars(newStars);  
    };


  //Meteor generate 
    const generateMeteors = () => {
        const numberOfMeteors= 4;
        const newMeteors = []

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                // Random size between 1 and 3
                x: Math.random() * 100,  // Random position in percentage
                y: Math.random() * 20,// Random position in percentage
                delay: Math.random() * 15, // Random opacity 15
                animationDuration: Math.random() * 3 + 3, // Random duration between 2 and 6 seconds
            })
        }
         setMeteors(newMeteors);  
    };

     // This component is intentionally left empty.
    // It serves as a placeholder for future background effects or animations.
    return (<div className="fixed inset-0 overflow-hidden pointer-event-none z-0">
        {stars.map((star) => (
         <div key={star.id} className="star animate-pluse-subtle" style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",


         }}/>
        ))}




        {meteors.map((meteor) => (
         <div key={meteor.id} className="meteor animate-meteor" style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",


         }}/>
        ))}
    </div>)

}