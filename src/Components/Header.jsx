const Header = ({ connectWallet }) => {
  return (
    <div
      className="h-screen w-full relative overflow-hidden"
      data-testid="header"
    >
      <img
        src="/images/stars.gif"
        width={350}
        height="100"
        alt="exaview logo"
        className="absolute w-full h-full opacity-30"
      />

      <div className="md:flex xl:px-32 lg:px-20 justify-between px-5 relative">
        <div className="lg:w-1/2 md:pt-60 pt-52">
          <div className="lg:text-5xl text-3xl font-bold text-white">
            Digital Voting{" "}
          </div>
          <div className="lg:text-6xl text-4xl font-bold text-light-green text-yellow-400">
            Revolution!
          </div>
          <div className="md:text-lg text-sm  mt-5 text-gray-200">
            Welcome to decentralized voting application
          </div>
          <button
            className="btn-green mt-5 md:text-lg text-sm px-10 py-2 font-semibold bg-black border-2 border-gray-200 text-white"
            onClick={() => connectWallet()}
          >
            Login Metamask
          </button>
        </div>
        <div className=" pt-40 hidden md:block">
          <img
            src="/images/eth.gif"
            width={380}
            height="100"
            alt="exaview logo"
            className="lg:w-2/3 block mx-auto xl:w-9/12"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
