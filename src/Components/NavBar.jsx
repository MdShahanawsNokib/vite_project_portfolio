import { useState, useEffect } from "react";
import { ClassN } from "../lib/utils";
import { Menu, X } from "lucide-react";

const navBarItems = [
    { name: 'Home', path: '/home' },
    { name: "Skills", path: '/skills' },
    { name: "Projects", path: '/projects' },
    { name: "Contact", path: '/contact' },
    { name: "Resume", path: '/resume' }
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            {/* desktop version navbar*/}
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
                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>
                {/* manue button */}
                <button onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {" "}
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    {" "}
                </button>

                {/* Mobile Version navbar */}
                <div className={ClassN("fixed inset-0 bg-background/95 backdroup-blur-md z-40 py-15 flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"

                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navBarItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.path}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                                {item.name}

                            </a>
                        ))}
                    </div>
                </div>





            </div>
        </nav>
    );
};