import { useEffect } from "react";
import { createPortal } from "react-dom";

const WorkModal = ({ onClose, work }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return createPortal(
    <div className="animate-fadeIn">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-200 opacity-80 z-40"
      ></div>
      <div className="fixed inset-y-20 md:inset-y-60 lg:inset-y-20 inset-x-10 md:inset-x-20 lg:inset-x-80 p-10 rounded-xl bg-white border-slate-400 border-2 z-50">
        <div className="mt-5 md:mt-0 md:flex justify-between items-center h-full">
          <img className="mb-5 md:mb-0 md:w-6/12 rounded-xl" src={work.img} alt="work-img" />
          <div className="md:w-5/12">
            <h4 className="text-xl font-bold mb-1">{work.title}</h4>
            <p className="text-lg">{work.description}</p>
          </div>
          <div className="absolute top-3 right-3 md:top-5 md:right-5 border-b-2 border-slate-400">
            {work.demo !== null && (
              <a
                href={work.demo}
                target="_blank"
                rel="noreferrer"
                className="m-2 text-base md:text-lg"
              >
                前往 Demo
              </a>
            )}
            <a
              href={work.source}
              target="_blank"
              rel="noreferrer"
              className="m-2 text-base md:text-lg"
            >
              前往 Repo
            </a>
            <a href="./" className="m-2 text-md md:text-lg font-sans font-bold" onClick={onClose}>
              X
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#portfolio")
  );
};

export default WorkModal;
