import style from "../../components/header/header.module.css"
import LogoMenu from "../../assets/img/logo-menu.svg"

const Header = () =>{
    return (
        <header className={style.header}>
            <div className={style.HeaderWrapper}>
                <div className={style.logo}>
                    <img src={LogoMenu} alt="" />
                </div>
           
            <nav className={style.nav}>
                <a href="#">Home</a>
                <a href="#">Serviços</a>
                <a href="#">Recurso</a>
                <a href="#">Produto</a>
                <a href="#">Depoimento</a>
                <a href="#">FAQ</a>
                <button className={style.buttonmenuL}>Login</button>
                <button className={style.buttonmenuR}>Registro</button>
            </nav>
            </div>
        </header>
    );
};

export default Header;