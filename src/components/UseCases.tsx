import React from 'react'
import { Briefcase, Laptop, Globe } from 'lucide-react'

const UseCases: React.FC = () => {
  const cases = [
    {
      icon: <Briefcase className="text-blue-500" size={64} />,
      title: "Freelancers & Contractors",
      description: "Receive instant, global payments without intermediary fees."
    },
    {
      icon: <Laptop className="text-green-500" size={64} />,
      title: "Digital Entrepreneurs",
      description: "Expand your business with borderless, low-cost transactions."
    },
    {
      icon: <Globe className="text-purple-500" size={64} />,
      title: "International Commerce",
      description: "Simplify cross-border transactions with minimal friction."
    }
  ]

  return (
    <section id="use-cases" className="bg-gradient-to-br from-gray-100 to-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Versatile Use Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bitcoin and Lightning Network offer transformative solutions 
            across various professional domains.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((useCase, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
            >
              <div className="flex justify-center mb-6">
                {useCase.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {useCase.title}
              </h3>
              <p className="text-gray-600">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases
