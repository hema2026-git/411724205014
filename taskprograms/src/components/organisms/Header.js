import { useEffect, useState } from "react";
import ThemeService from "../../services/ThemeService";
function Header() {
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
            <h2>Header - {theme} Theme</h2>
        </div>
    );
}
export default Header;