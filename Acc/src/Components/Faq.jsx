
import Accordion from "./Accordion"
import Data from "../Data.json"

export default function Faq(){
    
    return(
    <div>
        <h1>FAQ'S</h1>
        {Data.Faqs.map((obj,index)=>{
            return(<Accordion key={index} qna={obj}/>)}    //herre qna assigned to object
       ) }
        
    </div>
    )
}