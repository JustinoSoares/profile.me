"use client";

import {
  RiBookReadLine,
  RiChat1Line,
  RiCornerUpRightLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiServiceLine,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── helpers ────────────────────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

function StaggerChildren({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: delay } },
      }}
      className={className}>
      {children}
    </motion.div>
  );
}

// ─── component ──────────────────────────────────────────────────────────────

export default function Profile() {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* ── HEADER ──────────────────────────────────────────────────────── */}
      <header className="pot:h-[75vh] h-auto flex relative flex-col justify-between items-end bg-slate-50">
        {/* Nav */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="ret:mt-7 pot:px-0 px-6 w-full max-w-6xl flex items-center justify-between py-3 mx-auto top-7 rounded-full right-0 left-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="valorax text-slate-900 uppercase text-3xl pot:text-4xl">
              j
            </p>
          </motion.div>
          <div className="pot:hidden flex items-center gap-4">
            <button className="size-9 hover:scale-105 transition-all text-white rounded-full bg-slate-900 flex items-center justify-center">
              <RiChat1Line className="size-5" />
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pot:flex hidden items-center gap-3">
            <Link
              href={"https://www.linkedin.com/in/justino-soares-a56833292/"}
              target="_blank"
              className="ret:inline-flex hidden">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-slate-900 text-white flex items-center justify-center gap-2 pot:font-semibold px-4 py-3 rounded-xl text-sm">
                <RiChat1Line className="size-5" />
                Fale comigo
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToElement("tools")}
              className="bg-transparent border border-zinc-200 text-slate-900 hidden ret:flex items-center justify-center gap-2 pot:font-semibold px-4 py-3 rounded-xl text-sm">
              <RiCornerUpRightLine className="size-5" />
              Não estou interessado
            </motion.button>
          </motion.div>
        </motion.nav>

        {/* Hero text + image */}
        <div className="flex flex-col justify-center items-center w-full">
          <div className="max-w-6xl h-full mx-auto flex items-center justify-center gap-5">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 pot:flex hidden justify-end">
              <div className="pot:block hidden">
                <h1 className="text-5xl text-slate-900 whitespace-nowrap pot:font-semibold">
                  Não escrevo <br /> apenas código,
                </h1>
                <p className="text-slate-700 pt-5">
                  crio soluções que vão além do código, dos editores e das
                  interfaces,
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex pot:mt-0 mt-16 pot:flex-row pot:px-0 px-5 pot:gap-0 gap-7 flex-col items-center justify-center w-full">
              <h1 className="text-2xl max-w-md mx-auto w-full pot:hidden inline-flex pot:font-semibold text-center">
                estruturando sistemas e ecossistemas digitais que resolvem
                problemas reais!
              </h1>
              <p className="text-sm max-w-md mx-auto w-full pot:hidden inline-flex text-slate-700 text-center">
                Do problema à solução, projeto e desenvolvo sistemas que
                entregam valor real e sustentado.
              </p>
              <Image
                src={"/app/image_erase.png"}
                width={1600}
                height={600}
                className="w-100"
                alt="profile picture"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 pot:block hidden">
              <h2 className="text-5xl text-slate-900 whitespace-nowrap font-bold">
                Resolvo <br /> problemas reais
              </h2>
              <p className="text-slate-600 pt-5">
                Do problema à solução, projeto e desenvolvo sistemas que
                entregam valor real e sustentado.
              </p>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="pot:px-0 px-5">
        {/* ── SOBRE ───────────────────────────────────────────────────────── */}
        <section className="max-w-6xl py-24 mx-auto">
          <FadeIn>
            <header>
              <h3 className="pot:text-4xl ret:text-3xl text-2xl text-slate-900 pot:font-semibold">
                Justino Soares
              </h3>
              <p className="pt-1 text-slate-700 text-base">
                Back-end Developer & AI Engineer | Front-end Development |
                Mobile Development
              </p>
            </header>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 pot:grid-cols-[30%_70%] gap-3">
            <FadeIn delay={0.1}>
              <div className="h-96 p-6 rounded-2xl flex flex-col justify-between bg-slate-900">
                <header>
                  <RiBookReadLine className="text-white size-10" />
                </header>
                <footer>
                  <h4 className="text-white text-xl pot:font-semibold">
                    Resolução de Problemas Complexos
                  </h4>
                  <p className="text-sm text-slate-200 pt-3">
                    Transformo desafios técnicos em soluções elegantes. Cada
                    problema é uma oportunidade de criar algo mais eficiente,
                    escalável e com impacto real no negócio.
                  </p>
                </footer>
              </div>
            </FadeIn>

            <StaggerChildren
              className="grid grid-cols-1 pot:grid-cols-2 grid-row-1 pot:grid-rows-2 gap-3"
              delay={0.2}>
              {[
                {
                  value: "+3",
                  label: "Anos de Experiência",
                  desc: "Anos atuando tanto como freelancer quanto em empresas, acumulando visões diferentes de como software é construído e entregue.",
                },
                {
                  value: "+10",
                  label: "Tecnologias",
                  desc: "Tecnologias que domino na prática — desde o front ao back, passando por ferramentas de deploy, banco de dados e implementações de IA em projectos.",
                },
                {
                  value: "+2",
                  label: "Contextos de Trabalho",
                  desc: "Experiência tanto no ambiente corporativo quanto no freelance, o que me dá flexibilidade para adaptar minha forma de trabalhar a cada contexto.",
                },
                {
                  value: "Ativa",
                  label: "Comunidade",
                  desc: "Presença ativa em comunidades de tecnologia, compartilhando aprendizados, projetos e conectando com outros desenvolvedores.",
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-slate-50 p-5 rounded-2xl">
                  <header className="flex items-center justify-between border-b pb-3 border-gray-100">
                    <p className="text-slate-900 text-3xl pot:font-semibold">
                      {item.value}
                    </p>
                    <p className="text-slate-800">{item.label}</p>
                  </header>
                  <div>
                    <p className="text-slate-800 pt-5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ── FERRAMENTAS ─────────────────────────────────────────────────── */}
        <section id="tools" className="w-full pt-14">
          <FadeIn className="max-w-6xl pb-8 mx-auto">
            <div className="flex items-center flex-wrap gap-5 justify-between">
              <h4 className="ret:text-3xl text-2xl text-slate-900 pot:font-semibold">
                Ferramentas & Tecnologias
              </h4>
              <Link
                href={"https://www.linkedin.com/in/justino-soares-a56833292/"}
                target="_blank">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-slate-900 text-white flex items-center justify-center gap-2 pot:font-semibold px-4 py-3 rounded-xl text-sm">
                  <RiServiceLine className="size-5" />
                  Trabalhe Comigo
                </motion.button>
              </Link>
            </div>
            <p className="max-w-3xl text-slate-700 pt-6 pot:pt-3">
              Um conjunto diversificado de habilidades e tecnologias que me
              permitem criar soluções inovadoras e impactantes, desde o
              desenvolvimento de software até a construção de comunidades e
              produtos digitais.
            </p>
          </FadeIn>

          <section className="border-t mt-10 border-zinc-200 w-full">
            <StaggerChildren
              className="max-w-6xl divide-y divide-x mx-auto grid ret:grid-cols-2 grid-cols-1 pot:grid-cols-3"
              delay={0.05}>
              {[
                {
                  icons: [{ src: "/icons/python.svg", w: 40 }],
                  title: "Python",
                  desc: "Linguagem que utilizo para desenvolver APIs robustas, sistemas backend escaláveis e aplicações com inteligência artificial.",
                },
                {
                  icons: [
                    { src: "/icons/node.svg", w: 40 },
                    { src: "/icons/nest.svg", w: 40 },
                  ],
                  title: "Node.js & NestJS",
                  desc: "Tecnologias que utilizo para construir APIs escaláveis, sistemas backend modulares e arquiteturas robustas e bem estruturadas.",
                },
                {
                  icons: [
                    { src: "/icons/git.svg", w: 40 },
                    { src: "/icons/github.svg", w: 40 },
                  ],
                  title: "Git & GitHub",
                  desc: "Ferramentas de controle de versão e colaboração que me permitem gerenciar e compartilhar meu código de forma eficiente.",
                },
                {
                  icons: [{ src: "/icons/docker.svg", w: 60 }],
                  title: "Docker",
                  desc: "Plataforma de containerização que me permite criar, implantar e gerenciar aplicações de forma consistente e eficiente.",
                },
                {
                  icons: [{ src: "/icons/jira.svg", w: 40 }],
                  title: "Jira",
                  desc: "Ferramenta de gerenciamento de projetos que me permite organizar, planejar e acompanhar o progresso dos projetos.",
                },
                {
                  icons: [{ src: "/icons/tailwind.svg", w: 40 }],
                  title: "Tailwind CSS",
                  desc: "Framework de CSS utilitário que me permite criar interfaces responsivas e personalizadas de forma rápida e eficiente.",
                },
                {
                  icons: [
                    { src: "/icons/next.svg", w: 40 },
                    { src: "/icons/react.svg", w: 40 },
                  ],
                  title: "Next.js & React",
                  desc: "Frameworks de desenvolvimento web que me permitem criar aplicações modernas, rápidas e escaláveis.",
                },
                {
                  icons: [
                    { src: "/icons/c.svg", w: 40 },
                    { src: "/icons/cpp.svg", w: 40 },
                  ],
                  title: "C & C++",
                  desc: "Linguagens de programação de baixo nível que me permitem criar aplicações eficientes e de alto desempenho.",
                },
                {
                  icons: [
                    { src: "/icons/js.svg", w: 40 },
                    { src: "/icons/ts.svg", w: 40 },
                  ],
                  title: "JavaScript & TypeScript",
                  desc: "Linguagens de programação de alto nível que me permitem criar aplicações web modernas, interativas e escaláveis.",
                },
              ].map((tool) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="p-8 h-72 hover:bg-slate-50! last:border-r border-l last:border-b border-zinc-200 flex flex-col justify-between">
                  <header className="flex items-center gap-3">
                    {tool.icons.map((icon, i) => (
                      <div key={i} className="flex gap-3 items-center ">
                        {i > 0 && (
                          <p className="text-zinc-600" key={`plus-${i}`}>
                            +
                          </p>
                        )}
                        <Image
                          key={icon.src}
                          src={icon.src}
                          width={icon.w}
                          height={icon.w}
                          alt={tool.title}
                        />
                      </div>
                    ))}
                  </header>
                  <div>
                    <h5 className="pot:font-semibold text-lg">{tool.title}</h5>
                    <p className="text-slate-800 text-sm pt-3">{tool.desc}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerChildren>
            <FadeIn>
              <footer className="text-center pt-10">
                <p className="text-slate-800">Não me limito a linguagens, me foco na solução.</p>
              </footer>
            </FadeIn>
          </section>
        </section>

        {/* ── PROJETOS ────────────────────────────────────────────────────── */}
        <section className="max-w-6xl py-24 mx-auto">
          <FadeIn>
            <header>
              <h3 className="pot:text-4xl ret:text-3xl text-2xl text-slate-900 pot:font-semibold">
                Prática que não mente
              </h3>
              <p className="pt-4 max-w-3xl text-slate-700 text-base">
                Confira algumas das soluções que entreguei, os projetos que
                construí e as comunidades que ajudei a crescer.
              </p>
            </header>
          </FadeIn>

          <StaggerChildren
            className="grid mt-10 grid-cols-1 pot:grid-cols-2 gap-2"
            delay={0.05}>
            {[
              {
                title: "Angopen",
                sub: "Hub Angolano de Open Source.",
                href: null,
                label: "Brevemente",
                img: "/portfolio/pro1.png",
                bottomTam: "-bottom-16",
                position: "Back-end Developer",
              },
              {
                title: "Edu360",
                sub: "Plataforma de educação online.",
                href: "https://edu360.vercel.app/",
                label: "Visitar Website",
                img: "/portfolio/pro9.png",
                bottomTam: "-bottom-15",
                position: "Back-end Developer",
              },
              {
                title: "Face In",
                sub: "Sistema de reconhecimento facial para controle de acesso.",
                href: null,
                label: "Fora do ar",
                img: "/portfolio/pro12.png",
                bottomTam: "-bottom-16",
                position: "Full-Stack Developer",
              },
              {
                title: "Drenoday",
                sub: "Hospedagem de API para monitoramento de saúde de aplicações e serviços",
                href: null,
                label: "Brevemente",
                img: "/portfolio/pro2.png",
                bottomTam: "-bottom-9",
                position: "Back-end Developer",
              },
              {
                title: "Context AI",
                sub: "Solução de IA para geração de conteúdo contextualizado.",
                href: "https://context-ai.himersus.com/",
                label: "Visitar Website",
                img: "/portfolio/pro13.png",
                bottomTam: "-bottom-16",
                position: "Full-Stack Developer",
              },
              {
                title: "Yame",
                sub: "Solução para cartões de visita digitais.",
                href: "https://yame-swart.vercel.app/",
                label: "Visitar Website",
                img: "/portfolio/pro10.png",
                bottomTam: "-bottom-10",
                position: "Back-end Developer",
              },
              {
                title: "InfraWatch",
                sub: "Solução de monitoramento de saúde de aplicações e serviços",
                href: "https://infrawatch-icn2.vercel.app/",
                label: "Visitar Website",
                img: "/portfolio/pro7.png",
                bottomTam: "-bottom-10",
                position: "Back-end Developer",
              }
            ].map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.015, transition: { duration: 0.25 } }}
                className="h-80 p-8 flex flex-col justify-between overflow-hidden bg-slate-50">
                <header className="relative">
                  <div className="flex items-center justify-between">
                    <h4 className="pot:font-semibold text-slate-900 text-xl ret:text-2xl">
                      {project.title}
                    </h4>
                    {project.href ? (
                      <Link
                        href={project.href}
                        target="_blank"
                        className="text-slate-700 hover:underline hover:text-slate-900 text-sm">
                        {project.label}
                      </Link>
                    ) : (
                      <p className="text-slate-700 text-sm">{project.label}</p>
                    )}
                  </div>
                  <p className="text-sm pt-1 text-gray-600">{project.sub}</p>
                  <p className="text-sm pt-1 self-end text-gray-400">{project.position}</p>
                </header>
                <footer className="relative">
                  <Image
                    className={`-right-10 absolute ${project.bottomTam} shadow-2xl`}
                    src={project.img}
                    width={400}
                    height={40}
                    alt={project.title}
                  />
                </footer>
              </motion.div>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.1}>
            <footer className="mt-14 flex items-center justify-center">
              <Link href={"https://github.com/JustinoSoares"} target="_blank">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-transparent border border-zinc-200 text-slate-900 flex items-center justify-center gap-2 pot:font-semibold px-4 py-3 rounded-xl text-sm">
                  <RiCornerUpRightLine className="size-5" />
                  Ver mais projetos
                </motion.button>
              </Link>
            </footer>
          </FadeIn>
        </section>

        {/* ── EDUCAÇÃO ────────────────────────────────────────────────────── */}
        <section className="max-w-6xl py-14 mx-auto">
          <FadeIn className="max-w-6xl pb-8 mx-auto">
            <h4 className="pot:text-3xl text-2xl text-slate-900 pot:font-semibold">
              Educação e Carreira
            </h4>
            <p className="max-w-3xl text-slate-700 pt-3">
              Minha jornada educacional e profissional é marcada por uma busca
              constante por conhecimento, crescimento e impacto.
            </p>
          </FadeIn>

          <StaggerChildren
            className="mt-5 grid grid-cols-1 divide-y border-gray-200"
            delay={0.1}>
            {[
              {
                title: "Escola 42 Luanda",
                period: "2024 - 2026 | Engenharia de Software",
                desc: "A Escola 42 é uma instituição de ensino inovadora que oferece uma abordagem única para a educação em tecnologia. Com um currículo focado em projetos práticos e aprendizado colaborativo, a escola prepara os alunos para enfrentar os desafios do mundo real da engenharia de software.",
              },
               {
                title: "Data Science Academy",
                period: "2026 - Present | Fundamentos de Linguagem Python Do Básico a Aplicações de IA",
                desc: "Formação abrangente em Python, cobrindo desde a sintaxe fundamental até a construção de soluções reais com Inteligência Artificial. O percurso incluiu manipulação e análise de dados, desenvolvimento de modelos de Machine Learning e Deep Learning, integração com Large Language Models (LLMs) e criação de agentes de IA para automação de processos — transformando código em sistemas inteligentes e autônomos.",
              },
              {
                title: "Himersus",
                period: "2023 - 2026 | Teach Lead & Software Developer",
                desc: "Na Himersus, atuo como Teach Lead e Software Developer, lidero uma equipa de desenvolvedores de software qualificados ",
              },
              {
                title: "Bulir Technology",
                period:
                  "2026 | Back-end Developer",
                desc: "Na Bulir Technology, atuei como Back-end Developer, contribuindo para o desenvolvimento e manutenção de sistemas robustos e escaláveis.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="py-5 flex-col border-gray-200 flex items-start gap-6">
                <div>
                  <h5 className="text-slate-900 text-lg pot:font-semibold">
                    {item.title}
                  </h5>
                  <p className="text-sm">{item.period}</p>
                </div>
                <div className="max-w-4xl text-sm">
                  <p className="text-slate-700">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </section>
      </main>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 w-full bg-slate-900">
        <div className="max-w-6xl py-4 mx-auto gap-6 flex-wrap pot:px-0 px-5 flex items-center justify-between">
          <div className="text-white">
            <p className="valorax uppercase text-3xl">j</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={"https://www.linkedin.com/in/justino-soares-a56833292/"}
              target="_blank">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-slate-900 whitespace-nowrap text-white flex items-center justify-center gap-2 pot:font-semibold px-4 py-3 rounded-xl text-sm">
                <RiLinkedinBoxFill className="size-5" />
                Segue-me
              </motion.button>
            </Link>
            <Link href={"https://github.com/justinosoares"} target="_blank">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-slate-900 text-white flex items-center justify-center gap-2 pot:font-semibold px-4 py-3 rounded-xl text-sm">
                <RiGithubFill className="size-5" />
                Github
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
