import { github } from "../assets"

const Hero = () => {
  return (
    <header className='flex w-full flex-col justify-center items-center'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <h1 className='logo_text'>Summarizer</h1>

        <a target="_blank" href="https://github.com/billyvillanuevadev/ai-summarizer">
          <img src={github} alt='Github Icon' className='object-contain w-[28px]' />
        </a>
      </nav>

      <h1 className='head_text'>
        Open AI Summarizer
      </h1>
      <h2 className='desc'>
        Shorten online articles to absorb information faster.
      </h2>
    </header>
  );
};

export default Hero