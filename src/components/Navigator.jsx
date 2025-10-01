import '../less/navigator.less'
import underline from '../assets/underline.svg'

export default function Navigator(){
    return(
        <main className="navigator">
            <div className="container">
                <nav><h2>ОПАСНЫЕ ПРОИЗВОДСТВЕННЫЕ ОБЪЕКТЫ</h2></nav>
                <nav><h3><a href="#">ОБОРУДОВАНИЕ РАБОТАЮЩИЕ ПОДДАВЛЕНИЕМ</a></h3></nav>
                <nav><h3><a href="#">УСТРОЙСТВА И УСТАНОВКА ГРУЗОПОДЪЕМ-НЫХ КРАНОВ. ПОРЯДОК ПРОВЕДЕНИЯ ТЕХНИЧЕСКОГО ОСВИДЕТЕЛЬСТВОВАНИЯ</a></h3></nav>
                <nav><h3><a href="#">4. УСТРОЙСТВО И УСТАНОВКА ГРУЗОПОДЪЕМ-НЫХ КРАНОВ ПАРАГРАФ 19. ПОРЯДОК ПРОВЕ-ДЕНИЯ ТЕХНИЧЕСКИХ ОСВИДЕТЕЛЬСТВОВА-НИй ВНЕОЧЕРЕДНОЕ ПОЛНОЕ ТЕХНИЧЕСКОЕ ОСВИДЕТЕЛЬСТВОВАНИЕ ГРУЗОПОДЪЕМ- НЫХ КРАНОВ</a></h3></nav>
                <nav><h3><a href="#">ОЧЕРЕДНОЕ ПОЛНОЕ ТЕХНИЧЕСКОЕ ОСВИДЕ-ТЕЛЬСТВОВАНИЕ ГРУЗОПОДЪЕМНЫХ КРАНОВ</a></h3></nav>
            </div>
            <img src={underline} alt='line'/>
        </main>        
    )
}