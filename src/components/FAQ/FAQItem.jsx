import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl bg-white shadow-sm">

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <h3 className="font-semibold text-lg">
          {item.question}
        </h3>

        {open ? (
          <FaMinus className="text-orange-500" />
        ) : (
          <FaPlus className="text-orange-500" />
        )}
      </button>

      {open && (
        <div className="px-5 pb-5 text-gray-600 leading-7">
          {item.answer}
        </div>
      )}

    </div>
  );
}