import { useHistory } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import LogoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button';

import '../assets/styles/auth.scss'

import { useAuth } from '../hooks/useAuth';


export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();


    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }
        history.push('/rooms/new');
    }

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
                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="Logo do google"/>
                        Crie sua sala com google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na Sala
                        </Button>
                    </form>
                </div>           
            </main>
        </div>
    )
}