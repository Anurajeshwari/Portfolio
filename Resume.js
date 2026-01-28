import ResumeImg from '../assets/image 3.png';

export default function Resume() {
  const config = {
    link: "https://drive.google.com/uc?export=download&id=1ldAr-Uh28xd7u1TzuCyyZtFEqI5fPCQ2"
  };

  return (
    <section className='flex flex-col md:flex-row PX-5 bg-white' id='resume'>
      <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
        <img className='w-[350px]' src={ResumeImg} alt="Resume" />
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-3xl border-b-4 mb-5 w-[117px] font-bold'>Resume</h1>
          <p className='pb-3'>
            You can view my Resume{" "}
            <a
              className='btn'
              href={config.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
