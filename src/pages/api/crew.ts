import { NextApiRequest, NextApiResponse } from "next"

const crew = [
        {
          "name": "Douglas Hurley",
          "images": {
            "png": "/assets/crew/image-douglas-hurley.png",
            "webp": "./assets/crew/image-douglas-hurley.webp"
          },
          "role": "Comandante",
          "bio": "Douglas Gerald Hurley é um engenheiro americano, ex-piloto do Corpo de Fuzileiros Navais e ex-astronauta da NASA. Ele se lançou ao espaço pela terceira vez como comandante da Crew Dragon Demo-2."
        },
        {
          "name": "Mark Shuttleworth",
          "images": {
            "png": "/assets/crew/image-mark-shuttleworth.png",
            "webp": "./assets/crew/image-mark-shuttleworth.webp"
          },
          "role": "Especialista da missão",
          "bio": "Mark Richard Shuttleworth é o fundador e CEO da Canonical, a empresa por trás do sistema operacional Ubuntu baseado em Linux. Shuttleworth se tornou o primeiro sul-africano a viajar ao espaço como turista espacial."
        },
        {
          "name": "Victor Glover",
          "images": {
            "png": "/assets/crew/image-victor-glover.png",
            "webp": "./assets/crew/image-victor-glover.webp"
          },
          "role": "Piloto",
          "bio": "Piloto no primeiro vôo operacional do SpaceX Crew Dragon para a Estação Espacial Internacional. Glover é comandante da Marinha dos Estados Unidos, onde pilota um F / A-18. Ele foi membro da tripulação da Expedição 64 e atuou como engenheiro de vôo de sistemas de estação."
        },
        {
          "name": "Anousheh Ansari",
          "images": {
            "png": "/assets/crew/image-anousheh-ansari.png",
            "webp": "./assets/crew/image-anousheh-ansari.webp"
          },
          "role": "Engenheira de voo",
          "bio": "Anousheh Ansari é uma engenheira iraniana-americana e cofundadora da Prodea Systems. Ansari foi a quarta turista espacial autofinanciada, a primeira mulher autofinanciada a voar para a ISS e a primeira iraniana no espaço."
        }
      ]

export default function handle(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(crew)
}