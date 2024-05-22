import style from "../conteudo1/conteudo1.module.css";
import imagem1 from "../../assets/img/hero.svg";
import miniimg1 from "../../assets/img/logo-1.svg";
import miniimg2 from "../../assets/img/logo-2.svg"

const Conteudo1 = () => {
  return (
    <section className={style.section1}>
      <div className={style.wrapper}>
        <div className={style.txt}>
          <h2 className={style.H21}>Lições e insights de</h2>
          <h2 className={style.H22}>8 anos</h2>
          <p>
            Onde expandir seu negócio como fotógrafo: site ou mídia social?
            Registro
          </p>
          <button className={style.buttonR}>Registro</button>
        </div>
        <div className={style.imagem1}>
          <img src={imagem1} alt="" />
        </div>
        <div className={style.conteudo1fim}>
          <h2>Nossos clientes</h2>
          <p>Temos trabalhado com alguns clientes da Fortune 500+</p>
        </div>
        <div className={style.miniimgs}>
          <img src={miniimg1} alt="" />
          <img src={miniimg2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Conteudo1;
