
import React from 'react';
import { Jumbotron } from 'reactstrap';

const Page1Content = (props) => {
  return (
    <div className="Page1Content">
      <Jumbotron>
        <h1 className="display-4">Seguridad y Salud en el Trabajo!</h1>
        <p className="lead">El desafío del Sistema de Seguridad Social a través
         de las Políticas de Seguridad y Salud en el Trabajo es prevenir disminuyendo
         o eliminando las fuentes de riesgos laborales y brindar de protección en todas
         aquellas situaciones que puedan romper el equilibrio físico, mental y/o social
          de un trabajador/a.</p>
        <hr className="my-4" />
        <p>Hasta ahora la Seguridad Laboral se ha centrado en prevenir y proteger
         a los trabajadores/as de los accidentes o enfermedades del trabajo, para
         esto se han generado distintos mecanismos legales imprescindibles para su
          protección, como el Reglamento sobre Condiciones Sanitarias y Ambientales
           Básicas en los Lugares de Trabajo, la Certificación de calidad de elementos
            de protección personal contra riesgos ocupacionales y el Seguro Social Obligatorio
             contra Accidentes del Trabajo y Enfermedades Profesionales, Ley 16.744, vigente hasta hoy.</p>
        <hr className="my-1" />
        <th>El trabajo sus condiciones y el tipo de empleo, repercuten en la protección e impactan en el sistema previsional.</th>

        <p> El Trabajo se constituye como un Derecho inalienable de las personas,
         junto al derecho a desarrollar un trabajo seguro, se focaliza hoy las orientaciones en que
         se elimine o reduzcan de manera significativa las fuentes de riesgos que están presentes en
          toda actividad laboral, por lo que es importante identificar dónde están.</p>

          <th>Los riesgos:</th> <p>Son la valoración de los peligros presentes en
          los lugares de trabajo, pueden encontrarse en las condiciones de seguridad,
           en el medio donde se desarrolla el trabajo, en la presencia de contaminantes
            químicos, físicos o biológicos, en la forma de organización o en la forma de
            cómo se lleva día a día la tarea, entre otros.</p>
      </Jumbotron>
    </div>
  );
};

export default Page1Content;
