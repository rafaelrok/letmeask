import { Link } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import LogoImg from '../assets/images/logo.svg'

import { Button } from '../components/Button';

import '../assets/styles/auth.scss'
import { useAuth } from '../hooks/useAuth';


export function NewRoom() {
    const { user } = useAuth();
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Perguntas e Respostas" />
                <strong>Crie Salas de Q&amp;A ao-vivo </strong>
                <p>Tire suas dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={LogoImg} alt="letmeask"/>
                    <h1>{ user?.name}</h1>
                    <br/>
                    <img src={ user?.avatar} alt="user"/>
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Criar Sala
                        </Button>
                    </form>
                    <p> Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}