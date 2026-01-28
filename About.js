import AboutImg from '../assets/image1.png';
export default function About()
{
    return <section className='flex flex-col md:flex-row PX-5 'id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-3xl border-b-4 mb-5 w-[142px] font-bold'> About Me </h1>
                <p className='pb-3'>I’m a driven computer science student who builds clean, scalable, and user-focused web applications with a strong emphasis on quality and performance. I enjoy transforming complex problems into simple, intuitive solutions through thoughtful design and efficient code.</p>
               <p className='pb-3'>With a strong interest in full-stack development, I continuously explore modern technologies and frameworks to sharpen my skills.I believe in writing maintainable code, learning by building real-world projects, and constantly pushing myself to grow as a developer who delivers reliable and impactful digital experiences.</p>
            </div>
            
        </div>
    </section>
}