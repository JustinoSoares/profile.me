import React from "react";

type GenericCardProps = "stand" | "on" | "off";

interface GenericCardPropsF {
  setOpenGenericCard: React.Dispatch<React.SetStateAction<GenericCardProps>>;
}

const Skills = [
  "Comunicação",
  "Trabalho em Equipa",
  "Resolução de Problemas",
  "Adaptabilidade",
  "Pensamento Crítico",
  "Criatividade",
  "Empatia",
  "Liderança",
  "Gestão de Tempo",
  "Organização",
  "Colaboração",
  "Facilidade de Aprendizagem",
  "Autodidacta",
  "Autonomia",
];

const SoftSkills: React.FC<GenericCardPropsF> = ({ setOpenGenericCard }) => {
  return (
    <>
      <header>
        <div className="flex border-b px-2 pb-3 border-zinc-200 items-center justify-between">
          <div>
            <h4 className="font-medium text-xl leading-none text-indigo-600">
              Soft Skills
            </h4>
          </div>
          <div>
            <button
              onClick={() => {
                setOpenGenericCard("off");
                setTimeout(() => {
                  setOpenGenericCard("stand");
                }, 300);
              }}
              className="bg-indigo-600 cursor-pointer text-white px-4 py-1.5 rounded-lg font-medium transition-all hover:bg-indigo-700"
            >
              OK
            </button>
          </div>
        </div>
      </header>
      <div className="mt-5 px-2">
        <section className="flex flex-wrap gap-2">
          {Skills.map((skill, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-800 px-3 py-1.5 rounded-full text-md font-medium"
            >
              {skill}
            </span>
          ))}
        </section>
      </div>
    </>
  );
};

export default SoftSkills;
