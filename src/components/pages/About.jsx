import React, { useState, useEffect } from "react";

function About() {
  const [isDarkMode] = useState(() => {
    const keepTheme = localStorage.getItem("darkMode");
    return keepTheme === "true";
  });

  useEffect(() => {
    const img = isDarkMode
      ? "/images/about_us_darkMode.png"
      : "/images/about_us_whiteMode.png";
    const imgElement = document.getElementById("about");
    if (imgElement) {
      imgElement.src = img;
    }
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <section className="about">
      <div className="image">
        <img
          id="about"
          src={
            isDarkMode
              ? "/images/about_us_darkMode.png"
              : "/images/about_us_whiteMode.png"
          }
          alt=""
        />
      </div>
      <p>
        Bem Vindo à Oldschool, estúdio de Arte e loja de Graffiti, inaugurada há
        7 anos. O espaço oferece produtos de qualidade e dedica-se a projetos
        exclusivos para um público variado.
      </p>
      <p>
        O Nosso lema é colorir o mundo pois acreditamos que a arte transforma e
        une comunidades. Nesse sentido, somos pró-ativos em projetos artisticos,
        educativos e de entretenimento, com participações no Campeonato de Beat
        Box(2018), Festival PARQ, Projeto Mar(em diversas edições). Organizamos
        Workshops, produzimos e coordenamos Murais Graffiti para espaços
        públicos e privados.
      </p>
      <p>
        Oferecemos um ambiente descontraído onde a arte, o convívio, as cores e
        a boa disposição são a nossa marca. Na Oldschool podes explorar a tua
        criatividade e partilhar as tuas ideias com outros artistas.
      </p>
      <p>
        Se és um artista à procura de materiais de qualidade, um estudante à
        procura de inspiração ou apenas um curioso à procura de um lugar
        interessante para visitar, vem conhecer a Oldschool.
      </p>
      <p>
        Estamos ansiosos por te conhecer e partilhar a nossa paixão pela arte
        urbana.
      </p>
    </section>
  );
}

export default About;
