import Logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import '../less/header.less'
export default function Header(){
    return(
        <>
        <header>
            <div className="container">
                <img src={Logo} alt="logo" />
                <aside>
                    <img src={search} alt="Search" />
                    <h2>KZ</h2>
                </aside>
            </div>
        </header>
        </>
    )
}