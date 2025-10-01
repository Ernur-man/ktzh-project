import search from '../assets/search.svg'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Search(){
    const [isInput, setIsInput] = useState(null)
    const [value, setValue] = useState('')
    const [filteredList, setFilteredList] = useState([])
    const blenderLinks = [
        {
            title: "ОБОРУДОВАНИЕ РАБОТАЮЩИЕ ПОДДАВЛЕНИЕМ",
            link: "#"
        },
        {
            title: "УСТРОЙСТВА И УСТАНОВКА ГРУЗОПОДЪЕМ-НЫХ КРАНОВ. ПОРЯДОК ПРОВЕДЕНИЯ ТЕХНИЧЕСКОГО ОСВИДЕТЕЛЬСТВОВАНИЯ",
            link: "#"
        },
        {
            title: "4. УСТРОЙСТВО И УСТАНОВКА ГРУЗОПОДЪЕМ-НЫХ КРАНОВ ПАРАГРАФ 19. ПОРЯДОК ПРОВЕ-ДЕНИЯ ТЕХНИЧЕСКИХ ОСВИДЕТЕЛЬСТВОВА-НИй ВНЕОЧЕРЕДНОЕ ПОЛНОЕ ТЕХНИЧЕСКОЕОСВИДЕТЕЛЬСТВОВАНИЕ ГРУЗОПОДЪЕМ-НЫХ КРАНОВ",
            link: "#"
        },
        {
            title: "ОЧЕРЕДНОЕ ПОЛНОЕ ТЕХНИЧЕСКОЕ ОСВИДЕ-ТЕЛЬСТВОВАНИЕ ГРУЗОПОДЪЕМНЫХ КРАНОВ",
            link: "#"
        }
    ]

    useEffect(()=>{
        if (value.trim() === "") {
            setFilteredList([])
            return
        }
        const newList = blenderLinks.filter(e =>
            e.title.toLowerCase().includes(value.toLowerCase())
        )
        console.log(newList)
        setFilteredList(newList)
    },[value])
    return(
        <>
            <img src={search} alt="search" onClick={()=>setIsInput('works')}/>

           { 
            isInput && (
                <div className='search'>
                    <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
                </div>
            )
            }
        </>
    )
}