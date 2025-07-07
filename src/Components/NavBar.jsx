import { useState, useEffect } from "react";
import { ClassN } from "../lib/utils";

const navBarItems = [
    { name: 'Home', path: '/home' },
    { name: "Skills", path: '/skills' },
    { name: "Projects", path: '/projects' },
    { name: "Contact", path: '/contact' },
    { name: "Resume", path: '/resume' }
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={ClassN(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between px-6">
                <a className="text-xl font-bold flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">
                            Nokib's{" "}
                        </span>
                        Portfolio
                    </span>
                </a>

                <div className="hidden md:flex space-x-8 text-lg font-medium pr-15">
                    {navBarItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.path}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};