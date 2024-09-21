import React, { useCallback, useEffect } from 'react'
import "./mainpage.css"
import sendImage from "./assert/send-mail.png"
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from 'react';
import RandomButtons from './RandomButtons';
import "./randomButtons.css"



function MainPage() {

    const [paraText,setParaText] = useState("")
    const [inputValue,setInputValue] = useState("")
    const [firstState,setFirstState] = useState({});
    const [secondState,setSecondState] = useState({});
    const [thirdState,setThirdState] = useState({});
    const [fourthState,setFourthState] = useState({});
    // Условие отображение randomКнопок
    const [showState,setShowState] = useState(true)

    const inputHanlder =(e)=>{
        setInputValue(e.target.value)
    }
    const API_KEY = "AIzaSyCGfhgIDX4aLB3BUnCPzCacFZGFguepumg"
    const genAi = new GoogleGenerativeAI(API_KEY)
    const startButton = ()=>{
        const API_KEY = "AIzaSyCGfhgIDX4aLB3BUnCPzCacFZGFguepumg"
        const genAi = new GoogleGenerativeAI(API_KEY);
    
        const model = genAi.getGenerativeModel({model:"gemini-1.5-flash"});
        const prompt = inputValue;
        clearForm()
        model.generateContent(prompt).then(messages =>{
            const text = messages.response.text()
            const result = text.replace(/\*/g," ")
            setParaText(result)
                // Условие отображение randomКнопок
            setShowState(false)

    
    
        })
    }

    const keyButton = (event)=>{
        if(event.key === "Enter" && !event.shiftKey){
            event.preventDefault()
            startButton()
        }

    }

    const clearForm = ()=>{
        setInputValue("")
    }
    
    const firstItems = [
        {title:"Список вопросов",text:"У меня будет собеседование на вакансию SMM-менеджера, так что я хочу подготовиться.Представь, что ты - профессиональный HR, мастер по поиску именно таких специалистов. Ты отлично знаешь, какие вопросы чаще всего задают кандидатам, и как на них отвечать.Составь для меня список этих вопросов."},
        {title:"Как развить Youtube-Канал",text:"Я ютубер и снимаю ролики про то, как научиться играть на фортепиано.На моём канале 100 подписчиков и в среднем у меня 1 000 просмотров в месяц. Самое популярное из моих видео набрало 10 000 просмотров.Как мне увеличить число просмотров?Вы ютуб-эксперт и уже помогли многим людям раскрутить свои каналы.."},
        {title:"Как работает ИИ",text:"Расскажи мне, как работает искусственный интеллект подробно. Какие основные принципы и алгоритмы используются?        "},
        {title:"Языки для ИИ",text:"Назови языки, которые наиболее популярны в сфере ИИ, и объясни, почему они эффективны."},
        {title:"Первый проект на Python",text:"Поделись пошаговой инструкцией по созданию простого проекта на Python для начинающего."},
        {title:"Сбалансированный рацион",text:"Расскажи о принципах сбалансированного питания и дай советы по включению различных групп продуктов."},
    ]

    const secondItems = [
        {title:"Фильмы в жанре sci-fi",text:"Назови несколько современных фильмов в жанре научной фантастики и объясни, что в них особенно интересного."},
        {title:"Эффективное планирование",text:"Поделись методами и инструментами, которые помогут организовать время более продуктивно."},
        {title:"Основы машинного обучения",text:"Объясни, что такое машинное обучение и как оно применяется в различных областях."},
        {title:"Программы для анализа данных",text:"Какие программы и библиотеки наиболее популярны для анализа данных и почему?"},
        {title:"Упражнения для начинающих",text:"Какие программы и библиотеки наиболее популярны для анализа данных и почему?"},
        {title:"Программы для анализа данных",text:"Какие упражнения лучше всего подходят для людей, которые только начинают заниматься спортом?"},
    ]

    const thirdItems = [
        {title:"Рекомендации по книгам",text:"Назови несколько книг о технологиях, которые стоит прочитать, и кратко опиши их содержание."},
        {title:"Как улучшить концентрацию",text:" Какие техники и методы помогут повысить уровень концентрации и продуктивности?"},
        {title:"Что такое глубокое обучение",text:"Объясни, что такое глубокое обучение и как оно отличается от других методов машинного обучения."},
        {title:"Примеры использования ИИ",text:"Приведи примеры успешного применения искусственного интеллекта в бизнесе и повседневной жизни."},
        {title:"Советы по изучению Python",text:"Как быстро и эффективно выучить Python? Поделись полезными ресурсами и практическими советами."},
        {title:"Питание для энергии",text:"Какие продукты помогут поддерживать высокий уровень энергии в течение дня?"},
    ]

    const fourthItems = [
        {title:"Фильмы о технологиях",text:"Назови интересные фильмы о технологиях, которые стоит посмотреть, и почему они вдохновляют."},
        {title:"Тайм-менеджмент",text:"Какие методы тайм-менеджмента помогут организовать рабочий день?"},
        {title:"Введение в веб-разработку",text:"Как начать изучать веб-разработку? Поделись основными шагами."},
        {title:"Здоровые перекусы",text:"Какие здоровые перекусы можно взять с собой на работу или учебу?"},
        {title:"Книги по саморазвитию",text:" Назови несколько лучших книг по саморазвитию и кратко расскажи о каждой."},
        {title:"Как избежать прокрастинации",text:"Какие советы помогут справиться с прокрастинацией и повысить продуктивность?"},
    ]
    useEffect(()=>{
    const firstRandomText = Math.floor(Math.random() * firstItems.length);
    const firstRandomResult = firstItems[firstRandomText]
    const firstTitle = firstRandomResult.title
    const firstText = firstRandomResult.text

    const secondRandomText = Math.floor(Math.random()*secondItems.length);
    const secondRandomResult = secondItems[secondRandomText]
    const secondTitle = secondRandomResult.title
    const secondText = secondRandomResult.text

    const thirdRandomText = Math.floor(Math.random()* thirdItems.length);
    const thirdRandomResult = thirdItems[thirdRandomText]
    const thirdTitle = thirdRandomResult.title
    const thirdText = thirdRandomResult.text

    const fourthRandomText = Math.floor(Math.random()* fourthItems.length);
    const fourthRandomResult = fourthItems[fourthRandomText]
    const fourthTitle = fourthRandomResult.title
    const fourthText = fourthRandomResult.text

    setFirstState({firstTitle,firstText});
    setSecondState({secondTitle,secondText});
    setThirdState({thirdTitle,thirdText});
    setFourthState({fourthTitle,fourthText});
    },[])


    const firstRandom = useCallback(()=>{
        setInputValue(firstState.firstText)
    },[firstState.firstText])


    const secondRandom = useCallback(()=>{
        setInputValue(secondState.secondText)
    },[secondState.secondText])

    const thirdRandom = useCallback(()=>{
        setInputValue(thirdState.thirdText)
    },[thirdState.thirdText])

    const fourthRandom = useCallback(()=>{
        setInputValue(fourthState.fourthText)
    },[fourthState.fourthText])

    const codeTest = async()=>{
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({
          model: 'gemini-1.5-pro',
          tools: [
            {
              codeExecution: {},
            },
          ],
        });
        
        const result = await model.generateContent(
          'What is the sum of the first 50 prime numbers? ' +
            'Generate and run code for the calculation, and make sure you get all 50. in javascript',
        );
        
        const response = result.response;
    }

      
  return (

    <>
        {/* // Условие отображение randomКнопок */}
    {showState && (
        <div className='random-buttons'>
        <RandomButtons name={firstState.firstTitle} click={firstRandom}/>
        <RandomButtons name={secondState.secondTitle} click={secondRandom}/>
        <RandomButtons name={thirdState.thirdTitle} click={thirdRandom}/>
        <RandomButtons name={fourthState.fourthTitle} click={fourthRandom}/>
    </div>
    )}
    
    <div className='main-div'>
        <p className='para'>{paraText}</p>
    </div>
    <div className='input-btn'>
        <div className='textarea'>
            <textarea onChange={inputHanlder} value={inputValue} onKeyDown={keyButton}></textarea>
            <button className='btn-image' onClick={startButton} type='button'><img src={sendImage}/></button>
        </div>
        <div className='button-div'>
            <button className='button-visible'></button>
        </div>
    </div>
    </>

  )
}

export default MainPage