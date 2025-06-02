import '../css/App.css'
import angelIcon from '../assets/angel-icon2.svg';
import { FaFacebook, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen mb-10 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20  bg-white">
      {/* Left Section - Text */}
      <div className="text-left max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-light leading-snug text-black">
          Hello, I’m <span className="font-bold">Angelica Suti Whiharto.</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-light mt-3">
          <span className="font-bold">Artificial Intelligence </span><span className="outlined-text font-bold">Engineer</span><br />
          Based In <span className="font-bold">Indonesia.</span> 
        </h2>

        <p className="mt-6 text-gray-600 text-sm md:text-base">
          I'm Angelica. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text since the 1500s.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="mt-5 md:mt-0 md:ml-10">
        <img src={angelIcon} alt="Developer Illustration" className="w-72 md:w-[600px]" />
      </div>
    </div>
  );
}

export default App;
