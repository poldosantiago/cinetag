import Banner from 'components/banner';
import styles from './inicio.module.css';
import Card from 'components/card';
import Titulo from 'components/titulo';
import { useEffect, useState } from 'react';

function Inicio() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/poldosantiago/db_videos/videos')
        .then(response => response.json())
        .then(data => {
            setVideos(data);
        });

    },[]);

    return ( 
        <>
            <Banner imagem={"home"}/>
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>

            <section className={styles.container}>
                {videos.map(video => {
                    return <Card {...video} key={video.id}/>
                })}
            </section>
        </>
     );
}

export default Inicio;