import { ArrowUp } from "lucide-react";

// Footer section of the website
export const FooterSection = () => {
    return (
        <footer className="py-5 relative border-t mt-12 pt-8 flex flex-wrap justify-center items-center">

            {/* Copyright text */}
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Md Shahanaws Nokib. All rights reserved.
            </p>
        </footer>
    );
};
