"use client"
import styled from 'styled-components';

const BlocoFotoIA3Container = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 0.5em;
    padding: 1em;

    @media (min-width: 768px) {
        margin-right: 6em;
        margin-left: 2em;
    }

    @media (min-width: 1366px) {
        margin-right: 10em;
        margin-left: 4em;
    }
`;

const TextoContainer = styled.div`
    flex: 1;
    margin-right: 1em;
`;

const Subtitulo = styled.h2`
    font-size: 16px;
    color: #373737;
    margin: 0;
    font-weight: 700;
    line-height: normal;
    text-align: left;
    margin-bottom: 0.5em; 

    @media (min-width: 768px) {
        font-size: 20px;
    }

    @media (min-width: 1366px) {
        font-size: 24px;
    }
`;

const TextoIA = styled.p`
    font-size: 14px;
    color: #373737;
    font-style: normal;
    font-weight: 300;
    text-align: left;
    white-space: pre-line; 
    margin-bottom: 0.5em; 
    
    @media (min-width: 768px) {
        font-size: 18px;
    }

    @media (min-width: 1366px) {
        font-size: 22px;
    }
`;

const PalavraEmDestaque = styled.span`
    font-weight: 700;
    color: #01a1fd;
`;

const Link = styled.a`
    font-size: 14px;
    color: #0349D0;
    text-decoration: underline;
    font-style: normal;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 0.5em; /* Adicionar margem inferior para espaçamento */

    &:hover {
        text-decoration: underline;
    }

    @media (min-width: 768px) {
        font-size: 18px;
    }

    @media (min-width: 1366px) {
        font-size: 22px;
    }
`;

const ImagemPrincipal = styled.img`
    max-width: 170px;
    width: 100%
    height: auto;
    border-radius: 8px;
    border: 2px solid rgba(0, 0, 0, 0.20);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);

    @media (min-width: 768px) {
        max-width: 230px;
    }

    @media (min-width: 1366px) {
        max-width: 290px;
    }
`;

export function BlocoFotoIA3({ subtitulo, texto, linkHref, linkTexto, imagemSrc, imagemAlt }) {
    return (
        <BlocoFotoIA3Container>
        <TextoContainer>
            <Subtitulo>{subtitulo}</Subtitulo>
            <TextoIA>
            {texto.split('<br />').map((line, index) => (
                <span key={index}>
                {line.includes('QUADRO') ? (
                    <>
                    {line.split('QUADRO')[0]}
                    <PalavraEmDestaque>QUADRO</PalavraEmDestaque>
                    {line.split('QUADRO')[1]}
                    </>
                ) : line}
                <br />
                </span>
            ))}
            </TextoIA>
            {linkHref && linkTexto && (
            <Link href={linkHref} target="_blank" rel="noopener noreferrer">
                {linkTexto}
            </Link>
            )}
        </TextoContainer>
        {imagemSrc && imagemAlt && <ImagemPrincipal src={imagemSrc} alt={imagemAlt} />}
        </BlocoFotoIA3Container>
    );
}
