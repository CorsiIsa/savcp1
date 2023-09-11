"use client"
import styled from 'styled-components';

const BlocoFotoIA1Container = styled.div`
    display: flex;
    align-items: flex-start; /* Alinhar os elementos verticalmente no topo */
    margin: 0.5em;
    padding: 1.5em;
`;

const TextoContainer = styled.div`
    flex: 1;
    margin-right: 1em;
`;

const Subtitulo = styled.h2`
    font-size: 1rem;
    color: #373737;
    margin: 0;
    font-weight: 700;
    line-height: normal;
    text-align: left;
    margin-bottom: 0.5em; 
`;

const TextoIA = styled.p`
    font-size: 0.875rem;
    color: #373737;
    font-style: normal;
    font-weight: 300;
    text-align: left;
    white-space: pre-line; 
    margin-bottom: 0.5em; 
    }
`;

const PalavraEmDestaque = styled.span`
    font-weight: 700;
    color: #01a1fd;
`;

const Link = styled.a`
    font-size: 0.875rem;
    color: #0349D0;
    text-decoration: underline;
    font-style: normal;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 0.5em; /* Adicionar margem inferior para espaçamento */

    &:hover {
        text-decoration: underline;
    }
`;

const ImagemPrincipal = styled.img`
    max-width: 50%;
    height: auto;
    border-radius: 8px;
    border: 2px solid rgba(0, 0, 0, 0.20);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
`;

export function BlocoFotoIA1({ subtitulo, texto, linkHref, linkTexto, imagemSrc, imagemAlt }) {
    return (
        <BlocoFotoIA1Container>
        <TextoContainer>
            <Subtitulo>{subtitulo}</Subtitulo>
            <TextoIA>
            {texto.split('<br />').map((line, index) => (
                <span key={index}>
                {line.includes('SELIM') ? (
                    <>
                    {line.split('SELIM')[0]}
                    <PalavraEmDestaque>SELIM</PalavraEmDestaque>
                    {line.split('SELIM')[1]}
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
        </BlocoFotoIA1Container>
    );
}
