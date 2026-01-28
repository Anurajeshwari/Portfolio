import HeroImg from '../assets/image4.png'
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";

export default function Hero() {
  const config = {
    subtitle: 'Software Developer',
    social: {
      github: 'https://github.com/Anurajeshwari',
      linkedin: 'https://www.linkedin.com/in/anurajeshwari-m-5892102a1'
    }
  }

  return (
    <section className="flex flex-col md:flex-row px-8 md:px-20 py-24 md:py-36 bg-[#FAFAFA] items-center justify-between">

      <div className="w-full md:w-1/2 flex flex-col text-left pl-2 md:pl-0">
        <p className="text-xl mb-3">Hi,</p>

        <h1 className="flex flex-col text-4xl sm:text-5xl md:text-5xl font-extrabold leading-tight mb-4">
          I'm <span>Anurajeshwari</span>
        </h1>

        <h2 className="text-2xl md:text-2xl text-slate-600 font-medium">
          {config.subtitle}
        </h2>

        <div className="flex justify-start py-6">
          <a href={config.social.github} target="_blank" rel="noreferrer" className="pr-6">
            <IoLogoGithub size={32} />
          </a>
          <a href={config.social.linkedin} target="_blank" rel="noreferrer" className="pr-6">
            <FaLinkedin size={32} />
          </a>
          <a href="mailto:yourmail@gmail.com">
            <IoMdMailUnread size={35} />
          </a>
        </div>
      </div>

      <img src={HeroImg} className="w-[300px] md:w-[450px]" alt="Developer" />
    </section>
  )
}
