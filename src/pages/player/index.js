// import styles from "./player.css";
import styles from "./player.module.css";
import Banner from "components/banner";
import Titulo from "components/titulo";
import NaoEncontrada from "pages/nao_encontrada";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Player() {

    const { id } = useParams();

    const [video, setVideo] = useState();
    
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/poldosantiago/db_videos/videos/${id}`)
        .then(response => response.json())
        .then(dados => {
            setVideo(dados);
        });
        
    },[id]);

    if(!video){
        return <NaoEncontrada/>
    }

    return (
        <>
            <Banner imagem="player"/>
            <Titulo>
                <h1>Player</h1>
            </Titulo>

            <section className={styles.container}>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={video.link} 
                    title={video.titulo} 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                >
                </iframe>
            </section>
            
        </>
     );
}

export default Player;