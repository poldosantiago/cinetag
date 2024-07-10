import style from './titulo.module.css';

function Titulo({children}) {
    return ( 
        <div className={style.texto}>
            {children}
        </div>
    );
}

export default Titulo;