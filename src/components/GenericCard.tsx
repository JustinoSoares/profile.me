import React from "react";
import About from "./Cards/About";
import SoftSkills from "./Cards/SoftSkills";
import HardSkills from "./Cards/HardSkills";

type GenericCardProps = "stand" | "on" | "off";
type TypesCards = "about" | "soft" | "skills" | "projects";

interface GenericCardPropsF {
  openGenericCard: GenericCardProps;
  setOpenGenericCard: React.Dispatch<React.SetStateAction<GenericCardProps>>;
  type: TypesCards;
}

const GenericCard: React.FC<GenericCardPropsF> = ({
  openGenericCard,
  setOpenGenericCard,
  type,
}) => {
  return (
    <aside
      className={`bg-[rgba(0,0,0,0.5)] ${
        openGenericCard === "stand" && "hiddenBackdropAside"
      } ${openGenericCard === "on" && "visibleBackdropAside"} ${
        openGenericCard === "off" && "offBackdrop"
      } backdrop-blur-sm fixed z-[60] ret:px-4 top-0 left-0 w-full h-dvh flex items-center justify-center`}
    >
      <div
        className={`max-w-xl ret:h-auto h-dvh ${openGenericCard === "stand" && "hiddenModel"} ${
          openGenericCard === "on" && "visibleModel"
        } ${
          openGenericCard === "off" && "offModel"
        } hiddenModel w-full bg-white p-5 ret:rounded-2xl`}
      >
        {type === "about" && <About setOpenGenericCard={setOpenGenericCard} />}
        {type === "soft" && (
          <SoftSkills setOpenGenericCard={setOpenGenericCard} />
        )}
        {type === "skills" && (
          <HardSkills setOpenGenericCard={setOpenGenericCard} />
        )}
      </div>
    </aside>
  );
};

export default GenericCard;
