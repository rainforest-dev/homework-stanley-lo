import { Link, useNavigate } from "react-router";
import { motion, type Variant } from "motion/react";
import { useState } from "react";
import clsx from "clsx";

const svgVariants: { [key: string]: Variant } = {
  start: {
    opacity: 1,
    pathLength: 0,
  },
  end: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

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
              className="fill-none stroke-current stroke-2 group-hover:stroke-cyan-500 absolute inset-0"
            >
              <rect
                rx="8"
                ry="8"
                className="animate-stroke-dashoffset"
                height="100%"
                width="100%"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex-col-center py-4 gap-2 border group-hover:border-cyan-500 rounded size-full relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="0.5"
                stroke="currentColor"
                className="size-full group-hover:text-cyan-500"
              >
                <motion.path
                  variants={svgVariants}
                  initial="start"
                  animate="end"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
              </svg>
              <div className="text-xl w-[120%] border group-hover:border-cyan-500 group-hover:text-cyan-500 rounded-full text-center">
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
