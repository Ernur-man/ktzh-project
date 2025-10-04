import Logo from '../assets/logo.svg'
import '../less/header.less'
import Search from './search'
import search from '../assets/search.svg'
import { useState } from 'react'
export default function Header(){
    const [isClicked, setIsClicked] = useState(false)
    return(
        <>
        {
            isClicked && (
                <Search/>
            )
        }
        <header>
            <div className="container">
                <img src={Logo} alt="logo" />
                <aside>
                    <img src={search} alt="search" onClick={()=>setIsClicked(true)} />
                    <h2>KZ</h2>
                </aside>
            </div>
        </header>
        </>
    )
}