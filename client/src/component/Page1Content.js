import React, { Component } from 'react';
import { Jumbotron, Container} from 'reactstrap';

class Page1Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    }

  }

  render() {
    return (
      <div className="Page1Content" style={{ 'display': ((this.state.isVisible) ? 'block' : 'none') }}>
        <Container>
          <Jumbotron>
            <h1 className="display-3">El éxito de las culturas organizacionales basadas en conocimiento</h1>
            <p className="lead">La cultura organizacional es el ADN de la empresa. Este conjunto de creencias y valores compartido por el liderazgo y los colaboradores influye, en parte, en el éxito o el fracaso del negocio.

En la actualidad las culturas están pasando por un cambio estructural producto de la transformación tecnológica de las empresas.
Su generación ya no es espontánea. Hoy, las organizaciones crean sus culturas conscientemente. Son diseñadas hasta el más mínimo detalle. Y viven de la información.
Se les denominan culturas organizacionales basadas en conocimiento y funcionan como verdaderos repositorios de toda la data que genera el negocio. Desde la producción del bien o servicio hasta datos de los colaboradores recopilados en las evaluaciones de desempeño, toda información es valiosa.
Las razones que la hacen más exitosa y duradera que otros tipos de culturas organizacionales son: </p>
            <hr className="my-3" />
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          </Jumbotron>
          <Jumbotron>
            <h1 className="display-10">1. Mayor autoconciencia</h1>
            <p className="lead">Una cultura organizacional que fomenta un conocimiento acabado e integral de toda la información asociada a la empresa, permite al liderazgo conocer en profundidad cómo funciona la gestión operativa, financiera, de recursos humanos, capital humano y el riesgo del negocio.
Al haber un mejor entendimiento de cómo opera la empresa, sus fortalezas y debilidades, oportunidades y amenazas, la plana mayor del negocio puede enfocarse en mejorar las falencias del negocio, potenciar las buenas prácticas de la gestión y traspasar el conocimiento hacia otras áreas de la empresa.
No obstante, esta autoconciencia también funciona en la base de la empresa, con colaboradores y encargados de área entregando retroalimentación en base al conocimiento generado, que fluye hacia los liderazgos.</p>
            <hr className="my-3" />
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          </Jumbotron>

          <Jumbotron>
            <h1 className="display-10">2. Mejora continua </h1>
            <p className="lead">Al haber una mayor autoconciencia de cómo funciona el negocio y por qué, tanto el liderazgo como la plana de trabajadores de la empresa aprecia más la información de calidad.



Esto conlleva una mejora continua de la calidad de los datos de la empresa, incluyendo:

Captura y almacenamiento más eficientes del conocimiento
Protección efectiva de estos datos
Promover mayor exactitud y relevancia de los datos
Proteger la integridad de la información
Una clasificación útil de los datos
Fortalecer la entrega de datos y la confidencialidad de éstos
Maximizar el valor de los datos para la gestión de personas y toma de decisiones
</p>
            <hr className="my-3" />
            <p className="lead">T.</p>
          </Jumbotron>

          <Jumbotron>
            <h1 className="display-10">3. Toma de decisiones actualizadas </h1>
            <p className="lead">Gracias al valor que se le da al conocimiento, los líderes y colaboradores de la empresa están al tanto de todo el devenir del negocio.



Al haber un reconocimiento y gestión de la información que se genera en el ambiente interno de la organización, se reducen o eliminan los errores, redundancias e inconsistencias que surgen por el tradicional aislamiento y fragmentación de las áreas de trabajo, los famosos silos laborales.



Esta actualización permite a los tomadores de decisión adoptar acciones pertinentes y efectivas para la organización. Asimismo, empodera a los colaboradores a negociar beneficios laborales acordes con la realidad financiera de la empresa.</p>
            <hr className="my-3" />
            <p className="lead">T.</p>
          </Jumbotron>
          <Jumbotron>
            <h1 className="display-10">4. Hay un auspiciador de la información</h1>
            <p className="lead">En las culturas organizacionales que valoran el conocimiento, existe uno o más sponsor o auspiciador de datos que determina los objetivos de la gestión de información interna, y cómo estos se alinean con la estrategia corporativa.



Con esto se evita el traslape de información y roles, y el traspaso de responsabilidades; sin un papel claro, se convierte en el “problema de alguien más”.



Estos auspiciadores o agentes promotores conocen bien el negocio y sus procesos internos, y manejan con perspectiva la gestión de la empresa, la cultura organizacional, los recursos humanos, y las políticas y normas útiles para capturar, almacenar y difundir estos datos..</p>
            <hr className="my-3" />
            <p className="lead">T.</p>
          </Jumbotron>
        </Container>
      </div>

    );
  }
}

export default Page1Content;
