import React from "react";
import Image from "next/image";

type GenericCardProps = "stand" | "on" | "off";

interface GenericCardPropsF {
  setOpenGenericCard: React.Dispatch<React.SetStateAction<GenericCardProps>>;
}

const HardSkills: React.FC<GenericCardPropsF> = ({ setOpenGenericCard }) => {
  const [valueGridIcons, setValueGridIcons] = React.useState(9);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 390) {
        setValueGridIcons(5);
      } else if (window.innerWidth <= 768) {
        setValueGridIcons(7);
      } else setValueGridIcons(9);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <header>
        <div className="flex border-b px-2 pb-3 border-zinc-200 items-center justify-between">
          <div>
            <h4 className="font-medium text-xl leading-none text-indigo-600">
              Hard Skills
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
        <picture>
          <Image
            width={600}
            height={100}
            src={`https://skillicons.dev/icons?i=c,go,bash,cpp,css,html,devto,docker,github,figma,javascript,linux,react,vite,nextjs,vscode,tailwindcss,nodejs&theme=dark&perline=${valueGridIcons}`}
            alt="Icons representing various technologies and tools"
          />
        </picture>
      </div>
    </>
  );
};

export default HardSkills;
