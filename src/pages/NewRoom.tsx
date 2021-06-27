import { Link, useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import illustrationImg from '../assets/images/illustration.svg'
import LogoImg from '../assets/images/Logo2.svg'

import { Button } from '../components/Button';

import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';




export function NewRoom() {
    const { user } = useAuth();
    const history = useHistory();
    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if (newRoom.trim() === '') {
            return;
        }

        const roomRef = database.ref('rooms');
        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        })
        history.push(`/rooms/${ firebaseRoom.key }`)

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
                    <img src={LogoImg} alt="letmeask" />
                    <div>
                        <img src={user?.avatar} alt="user" />
                        <h1>{user?.name}</h1>
                    </div>
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
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