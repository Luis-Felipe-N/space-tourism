import { NextApiRequest, NextApiResponse } from "next"

const technology = [
    {
      "name": "Foguete",
      "images": {
        "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg",
        "alt": "Um foguete prestes a ser lançado."
      },
      "description": "Um veículo de lançamento ou foguete é um veículo propelido por foguete usado para transportar uma carga útil da superfície da Terra para o espaço, geralmente para a órbita da Terra ou além. Nosso foguete portador WEB-X é o mais poderoso em operação. Com 150 metros de altura, é uma visão bastante inspiradora na plataforma de lançamento!"
    },
    {
      "name": "Porto espacial",
      "images": {
        "portrait": "./assets/technology/image-spaceport-portrait.jpg",
        "landscape": "./assets/technology/image-spaceport-landscape.jpg",
        "alt": "Porto espacial com foguete sendo preparado por trabalhadores."
      },
      "description": "Um porto espacial ou cosmódromo é um local para lançamento (ou recebimento) de espaçonaves, por analogia ao porto marítimo para navios ou aeroporto para aeronaves. Com base no famoso Cabo Canaveral, nosso espaçoporto está idealmente situado para aproveitar a rotação da Terra para o lançamento."
    },
    {
      "name": "Cápsula espacial",
      "images": {
        "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "./assets/technology/image-space-capsule-landscape.jpg",
        "alt": 'Cápsula espacial branca no espaço.'
      },
      "description": "Uma cápsula espacial é uma espaçonave freqüentemente tripulada que usa uma cápsula de reentrada de corpo cego para reentrar na atmosfera da Terra sem asas. Nossa cápsula é onde você passará seu tempo durante o vôo. Inclui um ginásio espacial, cinema e muitas outras actividades para o manter entretido."
    }
]
export default function handle(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(technology)
}