import search from '../assets/search.svg'
import { useState } from 'react'
import { useEffect } from 'react'
import '../less/modalSearch.less'

export default function Search(){
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
        setFilteredList(newList)
    },[value])
    return(
        <div className='modalSearch'>
            <article className="searchBlock">
                    <aside>
                            <div className='search'>
                                <img src={search} alt="search"/>
                                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
                            </div>
                    </aside>
                    <aside>
                           {
                                filteredList.length > 0 && (
                                <ul>
                                    {filteredList.map((el,i)=>(
                                    
                                        <li  key={i}>
                                            <a href={el.link}>{el.title}</a>
                                        </li>
                                    ))}
                                </ul>) 
                            }
                            {
                                filteredList.length === 0 && (
                                <ul>
                                    {blenderLinks.map((el,i)=>(
                                    
                                        <li  key={i}>
                                            <a href={el.link}>{el.title}</a>
                                        </li>
                                    ))}
                                </ul>) 
                            }
                    </aside>
            </article>
        </div>
    )
}