import React from "react";

type GenericCardProps = "stand" | "on" | "off";

interface GenericCardPropsF {
  setOpenGenericCard: React.Dispatch<React.SetStateAction<GenericCardProps>>;
}

const About: React.FC<GenericCardPropsF> = ({ setOpenGenericCard }) => {
  return (
    <>
      <header>
        <div className="flex border-b px-2 pb-3 border-zinc-200 items-center justify-between">
          <div>
            <h4 className="font-medium text-xl leading-none text-indigo-600">
              Sobre mim
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
        <p className="text-zinc-800 text-[16px] font-[450] mt-2">
          <span className="text-indigo-600 font-medium">
            Sempre Aprendendo -{" "}
          </span>{" "}
          busco ser uma pessoa que corre atrás do conhecimento a tudo o que me
          interessa e que eu acho importante, não só para minha carreira como
          desenvolvedor mas também como pessoa!
          <br />
          <br />
          <span className="text-indigo-600 font-medium">
            Espírito Colectivo -{" "}
          </span>{" "}
          Por ser uma pessoa que gosta de fazer parte de comunidades de
          desenvolvimento, aprecio trabalho colectivo e estou aberto para
          projectos que impulsionem o desenvolvimento colectivo!
          <br />
          <br />
          <span className="text-indigo-600 font-medium">Arte - </span> Além de
          ser apaixonado por Tecnologia, sou uma pessoa que adora arte,
          principalmente a música, onde ajuda bastante para o equilíbrio neste
          grande mundo da Programação!
        </p>
      </div>
    </>
  );
};

export default About;
