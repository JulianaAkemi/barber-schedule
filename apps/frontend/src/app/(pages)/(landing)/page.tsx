"use client";

import OurClients from "@/components/client/OurClients";
import Employees from "@/components/employee/Employees";
import TitleSlogan from "@/components/landing/TilteSlogan";
import ContainerWithBackground from "@/components/shared/ContainerWithBackground";
import OurServices from "@/components/task/OurServices";

export default function Landing() {
  return (
    <>
      <TitleSlogan />

      <ContainerWithBackground image="/banners/servicos.webp">
        <OurServices />
      </ContainerWithBackground>

      <ContainerWithBackground image="/banners/profissionais.webp">
        <Employees />
      </ContainerWithBackground>

      <ContainerWithBackground image="/banners/clientes.webp">
        <OurClients />
      </ContainerWithBackground>
    </>
  );
}
