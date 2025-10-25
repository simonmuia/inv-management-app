import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold text-gray-900 mb-6'>
            Inventory Management System
          </h1>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Welcome to the Inventory Management System! This application helps
            you manage your inventory efficiently, track stock levels, and
            streamline your supply chain processes.
          </p>
          <div className='flex gap-4 justify-center'>
            <Link
              href='/sign-in'
              className='bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors'>
              Sign In
            </Link>
            <Link
              href={"#"}
              className='bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-60 transition-colors'>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
