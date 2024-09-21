import { GoogleGenerativeAI } from "@google/generative-ai";
import sendImage from "./assert/send-mail.png"
import { useState } from "react";


function Coding(){

    const [inputValue,setInputValue] = useState("")
    const [paraText,setParaText] = useState("")
    const [codingInfo,setCodingInfo] = useState(true)

    const inputHanlder=(e)=>{
        setInputValue(e.target.value)
    }

    const clearForm =()=>{
        setInputValue("")
    }

    const codeTest = async()=>{
        const API_KEY = "AIzaSyCGfhgIDX4aLB3BUnCPzCacFZGFguepumg"
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({
          model: 'gemini-1.5-pro',
          tools: [
            {
              codeExecution: {},
            },
          ],
        });
        clearForm()
        const result = await model.generateContent(inputValue);
        
        const response = result.response.text()
        const filtered = response.replace(/\*/g," ")

        setParaText(filtered)
        setCodingInfo(false)
    }
    const keyboardTouching =(event)=>{
        if(event.key === "Enter" && !event.shiftKey){
            event.preventDefault()
            codeTest()
        }
    }

    return(
        <>
    {codingInfo && (
    <div>
        <span className="span-warning">🚀 Кодим по-серьезке! 🚀Этот раздел только для кодинга — тут обсуждаем вопросы, пишем код и прокачиваем навыки. Другие темы оставь за пределами! 🙅‍♂️Никакого спама, только хардкор. 🎯</span>
    </div>
    )}
   
    <div className='main-div'>
        <p className='para'>{paraText}</p>
    </div>
    <div className='input-btn'>
        <div className='textarea'>
            <textarea value={inputValue} onChange={inputHanlder} onKeyDown={keyboardTouching}></textarea>
            <button className='btn-image' type='button' onClick={codeTest}><img src={sendImage}/></button>
        </div>
        <div className='button-div'>
            <button className='button-visible'></button>
        </div>
    </div>
        </>
    )
}

export default Coding







