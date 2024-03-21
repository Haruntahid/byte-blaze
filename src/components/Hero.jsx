function Hero() {
  return (
    <>
      <div className="hero min-h-[calc(100vh-120px)] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-lg -mt-16">
            <h1 className="text-5xl font-bold">
              Welcome to{" "}
              <span className="bg-300% bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">
                ByteBlaze
              </span>
            </h1>
            <p className="py-6">
              ByteBlaze is the bridge between the complex world of technology
              and the curious minds eager to understand it
            </p>
            {/* buttons */}
            <a
              href="#_"
              className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
            >
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span className="relative text-secondary transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                Read Blogs
              </span>
            </a>
            <a
              href="#_"
              className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group ml-6"
            >
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span className="relative text-secondary transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                Bookmarks
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
