"use client";

import TitleSlogan from "@/components/landing/TilteSlogan";
import ContainerWithBackground from "@/components/shared/ContainerWithBackground";

export default function Landing() {
  return (
    <div>
      <TitleSlogan />

      <ContainerWithBackground image="/banners/servicos.webp">
        Services we offer
      </ContainerWithBackground>

      <ContainerWithBackground image="/banners/profissionais.webp">
        Our History
      </ContainerWithBackground>

      <ContainerWithBackground image="/banners/clientes.webp">
        Our Clients
      </ContainerWithBackground>
    </div>
  );
}
