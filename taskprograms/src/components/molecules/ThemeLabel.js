import Text from "../atoms/Text";
function ThemeLabel({ theme }) {
    return (
        <Text value={"Current Theme : " + theme} />
    );
}
export default ThemeLabel;