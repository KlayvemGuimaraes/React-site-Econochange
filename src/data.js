// simport {SiOpenaigym} from 'react-icons/si'

import {FcMindMap} from 'react-icons/fc'
import {BiRun} from 'react-icons/bi'
import {FaHandshake} from 'react-icons/fa'
import {TbHeartHandshake} from 'react-icons/tb'
import {GiTalk} from 'react-icons/gi'
import {AiTwotoneBank} from 'react-icons/ai'
import {GiTeacher} from 'react-icons/gi'
import {TiLightbulb} from 'react-icons/ti'


export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "Sobre",
        path: '/about'
    },
    {
        name: "Galeria",
        path: '/gallery'
    },
    {
        name: "Planos",
        path: '/plans'
    },
    {
        name: "Membros",
        path: '/trainers'
    },
    {
        name: "Contato",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <FcMindMap/>,
        title: "Conhecimento",
        info: "Só o conhecimento é capaz de vencer a ignorância. Baseado nisso queremos tornar você jovem, em um sábio experiente!",
        path: "http://localhost:3000/about"
    },
    {
        id: 2,
        icon: <BiRun/>,
        title: "Proatividade",
        info: "Quem aí não gosta de pessoas pra cima e com vontade de crescer não é mesmo?",
        path: "http://localhost:3000/about"
    },
    {
        id: 3,
        icon: <FaHandshake/>,
        title: "Comprometimento",
        info: "Querer algo não é suficliente para conquistá-lo. Com isso em mente visamos entregar o melhor para nossos clientes.",
        path: "http://localhost:3000/about"
    },
    {
        id: 4,
        icon: <TbHeartHandshake/>,
        title: "Respeito",
        info: "Esta simples palavra é a base para tudo, com respeito e ética podemos buscar caminhos maiores sempre.",
        path: "http://localhost:3000/about"
    }
]








export const values = [
    {
        id: 1,
        icon: <GiTalk/>,
        title: "Comunicação Acessível",
        desc: "Ter uma comunicação divertida e objetiva é essencial para um ecossistema, por isso preservamos muito isso."
    },
    {
        id: 2,
        icon: <AiTwotoneBank/>,
        title: "Parceria com bancos",
        desc: "Entendemos que para a melhor comunicação com os clientes, precisamos de parcerias com empresas bancárias que pensam como a gente, com uma troca simultânea entre si."
    },
    {
        id: 3,
        icon: <GiTeacher/>,
        title: "Ensinar",
        desc: "Temos commo compromisso de educar o público jovem sobre como se organizar financeiramente, para se ter uma ideia desse descaso, apenas 25% dos jovens de 18 á 30 anos dizem ter controle financeiro, segundo a Agência Brasil."
    },
    {
        id: 4,
        icon: <TiLightbulb/>,
        title: "Inovação",
        desc: "Acreditamos no diferente bem feito, tudo pode ser aprimorado desde que tenha um norte."
    }
]









