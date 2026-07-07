import { useEffect, useState } from "react";
import ThemeService from "../../services/ThemeService";
import ThemeLabel from "../molecules/ThemeLabel";
import Button from "../atoms/Button";
function ThemePanel() {
    const [theme, setTheme] = useState(ThemeService.getTheme());
    useEffect(() => {
        ThemeService.attach(setTheme);
        return () => {
            ThemeService.detach(setTheme);
        };
    }, []);
    return (
        <div style={{ padding: "20px" }}>
            <ThemeLabel theme={theme} />

            <Button
                title="Toggle Theme"
                onClick={() => ThemeService.toggleTheme()}
            />
        </div>
    );
}
export default ThemePanel;