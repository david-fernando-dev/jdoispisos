import styles from '../styles/Header.module.css'
import Image from 'next/image'

import logotipo from '../public/logotipo.png'

function Header(){
    return (
        <header className={styles.header}>
            <Image src={logotipo} alt="JJPisos" height={40} width={200}/>
            <nav>
                <a href="#">Início </a>
                <a href="#">Serviços </a>
                <a href="#">Formas de pagamento</a>
            </nav>
        </header>
    )
}

export default Header