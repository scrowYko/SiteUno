import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const navigate = useNavigate();

    return (
        <>
            <div id="Box">
                <div id="titulo" >
                    <h1>UNO</h1>
                </div>
            </div>

            <div id="boxL" >
                <ul>
                    <li onClick={() => navigate('/Cjogar')}>Como Jogar</li>
                    <li onClick={() => navigate('/Sobre')}>Sobre</li>
                    <li onClick={() => navigate('/Regras')}>Regras</li>
                </ul>
            </div>
        </>
    )
}