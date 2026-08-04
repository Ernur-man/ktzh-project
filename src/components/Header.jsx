import Logo from '../assets/logo_ktzh.svg'
import '../less/header.less'
import Search from './search'
import search from '../assets/search.svg'
import { useEffect, useState } from 'react'
export default function Header(){
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        const handleClick = (e) => {
            const target = e.target;

            if (
                target instanceof HTMLElement &&
                target.tagName.toLowerCase() === "div"
            ) {
                setIsClicked(false);
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);


    return(
        <>
        <header>
            {
                isClicked && <Search/>
            }
            <div className="container">
                <a href="/ktzh-project/"><img src={Logo} alt="logo" loading='lazy'/></a>
                <aside>
                    <img src={search} alt="search" onClick={()=>setIsClicked(true)} loading='lazy' />
                    <h2>KZ</h2>
                </aside>
            </div>
        </header>
        </>
    )
}
