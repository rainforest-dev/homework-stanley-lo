import { Link, useParams } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function Detail() {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const options = ["無懼未來的自己", "勇於挑戰的自己", "珍惜每天的自己"];
  const [selectedOption, setSelectedOption] =
    useState<(typeof options)[number]>();

  return (
    <div className="flex-col-center gap-4 p-4">
      <h1 className="text-3xl font-bold">Card Details: {id}</h1>
      <div>
        <motion.div
          initial={{ scaleY: 0.6 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1 }}
          className="py-1 border w-100 h-10 rounded-full flex-center relative cursor-pointer"
          onAnimationComplete={() => setIsOpen(true)}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption}
          <div
            className="w-[108%] h-4/5 border rounded-full absolute 
                          after:border after:absolute after:size-4 after:rounded-full after:left-0 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2
                          before:border before:absolute before:size-4 before:rounded-full before:right-0 before:top-1/2 before:translate-x-1/2 before:-translate-y-1/2"
          ></div>
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-col-center gap-2 mx-8 border border-t-0 rounded-b-lg overflow-hidden"
            >
              <ul className="flex flex-col w-full divide-y py-4">
                {options.map((option) => (
                  <li
                    key={option}
                    onClick={() => {
                      setSelectedOption(option);
                      setIsOpen(false);
                    }}
                    data-selected={selectedOption === option}
                    className="p-4 text-center hover:bg-gray-100 cursor-pointer
                              data-[selected=true]:bg-cyan-100 data-[selected=true]:border data-[selected=true]:border-cyan-500"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex gap-4 mt-4">
        <Link to="/cards" className="text-blue-500 hover:underline">
          Back to List
        </Link>
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Detail;
