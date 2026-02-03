export default function Footer() {
  return (
    <footer className="w-screen bg-gray-900 text-white ml-0">
      <div className="  px-20 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left */}
          <div className="">
            <h2 className="text-3xl font-bold mb-4">
              A veterinary you and your little friend can trust
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We provide pet owners with trusted, 100% vet-reviewed content and
              resources for every stage of their pet’s life.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-20">
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white">Grooming</li>
                <li className="hover:text-white">Bathing</li>
                <li className="hover:text-white">Nutrition</li>
                <li className="hover:text-white">Wellness</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white">About Us</li>
                <li className="hover:text-white">Our Vets</li>
                <li className="hover:text-white">Partners</li>
                <li className="hover:text-white">Contact</li>
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="max-w-sm">
            <p className="text-xl font-semibold mb-4">
              🐾 For cats, dogs & more
            </p>
            <p className="text-gray-400">
              Because every little friend deserves care backed by truth, safety,
              and love.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} YourVet. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
