import { Link } from 'react-router-dom'
import ApperIcon from '../components/ApperIcon'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="quiz-card p-8 sm:p-12">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-4 rounded-full">
              <ApperIcon name="AlertCircle" className="w-12 h-12 text-red-600" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-surface-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-surface-600 mb-8">
            Looks like this page got lost in the world of Bollywood! 
            Let's get you back to the quiz.
          </p>
          
          <Link 
            to="/" 
            className="quiz-button quiz-button-primary"
          >
            <ApperIcon name="Home" className="w-5 h-5 mr-2" />
            Back to Quiz
          </Link>
        </div>
      </div>
    </div>
  )
}