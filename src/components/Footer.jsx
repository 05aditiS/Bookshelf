export default function Footer() {
  return (
    <footer className="bg-[#3b2f2f] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BookNook</h3>
            <p>Your favorite online bookstore.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#a47551]">Home</a></li>
              <li><a href="#" className="hover:text-[#a47551]">Books</a></li>
              <li><a href="#" className="hover:text-[#a47551]">Reviews</a></li>
              <li><a href="#" className="hover:text-[#a47551]">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#a47551]">Contact</a></li>
              <li><a href="#" className="hover:text-[#a47551]">FAQs</a></li>
              <li><a href="#" className="hover:text-[#a47551]">Shipping</a></li>
              <li><a href="#" className="hover:text-[#a47551]">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#a47551]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#a47551]">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#5e4636] mt-8 pt-8 text-center">
          <p>Built with ❤️ by Aditi Sharma</p>
        </div>
      </div>
    </footer>
  )
}