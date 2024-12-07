import { Container } from "@/components/Container";
import { FavoriteCard } from "./components/Favorite";
import Image from "next/image";
import { FaShareAlt } from "react-icons/fa";

import userImg from "../../../public/user.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meu perfil - Daly Games",
  description: "Perfil do jogador"
}

export default function Profile(){
  return(
    <main className="w-full text-black">
      <Container>
        <section className="mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row">
          <div className="w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal">
            <Image
              src={userImg}
              alt="Imagem de perfil do usuário"
              className="rounded-full w-56 h-56 object-cover"
            />

            <h1 className="font-bold text-2xl">Arisson Lima</h1>
          </div>

          <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-center mt-2">
            <button className="bg-gray-700 px-4 py-3 rounded-lg text-white">Configurações</button>
            <button className="bg-gray-700 px-4 py-3 rounded-lg"><FaShareAlt size={24} color="#FFFFFF"/></button>
          </div>
        </section>

        <section className="flex flex-wrap gap-5 flex-col md:flex-row">
          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>
          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>
          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>
        </section>
      </Container>
    </main>
  )
}