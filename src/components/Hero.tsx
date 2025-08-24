
const Hero = () => {
  return (
    <section className="w-full h-[100vh] py-20 px-6 md:px-16 flex flex-col items-center text-center bg-[var(--color-white)]">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
          Hi, I’m Kunal 👋
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          I convert <span className="text-[var(--color-primary)] font-semibold">ideas into web solutions</span> 💡
          and automate offline businesses using the <strong>MERN + TS</strong> stack.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[var(--color-primary)] hover:bg-opacity-90 text-[var(--color-white)] px-8 py-3 rounded-lg shadow transition duration-300"
        >
          Let’s Work Together
        </a>
      </div>
    </section>
  );
};

export default Hero;