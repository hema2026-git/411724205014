import { useEffect, useState } from "react";
import ThemeService from "../../services/ThemeService";
function Footer() {
    const [theme, setTheme] = useState(ThemeService.getTheme());
    useEffect(() => {
        ThemeService.attach(setTheme);
        return () => {
            ThemeService.detach(setTheme);
        };
    }, []);
    return (
        <div style={{
            padding: "20px",
            background: theme === "Light" ? "#ddd" : "#333",
            color: theme === "Light" ? "black" : "white"
        }}>
            Footer - Current Theme : {theme}

        </div>
    );
}
export default Footer;