export const faqs = [
    {
        id: 1,
        question: "O que é educação financeira?",
        answer: "Educação financeira é o processo em que um indivíduo busca conhecimento para lidar com o dinheiro da forma mais eficaz e sábia. "
    },
    {
        id: 2,
        question: "Para que serve o controle de gastos?",
        answer: "Controle de gastos vai muito mais do que apenas poupar, mas sim saber e ter consciência sobre para onde vai sua grana!"
    },
    {
        id: 3,
        question: "Educação financeira é importante?",
        answer: "Sim, uma boa educação financeira ajuda as pessoas a tomarem as decisões mais conscientes sobre o que fazer com seu dinheiro, contribuindo para uma melhor qualidade de vida no geral."
    },
    {
        id: 4,
        question: "O que preciso para a aprender?",
        answer: "Vontade e persistência, e um pouco de resiliência para se livrar dos maus-hábitos."
    },
    {
        id: 5,
        question: "O que são investimentos?",
        answer: "Investimento é qualquer gasto ou aplicação de recursos que produza um retorno futuro. Dentre isso existem algumas variáveis como, riscos, duração e retorno."
    },
    {
        id: 6,
        question: "Como me controlar financeiramente?",
        answer: "As vezes nós exageramos um pouco nas compras, e isso é extremamente normal. Mas para tudo voltar para os trilhos, temos que tomar consciência da onde vem o nosso dinheiro, e para onde ele está indo, assim criando um hábito saúdavel e controlando suas finanças."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Michael John Bobak",
        quote: "Todo processo acontece fora da zona de conforto.",
        job: "Artista visual, Compositor, Escritor e Poeta.",
        avatar: require("./images/authors/michael-john-bobak.jpg")
    },
    {
        id: 2,
        name: "Benjamin Franklin",
        quote: "Investir em conhecimento rende sempre os melhores juros. Se você almeja ser rico, pense em poupar assim como você pensa em ganhar dinheiro.",
        job: "Editor, Jornalista, Cientista e Diplomata.",
        avatar: require("./images/authors/benjamin-franklin.jpg")
    },
    {
        id: 3,
        name: "Dale Carnegie",
        quote: "Em vez de se preocupar com o que as pessoas dizem sobre você, por que não investir tempo tentando fazer algo que elas admirem?",
        job: "Formador, Escritor e Orador.",
        avatar: require("./images/authors/dale-carnegie.jpg")
    },
    {
        id: 4,
        name: "Rafael Seabra",
        quote: "Depois que você tem uma base sólida de conhecimento, fica muito mais fácil aprender a investir e lidar com dinheiro.",
        job: "Educador financeiro e Escritor.",
        avatar: require("./images/authors/rafael-seabra.jpg")
    },
    {
        id: 5,
        name: "Warren-Buffet",
        quote: "Risco vem de você não saber o que está fazendo. Controle o seu dinheiro.",
        job: "Principal acionista, presidente do conselho e diretor executivo da Berkshire Hathaway.",
        avatar: require("./images/authors/warren-buffet.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Plano Prata',
        desc: 'Plano recomendado para empresas de pequeno porte.',
        price: "1000.00",
        features: [
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true}
        ]
    },
    {
        id: 2,
        name: 'Plano Platina',
        desc: 'Plano recomendado para empresas de médio porte.',
        price: "5.000",
        features: [
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true}
        ]
    },
    {
        id: 3,
        name: 'Plano Diamante',
        desc: 'Plano recomendado para empresas de grande porte.',
        price: "10.000",
        features: [
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true},
            {feature: ' À definir', available: true}
        ]
    }
]









const Member1 = require('./images/Members/KlayvemGuimaraes.jpg')
const Member2 = require('./images/Members/BiancaRamaldes.jpg')
const Member3 = require('./images/Members/LuisFelipe.jpg')
const Member4 = require('./images/Members/LeonardoNascimento.jpg')
const Member5 = require('./images/Members/ErickPereira.jpg')
const Member6 = require('./images/Members/StephanyMartins.jpg')


export const trainers = [
    {
        id: 1,
        image: Member1,
        name: 'Klayvem Guimarães',
        job: 'Programador, Designer e Editor de vídeo.',
        socials: ['https://linkedin.com/', 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZWxDdNXMzjQmQrbssWhxxgppsJRxPkZpnxpVjXxnRpZdWzbjSTWtJgQwrSNpDvdmWZLdV']
    },
    {
        id: 2,
        image: Member2,
        name: 'Bianca Ramaldes',
        job: 'Designer e Social Media.',
        socials: ['https://linkedin.com/', 'https://mail.google.com/']
    },
    {
        id: 3,
        image: Member3,
        name: 'Luís Felipe',
        job: 'Membro',
        socials: ['https://linkedin.com/', 'https://mail.google.com/']
    },
    {
        id:4, 
        image: Member4,
        name: 'Leonardo Rocha',
        job: 'Diretor de ideias',
        socials: ['https://linkedin.com/','https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCDCMhTWxMdLrqPFMNjlxzNPSRqwQqLxgrMCsxThHJwmxrwdPDwnZWhWXTvPxsLSMfkPDq']

    },
    {
        id:5, 
        image: Member5,
        name: 'Erick Pereira',
        job: 'Entrevistador',
        socials: ['https://linkedin.com/','https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCDCMhTWxMdLrqPFMNjlxzNPSRqwQqLxgrMCsxThHJwmxrwdPDwnZWhWXTvPxsLSMfkPDq']

    },
    {
        id:6, 
        image: Member6,
        name: 'Stehany Martins',
        job: 'Mentora',
        socials: ['https://linkedin.com/','https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCDCMhTWxMdLrqPFMNjlxzNPSRqwQqLxgrMCsxThHJwmxrwdPDwnZWhWXTvPxsLSMfkPDq']

    }
]