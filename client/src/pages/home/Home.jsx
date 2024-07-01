import React from 'react';
import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Chatbot from '../../components/chatbot/ChatBot'; // Ajusta la ruta según sea necesario

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className="banner">
                <h1>Bienvenido a FitnessApp</h1>
                <p>La Aplicación perfecta para lograr tus metas fitness</p>
            </div>
            <div className="mainContent">
                <section className="infoSection">
                <h1>¿Qué es el Fitness y para qué sirve?</h1>
                <p>
            El fitness se refiere a un estado de salud y bienestar físico. Es la capacidad de realizar
            actividades físicas diarias con vigor y sin fatiga excesiva, y tener energía para disfrutar
            de actividades de ocio y responder a emergencias.
          </p>
          <h4>Mejora la resistencia aeróbica</h4>
          <p>
            El fitness puede aumentar el desarrollo del sistema cardiorrespiratorio y en consecuencia,
            lograr una mayor resistencia aeróbica.
          </p>
          <h4>Fortalece la condición física</h4>
          <p>
            A través de movimientos que requieren mantener una tensión durante cierto tiempo, el fitness
            ayuda a trabajar la fuerza muscular y mejorar la condición física.
          </p>
          <img src="https://scontent.faep7-1.fna.fbcdn.net/v/t39.30808-6/278871359_280713160944577_5009160819087147071_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pbIdpbxEv6AQ7kNvgHGK7eF&_nc_ht=scontent.faep7-1.fna&oh=00_AYDwhC8HbEqQ-mTKabOVieAKdwK2Ueo81Lhp1O8ZIRX-Sw&oe=6682E87D" alt="Training Tips" />
                </section>
                <section className="infoSection">
                <h2>Beneficios del Fitness</h2>
          <p>
            Mejora la salud cardiovascular<br></br>
            Aumenta la fuerza y resistencia muscular<br></br>
            Ayuda a mantener un peso saludable<br></br>
            Mejora la salud mental y el estado de ánimo<br></br>
            Reduce el riesgo de enfermedades crónicas
          </p>
                    <img src="https://scontent.faep7-1.fna.fbcdn.net/v/t1.6435-9/49326579_1146212112207828_2841575518657052672_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0327a3&_nc_ohc=1wEw_OqeTUMQ7kNvgG7EoR8&_nc_ht=scontent.faep7-1.fna&oh=00_AYAo1KUldf3rK7DKyP_6z7vTqWzpz9wphlvFuUl5yudFdA&oe=66A46001" alt="Training Tips" />
                </section>
                <section className="infoSection" id='ult'>
                    <h2>Nutrición Saludable</h2>
                    <p>Una dieta balanceada es crucial para alcanzar tus metas fitness. Asegúrate de incluir proteínas, carbohidratos y grasas saludables en tu dieta.</p>
                    <img src="https://www.tupediatraonline.com/consultas-frecuentes/wp-content/uploads/2017/03/alimentaci%C3%B3n-infantil-h%C3%A1bitos-saludables-actividad-f%C3%ADsica-sobrepeso-en-ni%C3%B1os-crecimiento-infantil-percentiles-ni%C3%B1os-salud-infantil.jpg" alt="Healthy Nutrition" />
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
