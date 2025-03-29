import React from 'react'
import { ShieldCheck, BookOpen, FileText } from 'lucide-react'

const Compliance: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Transparent & Compliant Financial Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate the complex world of digital finance with confidence, 
            ensuring legal compliance and financial transparency.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <ShieldCheck className="text-green-500 mb-6" size={64} />
            <h3 className="text-2xl font-semibold mb-4">
              Legal Compliance
            </h3>
            <p className="text-gray-600">
              Stay informed about local regulations and tax requirements 
              for cryptocurrency transactions.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <BookOpen className="text-blue-500 mb-6" size={64} />
            <h3 className="text-2xl font-semibold mb-4">
              Educational Resources
            </h3>
            <p className="text-gray-600">
              Access comprehensive guides and materials to understand 
              Bitcoin and blockchain technology.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <FileText className="text-purple-500 mb-6" size={64} />
            <h3 className="text-2xl font-semibold mb-4">
              Transparent Reporting
            </h3>
            <p className="text-gray-600">
              Detailed transaction logs and reporting tools for 
              accurate financial tracking.
            </p>
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 italic">
            * This information is for educational purposes. 
            Always consult with a financial professional for personalized advice.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Compliance
