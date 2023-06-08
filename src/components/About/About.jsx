import React from "react";
import "./About.css"

function About() {
    return (
      <div>
        <div className="personal-info">
          <h2>Información personal</h2>
          <p>
            <span className="label">Nombre:</span>{" "}
            <span className="value">Santiago</span>
            <p>
            <span className="label">Apellido:</span>{" "}
            <span className="value">Gómez Tartaglino</span>
            </p>
          </p>
          <p>
            <span className="label">Edad:</span>{" "}
            <span className="value">19 años</span>
          </p>
          <p>
            <span className="label">Correo electrónico:</span>{" "}
            <span className="value">santugomezt@gmail.com</span>
          </p>
        </div>
  
        <div className="description">
          <h2>Breve descripción</h2>
          <p>Tengo 19 años, soy oriundo de Posadas, Mnes. Argentina, pero al momento de nacer, me vine a <br/> vivir a Paso de los Libres, provincia de Corrientes</p>
          <p>
            Me recibí del secundario con 18 años en el 2021, con una pandemia de
            por medio, fue algo <br/> raro y quizás no tan lindo como me hubiese gustado
            que haya sido mi último año lectivo.
          </p>
          <p>Actualmente me encuentro estudiando la carrera de Programación en Soy Henry.</p>
          <p>
            Creo que lo que me llevó a inclinarme y decidirme por estudiar esta
            carrera fue el encanto <br/> que me genera aprender, tanto así como la
            tecnología y sus avances tan agigantados y futuristas. <br/> Algo que jugó
            un papel importante en mi decisión fue tener referencias (positivas)
            sobre este <br/> Bootcamp, por parte de allegados a mí. No lo voy a negar,
            también me vi cautivado por los salarios <br/> que, por lo general, tienen
            los trabajos relacionados al Desarrollo de Software.
          </p>
        </div>
      </div>
    );
  }

export default About;