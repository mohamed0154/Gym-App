const Header = ({ title, description }) => {
  return (
    <div className="overflow-hidden min-h-52 bg-slate-950 text-white flex flex-col items-center justify-center uppercase leading-10 tracking-wider">
      <p className="text-md sm:text-lg mb-3">{title}</p>
      <h1 className="text-3xl  sm:text-4xl">
        {description[0]}
        <span className="text-blue-400">{description[1]}</span> {description[2]}
      </h1>
    </div>
  );
};

export default Header;
