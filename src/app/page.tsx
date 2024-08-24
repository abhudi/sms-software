import Link from 'next/link';

const Homepage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gray-100">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg-home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Welcome to AbhisCool</h1>
        <Link href="/admin" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Click here to go to the Admin Panel
        </Link>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </div>
  );
}

export default Homepage