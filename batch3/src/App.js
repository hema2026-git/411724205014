// import First from "./First";
// import Second from "./Second";
// import Parent from "./Parent";
// import Page from "./pages/Page";
// // import Heading from "./atoms/Heading";
import Leraning from "./Learn";
import {Add,Multiply,Divide} from './Math';
import { Routes,Route } from "react-router-dom";
import Navbar from "./Navbar";

export default function App() {
    return (
        <>
         
        <Navbar/>
        <Routes>
            <Route path='/Learn' element={<Leraning/>}/>
            <Route path='*' element={<h1>Incorrect path</h1>}/>
            <Route path="/Add" element={<Add/>}/>
            <Route path="/Multiply" element={<Multiply/>}/>
            <Route path="/Divide" element={<Divide/>}/>
        </Routes>
       
         
        </>
    );
}
// const fruits=["Apple","Banana","orange"];
// function App(){
//     return(
//         <div>
//             {
//                 fruits.map((fruit)=>(
//                     <p key={fruit}>{fruit}</p>
//                 ))
//             }
//         </div>
//     )
// }
// export default App