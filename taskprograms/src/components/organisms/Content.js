import { useEffect, useState } from "react";
import ThemeService from "../../services/ThemeService";
function Content() {
    const [theme, setTheme] = useState(ThemeService.getTheme());
    useEffect(() => {
        ThemeService.attach(setTheme);
        return () => {
            ThemeService.detach(setTheme);
        };
    }, []);
    return (
        <div
            style={{
                padding: "40px",
                backgroundColor:
                    theme === "Light" ? "white" : "black",
                color:
                    theme === "Light" ? "black" : "white"
            }}
        >
            <h2>Content Area</h2>
            <p>
                This content changes according to the selected theme.
            </p>
        </div>
    );
}
export default Content;