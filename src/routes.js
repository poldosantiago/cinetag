import Cabecalho from "components/cabecalho";
import Container from "components/container";
import Rodape from "components/rodape";
import FavoritosProvider from "contextos/favoritos";
import Favoritos from "pages/favoritos";
import Inicio from "pages/inicio";
import NaoEncontrada from "pages/nao_encontrada";
import PaginaPadrao from "pages/pagina_base";
import Player from "pages/player";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return ( 
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<PaginaPadrao/>}>
                    <Route index element={<Inicio/>}></Route>
                    <Route path="favoritos" element={<Favoritos/>}></Route>
                    <Route path=":id" element={<Player/>}></Route>
                    <Route path="*" element={<NaoEncontrada/>}></Route>
                </Route>            
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;


//antes de aninhar as páginas, estava assim:
// eslint-disable-next-line
function AppRoutesAntesDeAninhar() {
    return ( 
        <BrowserRouter>
            <Cabecalho/>
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio/>}></Route>
                        <Route path="/favoritos" element={<Favoritos/>}></Route>
                        <Route path="/:id" element={<Player/>}></Route>
                        <Route path="*" element={<NaoEncontrada/>}></Route>
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape/>
        </BrowserRouter>
    );
}