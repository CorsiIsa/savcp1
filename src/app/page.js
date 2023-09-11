import { ParagrafoFotoIA } from "./components/paragrafo-ia";
import { BlocoFotoIA1 } from "./components/components-group/bloco-foto-ia-1";
import { BlocoFotoIA2 } from "./components/components-group/bloco-foto-ia-2";
import { BlocoFotoIA3 } from "./components/components-group/bloco-foto-ia-3";
import { BlocoFotoIA4 } from "./components/components-group/bloco-foto-ia-4";
import Image from "next/image";
import MeuBotao from "./components/meu-botao";
import { TituloTracoAzul } from "./components/components-group/titulo-traco-azul-ia";
import { LogoHeader } from "./components/components-group/logo-header";

export default function Home() {
  return (
    <main>
      <div>
          <LogoHeader
              srcPorto="images/logoporto (2).png"
              altPorto="Logo do Porto"
              srcSav="images/logosavfinal.png"
              altSav="Logo do Sav"
          />
      </div>


      <div>
          <TituloTracoAzul
              tituloText="Agora vamos lá, hora das fotos!"
              tracoSrc="/images/pincelada azul.png"
              tracoAlt="Descrição da Imagem"
          />
      </div>

      <ParagrafoFotoIA text="Para finalizar a primeira etapa do seu 
      Processo de Vistoria, precisamos de 4 
      fotos específicas da sua Bike." />

      <BlocoFotoIA1
        subtitulo="FOTO 1"
        texto="Uma foto do SELIM da sua Bike (banco)"
        linkHref="#"
        linkTexto="Anexar Arquivo"
        imagemSrc="/images/ai-banco.png"
        imagemAlt="Imagem Selim"
    />

      <BlocoFotoIA2
        subtitulo="FOTO 2"
        texto="Uma foto do GUIDÃO e PNEU DIANTEIRO da sua Bike"
        linkHref="#"
        linkTexto="Anexar Arquivo"
        imagemSrc="/images/ai-dianteiro.png"
        imagemAlt="Imagem Dianteiro"
    />

      <BlocoFotoIA3
        subtitulo="FOTO 3"
        texto="Uma foto do QUADRO da sua Bike"
        linkHref="#"
        linkTexto="Anexar Arquivo"
        imagemSrc="/images/ai-quadro.png"
        imagemAlt="Imagem Quadro da bicicleta"
    />

      <BlocoFotoIA4
        subtitulo="FOTO 4"
        texto="Uma foto do SISTEMA DE TRANSMISSÃO e do PNEU TRASEIRO da sua Bike"
        linkHref="#"
        linkTexto="Anexar Arquivo"
        imagemSrc="/images/ai-traseiro.png"
        imagemAlt="Imagem Quadro da bicicleta"
    />

      <MeuBotao text="Concluir Etapa 1"/>
      <MeuBotao text="Concluir Etapa 2"/>

    </main>
  );
}
