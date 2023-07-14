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
      <div className="fixed inset-y-40 md:inset-y-60 lg:inset-y-20 inset-x-10 md:inset-x-20 lg:inset-x-80 p-10 rounded-xl bg-white border-slate-400 border-2 z-50">
        <div className="md:flex justify-between items-center h-full">
          <img className="w-6/12 rounded-xl" src={work.img} alt="work-img" />
          <div className="w-5/12">
            <h4 className="text-xl font-bold mb-1">{work.title}</h4>
            <p className="text-lg">{work.description}</p>
          </div>
          <div className="absolute top-5 right-5 border-b-2 border-slate-400">
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
            <a href="./" className="m-2 text-base md:text-lg" onClick={onClose}>
              關閉
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#portfolio")
  );
};

export default WorkModal;
