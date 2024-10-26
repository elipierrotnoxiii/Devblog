
const Hero = () => {
  return (
    <div className="grid h-96 lg:grid-cols-2 items-center justify-items-center bg-custom-hero">
      <div className="order-1 lg:order-1 shadow-2xl">
        <img className="h-80 object-cover lg:w-[200px] lg:h-[200px] rounded-full" src="/img/Avatar-foto.jpg" alt="Hero-img"/>
      </div>
      <div className="w-full order-2 lg:order-2 flex flex-col  lg:items-start text-center sm:text-left">
        <p className="mt-2 text-3xl md:text-lg sm:text-sm text-white">Hi There</p>
        <p className="text-4xl font-bold md:text-7xl text-white">I&apos; m Geo</p>
        <p className="mt-2 lg:text-3xl md:text-sm text-white">I am a Web programmer and Game Developer</p>
      </div>
    </div>
  )
}

export default Hero
