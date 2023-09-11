"use client"
import React from 'react';
import styled from 'styled-components';

// Estilos para o container principal do LogoHeader
const Container = styled.div`
    display: flex; /* Ativa o layout flexível */
    align-items: center; /* Alinha verticalmente os elementos ao centro */
    justify-content: space-between; /* Coloca espaço entre os elementos */
    padding: 1em; /* Adiciona margem de 1em nas laterais */
`;

// Estilos para a imagem do LogoPorto
const ImagemPorto = styled.img`
    max-width: 50%;
    height: auto;
`;

// Componente para o LogoPorto
export function LogoPorto({ src, alt }) {
    return <ImagemPorto src={src} alt={alt} />;
}

// Estilos para a imagem do LogoSav
const ImagemSav = styled.img`
    max-width: 30%;
    height: auto;
`;

// Componente para o LogoSav
export function LogoSav({ src, alt }) {
    return <ImagemSav src={src} alt={alt} />;
}

// Componente LogoHeader que compõe LogoPorto e LogoSav
export function LogoHeader({ srcPorto, altPorto, srcSav, altSav }) {
    return (
        <Container>
            <LogoPorto src={srcPorto} alt={altPorto} />
            <LogoSav src={srcSav} alt={altSav} />
        </Container>
    );
}
