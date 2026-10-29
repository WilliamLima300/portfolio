import quimera from "../../assets/quimera.png";//importar fotos dos projetos
import sos from "../../assets/sos.png";
import hidroquimica from "../../assets/hidroquimica.png";
import donarita from "../../assets/donarita.png";
import calculadora from "../../assets/calculadora.png";
import senhas from "../../assets/senhas.png";
import validar from "../../assets/validar.png";
import clima from "../../assets/clima.png";
import commerce from "../../assets/commerce.png";
import tarefas from "../../assets/tarefas.png";
import login from "../../assets/login.png";
import cooperativa from "../../assets/cooperativa.png";
import projetos from "../../assets/projetos.png";
import netflix from "../../assets/netflixclone.png";

export const projectsData = [
    {
      id: 101,
      title: "Já Parei!",
      category: "Destaques",
      type: "Aplicativo Android",
      description: "Aplicativo para apoiar quem quer parar de fumar, com acompanhamento de progresso, economia, conquistas, exercícios de respiração e comunidade.",
      tags: ["Mobile", "TypeScript", "Gamificação"],
      icon: "bx bx-mobile-alt",
      featured: true,
      demo: "https://play.google.com/store/apps/details?id=com.japarei",
    },
    {
      id: 102,
      title: "WizBot",
      category: "Destaques",
      type: "Plataforma de atendimento",
      description: "Centraliza múltiplos números de WhatsApp, equipes, filas e automações em um só painel para tornar o atendimento mais organizado e eficiente.",
      tags: ["Chatbot", "IA", "Automação"],
      icon: "bx bx-bot",
      featured: true,
      demo: "https://wizbot.com.br",
    },
    {
      id: 103,
      title: "WillBePlay",
      category: "Destaques",
      type: "Experiência de karaokê",
      description: "Plataforma de karaokê criada para transformar a escolha e reprodução de músicas em uma experiência digital simples e envolvente.",
      tags: ["Web app", "TypeScript", "Experiência"],
      icon: "bx bx-microphone",
      featured: true,
      demo: "https://willbeplay.com.br",
    },
    {
      id: 1,
      image: quimera,
      title: "Site Quimera Agência PHP JavaScript",
      category: "Web Sites",
      demo:"https://www.quimeraagencia.com.br",
    },
    {
      id: 2,
      image: sos,
      title: "Site Digital JavaScript",
      category: "Web Sites",
      demo:"https://digitalsos.com.br",
    },
    {
      id: 3,
      image: hidroquimica,
      title: "Site Hidroquimica JavaScript",
      category: "Web Sites",
      demo:"https://hidroquimicaindustria.com.br/",
    },
    {
      id: 4,
      image: donarita,
      title: "Site Marmitaria Dona Rita PHP",
      category: "Web Site",
      demo:"https://github.com/WilliamLima300/MarmitariaDonaRita",
    },
    {
      id: 5,
      image: calculadora,
      title: "Calculadora React js",
      category: "Apps",
      demo:"https://main--euphonious-crepe-e7b5a3.netlify.app",
    },
    {
      id: 6,
      image: senhas,
      title: "Gerador de Senhas JavaScript",
      category: "Apps",
      demo:"https://williamlima300.github.io/geradorSenhas/",
    },
    {
      id: 7,
      image: validar,
      title: "Validar e-mail JavaScript",
      category: "Apps",
      demo:"https://williamlima300.github.io/validarEmail/",
    },
    {
      id: 8,
      image: clima,
      title: "Como está o clima? JavaScript",
      category: "Apps",
      demo:"https://williamlima300.github.io/Clima/",
    },
    {
      id: 9,
      image: commerce,
      title: "Will e-commerce Ficiticio React js",
      category: "Web Sites",
      demo:"https://phenomenal-sable-6f29a5.netlify.app",
    },
    {
      id: 10,
      image: tarefas,
      title: "Lista de Tarefas JavaScript",
      category: "Apps",
      demo:"https://williamlima300.github.io/ListadeTarefas/",
    },
    {
      id: 11,
      image: login,
      title: "Sistema de Login PHP MySQL",
      category: "Web Sites",
      demo:"https://williamsistema.000webhostapp.com/",
    },
    {
      id: 12,
      image: cooperativa,
      title: "CRUD PHP(OO) MySQL(PDO)",
      category: "Web Sites",
      demo:"https://github.com/WilliamLima300/cooperativa",
    },
    {
      id: 13,
      image: projetos,
      title: "CRUD para cadastro projetos em C",
      category: "Apps",
      demo:"https://github.com/WilliamLima300/CADASTROPROJETOS",
    },
    {
      id: 14,
      image: netflix,
      title: "Clone Netflix com React js",
      category: "Web Sites",
      demo:"https://main--shiny-snickerdoodle-4f471f.netlify.app",
    },
  ];

  export const projectsNav = [
    {
        name:'Destaques'
    },
    {
        name:'Todos'
    },
    {
        name:'Web Sites'
    },
    {
        name:'Apps'
    }
  ];
