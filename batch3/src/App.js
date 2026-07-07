// import First from "./First";
// import Second from "./Second";
// import Parent from "./Parent";
// import Page from "./pages/Page";
// // import Heading from "./atoms/Heading";
// import Learn from "./Learn";

// export default function App() {
//     return (
//         <>
//         <Page/>
//         <First/>
//         <Second/>
//         <Parent/>
         
//         </>
//     );
// }
const fruits=["Apple","Banana","orange"];
function App(){
    return(
        <div>
            {
                fruits.map((fruit)=>(
                    <p key={fruit}>{fruit}</p>
                ))
            }
        </div>
    )
}
export default App