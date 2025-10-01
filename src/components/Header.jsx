import Logo from '../assets/logo.svg'
import '../less/header.less'
import Search from './search'
export default function Header(){
    return(
        <>
        <header>
            <div className="container">
                <img src={Logo} alt="logo" />
                <aside>
                    <Search/>
                    <h2>KZ</h2>
                </aside>
            </div>
        </header>
        </>
    )
}