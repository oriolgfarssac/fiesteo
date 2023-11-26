import './wStyle.css';

const WelcomePage = () => {
    return (
        <div className="pSection">
            <div className="fSection">
                <img src="src\public_assets\logo.png" alt="" className="logoImg" />
            </div>
            <div className="sSection">
                <h1 className='title'>¡Bienvenido a Fiesteo!</h1>
                <h3 className="description">Conoce - Vive - Disfruta <br /><br /> ¡Fiesteo en Barcelona!</h3>
                <br />
                <button className='button'>Entra en Fiesteo</button>
            </div>
        </div>
    );
}

export default WelcomePage;
