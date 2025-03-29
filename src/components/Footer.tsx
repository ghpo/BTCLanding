import React from 'react'
import { Bitcoin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center mb-6">
            <Bitcoin className="mr-3 text-orange-500" size={36} />
            <h3 className="text-2xl font-bold">BitcoinPro</h3>
          </div>
          <p className="text-gray-400">
            Empowering global financial transactions through 
            decentralized, transparent technology.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-orange-500 transition">Home</a></li>
            <li><a href="#lightning-network" className="hover:text-orange-500 transition">Lightning Network</a></li>
            <li><a href="#use-cases" className="hover:text-orange-500 transition">Use Cases</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-6">Legal</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-orange-500 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Disclaimer</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-500">
          © {new Date().getFullYear()} BitcoinPro. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
