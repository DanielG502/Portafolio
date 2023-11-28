import './Home.css'
import img from '../Img/image2.jpg'

const Home = () => {
    return (
        <div
            id='home'
            className='container home-container'>
            <div className='logo'>
                <div className='hover-show'>
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                </div>

                <img
                    className='image'
                    src={img}
                    alt=''
                />
            </div>

            <h2>
                <span>Sobre Mi</span> <br />
                {/* <p>
                    Soy un joven apasionado por la tecnologia y los Video
                    Juegos, durante estos últimos años me he estado preparado
                    para dar el salto esencial para despegar mi carrera como
                    desarrollador. Actualmente cuento con conocimientos
                    fundamentales sobre Front-End & Back-End, es por ello que
                    busco oportunidades que me permitan poder aplicar mis
                    conocimientos. estoy entusiasmado y preparado para dar lo
                    mejor de mi
                </p> */}
            </h2>

        </div>
    );
};

window.onload = () => {
    const toggle = document.querySelector('.hover-show');
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
    });
};
export default Home;
