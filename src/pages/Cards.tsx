import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { useState } from "react";
import clsx from "clsx";

function Cards() {
  const navigate = useNavigate();
  const cards = ["毅力", "樂觀", "積極", "執著"];
  const [selectedCard, setSelectedCard] = useState<(typeof cards)[number]>();

  return (
    <div className="flex-col-center gap-4 p-4 size-full">
      <h1 className="text-3xl font-bold">Cards List</h1>
      <div className="grid grid-cols-2 gap-10  gap-x-20">
        {cards.map((id) => (
          <motion.div
            key={id}
            layout
            className={clsx(
              "p-2 group cursor-pointer bg-white w-50 aspect-[3/4]",
              selectedCard
                ? selectedCard === id
                  ? "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  : "opacity-0"
                : "relative"
            )}
            onClick={() => setSelectedCard(id)}
            onLayoutAnimationComplete={() => {
              console.log("animation end");
              navigate(`/cards/${id}`);
            }}
          >
            <svg
              height="100%"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-none stroke-current stroke-2 group-hover:stroke-cyan-500 absolute inset-0 animate-stroke-dashoffset"
            >
              <rect
                rx="8"
                ry="8"
                className=""
                height="100%"
                width="100%"
                strokeLinejoin="round"
              />
            </svg>
            <div className="gap-2 border group-hover:border-cyan-500 rounded size-full relative">
              <div className="text-xl absolute bottom-1/5 left-1/2 -translate-x-1/2 w-[120%] border group-hover:border-cyan-500 group-hover:text-cyan-500 rounded-full text-center">
                {id}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <Link to="/" className="mt-4 text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}

export default Cards;
