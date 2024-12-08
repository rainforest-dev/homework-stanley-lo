import { Link, useParams } from "react-router";
import { motion } from "motion/react";
import { useState } from "react";

function Detail() {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const options = ["無懼未來的自己", "勇於挑戰的自己", "珍惜每天的自己"];

  return (
    <div className="flex-col-center gap-4 p-4">
      <h1 className="text-3xl font-bold">Card Details: {id}</h1>
      <div>
        <motion.div
          initial={{ scaleY: 0.6 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1 }}
          className="p-2 border w-100 h-10 rounded-full"
          onAnimationComplete={() => setIsOpen(true)}
        ></motion.div>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-col-center gap-2 mx-8 border border-t-0 rounded-b-lg overflow-hidden"
          >
            <ul className="flex flex-col w-full divide-y py-4">
              {options.map((option) => (
                <li key={option} className="p-4 text-center hover:bg-gray-100">
                  {option}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
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
