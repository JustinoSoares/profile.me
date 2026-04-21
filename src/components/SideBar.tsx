import Link from "next/link";
import React from "react";

type TypesCards = "about" | "soft" | "skills" | "projects";
type GenericCardProps = "stand" | "on" | "off";

const SideBar: React.FC<{
  showMenu: string;
  setShowMenu: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<TypesCards>>;
  setOpenGenericCard: React.Dispatch<React.SetStateAction<GenericCardProps>>;
}> = ({ showMenu, setShowMenu, setType, setOpenGenericCard }) => {
  return (
    <aside
      className={`fixed ${showMenu === "off" && "offCard"} ${
        showMenu === "hide" && "hideCard"
      } ${
        showMenu === "on" && "onCard"
      }  top-0 left-0 right-0 bottom-0 z-[80] bg-[rgba(206,206,206,0.58)] flex flex-col justify-center backdrop-blur-2xl w-full h-dvh`}
    >
      <div className="flex px-5 py-7 h-full relative items-center justify-center gap-5 flex-col">
        <button
          onClick={() => setShowMenu("off")}
          className="absolute transition-all hover:bg-indigo-700 top-5 ring-0 px-4 py-1 z-50 rounded-full left-1/2 -translate-x-1/2 bg-indigo-500 text-white font-medium"
        >
          Cancelar
        </button>

        <button
          onClick={() => {
            setShowMenu("off");
            setOpenGenericCard("on");
            setType("about");
          }}
          className="w-full transition-all hover:text-indigo-600 text-xl gap-2 justify-center font-medium flex items-end "
        >
          Sobre mim
        </button>
        <button
          onClick={() => {
            setShowMenu("off");
            setOpenGenericCard("on");
            setType("soft");
          }}
          className="w-full transition-all hover:text-indigo-600 text-xl gap-1 justify-center font-medium flex items-end "
        >
          Soft Skills
        </button>
        <button
          onClick={() => {
            setShowMenu("off");
            setOpenGenericCard("on");
            setType("skills");
          }}
          className="w-full transition-all hover:text-indigo-600 text-xl gap-1 justify-center font-medium flex items-end "
        >
          Hard Skills
        </button>
        <Link
          href={"/projects"}
          onClick={() => {
            setShowMenu("off");
          }}
          className="w-full transition-all hover:text-indigo-600 text-xl gap-1 justify-center font-medium flex items-end "
        >
          Projectos
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
