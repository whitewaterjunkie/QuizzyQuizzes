import React, { useEffect } from "react";
import { motion } from "framer-motion";
import OpenTDB from "../assets/logo.png";
import react from "../assets/react.png";
import tw from "../assets/tailwind.png";

function Home({ startQuiz, quizDetails, setQuizDetails }) {
  const RedirectPage = () => {
    useEffect(() => {
      window.location.replace("https://www.google.com");
    }, []);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuizDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    console.log(quizDetails);
  }, [quizDetails]);

  return (
    <motion.div
      initial={{ y: "-5vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ scale: 5, opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center items-center min-h-screen bottom-[3rem] md:bottom-[6rem] lg:bottom-[15rem] overflow-hidden"
    >
      <p className="text-5xl text-[#293264] font-bold mb-10 font-[Inter] text-center">
        Bo's Quizzy Quizzes
      </p>

      <form
        action=""
        className="flex flex-col items-center gap-10"
        onSubmit={(e) => {
          e.preventDefault();
          startQuiz();
        }}
      >
        <div className="flex items-end gap-5 flex-col lg:flex-row">
          <div className="flex flex-col">
            <label htmlFor="category" className="mb-3">
              Category
            </label>
            <select
              name="category"
              id="category"
              value={quizDetails.category}
              onChange={handleChange}
              className="px-3 bg-white rounded-md w-[10rem] h-[2rem] border border-[#293264]  transition-all duration-300"
            >
              <option value={""}>Any category</option>
              <option value={9}>General Knowledge</option>
              <option value={10}>Entertainment: Books</option>
              <option value={11}>Entertainment: Film</option>
              <option value={12}>Entertainment: Music</option>
              <option value={13}>Entertainment: Musical & Theatres</option>
              <option value={14}>Entertainment: Television</option>
              <option value={15}>Entertainment: Video Games</option>
              <option value={16}>Entertainment: Board Games</option>
              <option value={29}>Entertainment: Comics</option>
              <option value={31}>Entertainment: Japanese Anime & Manga</option>
              <option value={32}>Entertainment: Cartoon & Animations</option>
              <option value={17}>Science & Nature</option>
              <option value={18}>Science: Computers</option>
              <option value={19}>Science: Mathematics</option>
              <option value={30}>Science: Gadgets</option>
              <option value={20}>Mythology</option>
              <option value={21}>Sports</option>
              <option value={22}>Geography</option>
              <option value={23}>History</option>
              <option value={24}>Politics</option>
              <option value={25}>Art</option>
              <option value={26}>Celebrities</option>
              <option value={27}>Animals</option>
              <option value={28}>Vehicles</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="difficulty" className="mb-3">
              Difficulty
            </label>
            <select
              name="difficulty"
              id="difficulty"
              value={quizDetails.difficulty}
              onChange={handleChange}
              className="px-3 bg-white rounded-md w-[10rem] h-[2rem] border border-[#293264]  transition-all duration-300"
            >
              <option value="">Any difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="numOfQuestions" className="mb-3">
              Number of questions
            </label>
            <input
              min={1}
              max={50}
              type="number"
              name="numOfQuestions"
              value={quizDetails.numOfQuestions}
              onChange={handleChange}
              required
              id="numOfQuestions"
              className="p-3 rounded-md w-[10rem] h-[2rem] border border-[#293264] outline-none focus:border-[#8d74e4] transition-all duration-300"
            />
          </div>
        </div>
        <button className="w-[6rem] h-[2rem] bg-white text-[#abafc9] border rounded-md text-lg hover:bg-[#293264] font-[Inter] font-semibold transition-all duration-300 hover:text-white border-[#293264] mb-20">
          Go!
        </button>
      </form>
      <div className="text-center ">
        <p className="text-[#aeaeae] mb-4">Powered by</p>

        <div className="flex items-center gap-6 justify-center">
          <div className="">
            <img
              src={OpenTDB}
              alt=""
              onClick={RedirectPage}
              width={100}
              className=""
            />
          </div>
          <div className="w-12 aspect-square">
            <img src={react} alt="" onClick={RedirectPage} className="" />
          </div>
          <img
            src={tw}
            alt=""
            onClick={RedirectPage}
            className="w-14 aspect-square"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
