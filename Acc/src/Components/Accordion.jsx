
import { useState } from "react"

export default function Accordion({qna}) {
    const[show,setShow]=useState(false)    //this helps to keep the content hiddden at first
    return(<div className="accordion">
       <h3> {qna.title} <span onClick={()=>setShow(!show)}>{show?'-':'+'}  </span>  </h3> 
       {show ? <p>{qna.content}</p> :""}
        </div>)
    
}