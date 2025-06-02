import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-toastify'
import ApperIcon from './ApperIcon'

const QUIZ_QUESTIONS = [
  // Easy Questions (1-10)
  {
    id: 1,
    text: "Which actor is known as the 'King of Bollywood'?",
    options: ["Shah Rukh Khan", "Salman Khan", "Aamir Khan", "Akshay Kumar"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "Actors",
    explanation: "Shah Rukh Khan is widely known as the 'King of Bollywood' or 'King Khan' due to his immense popularity and success."
  },
  {
    id: 2,
    text: "Which movie features the famous dialogue 'Mere paas maa hai'?",
    options: ["Sholay", "Deewaar", "Don", "Zanjeer"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "Dialogues",
    explanation: "This iconic dialogue is from the 1975 film 'Deewaar' starring Amitabh Bachchan and Shashi Kapoor."
  },
  {
    id: 3,
    text: "Who composed the music for the movie 'Dilwale Dulhania Le Jayenge'?",
    options: ["A.R. Rahman", "Jatin-Lalit", "Laxmikant-Pyarelal", "Shankar-Ehsaan-Loy"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "Music",
    explanation: "Jatin-Lalit composed the memorable music for DDLJ, including hits like 'Tujhe Dekha To' and 'Mehndi Laga Ke Rakhna'."
  },
  {
    id: 4,
    text: "Which actress is known as the 'Tragedy Queen' of Bollywood?",
    options: ["Madhubala", "Nutan", "Meena Kumari", "Waheeda Rehman"],
    correctAnswer: 2,
    difficulty: "easy",
    category: "Actors",
    explanation: "Meena Kumari earned the title 'Tragedy Queen' for her exceptional performances in emotional and tragic roles."
  },
  {
    id: 5,
    text: "In which year was the movie 'Sholay' released?",
    options: ["1973", "1975", "1977", "1979"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "Movies",
    explanation: "'Sholay' was released in 1975 and became one of the greatest Indian films of all time."
  },
  {
    id: 6,
    text: "Who directed the movie '3 Idiots'?",
    options: ["Karan Johar", "Rajkumar Hirani", "Rohit Shetty", "Imtiaz Ali"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "Directors",
    explanation: "Rajkumar Hirani directed '3 Idiots' (2009), which became one of the highest-grossing Indian films."
  },
  {
    id: 7,
    text: "Which song features the lyrics 'Kal ho naa ho'?",
    options: ["Kal Ho Naa Ho", "Kabhi Khushi Kabhie Gham", "My Name is Khan", "Kuch Kuch Hota Hai"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "Songs",
    explanation: "The title track 'Kal Ho Naa Ho' is from the 2003 movie of the same name starring Shah Rukh Khan."
  },
  {
    id: 8,
    text: "Who is known as the 'Perfectionist' of Bollywood?",
    options: ["Shah Rukh Khan", "Salman Khan", "Aamir Khan", "Hrithik Roshan"],
    correctAnswer: 2,
    difficulty: "easy",
    category: "Actors",
    explanation: "Aamir Khan is known as the 'Perfectionist' for his meticulous approach to filmmaking and acting."
  },
  {
    id: 9,
    text: "Which movie won the first National Film Award for Best Popular Film?",
    options: ["Mother India", "Mughal-E-Azam", "Pyaasa", "Do Bigha Zamin"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "Awards",
    explanation: "'Mother India' (1957) was the first film to win the National Film Award for Best Popular Film Providing Wholesome Entertainment."
  },
  {
    id: 10,
    text: "Who played the character of 'Gabbar Singh' in Sholay?",
    options: ["Amjad Khan", "Pran", "Amrish Puri", "Danny Denzongpa"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "Characters",
    explanation: "Amjad Khan played the iconic villain 'Gabbar Singh' in Sholay, delivering memorable dialogues like 'Kitne aadmi the?'"
  },

  // Medium Questions (11-20)
  {
    id: 11,
    text: "Which actress made her debut with the film 'Barsaat' in 1949?",
    options: ["Nargis", "Madhubala", "Nimmi", "Kamini Kaushal"],
    correctAnswer: 2,
    difficulty: "medium",
    category: "Debuts",
    explanation: "Nimmi made her debut with Raj Kapoor's 'Barsaat' in 1949 and went on to become a popular actress of the 1950s."
  },
  {
    id: 12,
    text: "Who wrote the screenplay for the movie 'Andaz Apna Apna'?",
    options: ["Rajkumar Santoshi", "Santosh Saroj", "Kamlesh Pandey", "Rumi Jaffery"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "Writers",
    explanation: "Rajkumar Santoshi, who also directed the film, wrote the screenplay for the cult classic 'Andaz Apna Apna'."
  },
  {
    id: 13,
    text: "Which film marked Amitabh Bachchan's debut as a producer?",
    options: ["Deewar", "Trishul", "Chupke Chupke", "Parwana"],
    correctAnswer: 2,
    difficulty: "medium",
    category: "Production",
    explanation: "'Chupke Chupke' (1975) was Amitabh Bachchan's first venture as a producer under his banner ABCL."
  },
  {
    id: 14,
    text: "In 'Lagaan', what was the duration of the British tax exemption bet?",
    options: ["2 years", "3 years", "5 years", "10 years"],
    correctAnswer: 1,
    difficulty: "medium",
    category: "Plot Details",
    explanation: "In 'Lagaan', if the villagers won the cricket match, they would be exempt from paying tax (lagaan) for three years."
  },
  {
    id: 15,
    text: "Who composed the music for 'Mughal-E-Azam'?",
    options: ["Naushad", "Shankar-Jaikishan", "S.D. Burman", "Madan Mohan"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "Music",
    explanation: "Naushad composed the magnificent music for 'Mughal-E-Azam', including classics like 'Pyar Kiya To Darna Kya'."
  },
  {
    id: 16,
    text: "Which actress won the National Award for 'Arth'?",
    options: ["Shabana Azmi", "Smita Patil", "Rekha", "Jaya Bhaduri"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "Awards",
    explanation: "Shabana Azmi won the National Film Award for Best Actress for her powerful performance in Mahesh Bhatt's 'Arth' (1982)."
  },
  {
    id: 17,
    text: "What was the original title of the movie 'Queen'?",
    options: ["Rani", "London Thumakda", "Queen", "Tanu Weds Manu"],
    correctAnswer: 2,
    difficulty: "medium",
    category: "Trivia",
    explanation: "'Queen' was always the intended title. The film was conceived with this title from the beginning by director Vikas Bahl."
  },
  {
    id: 18,
    text: "In which film did Madhuri Dixit and Anil Kapoor first work together?",
    options: ["Tezaab", "Ram Lakhan", "Parinda", "Virasat"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "Pairings",
    explanation: "Madhuri Dixit and Anil Kapoor first appeared together in 'Tezaab' (1988), which became a huge hit."
  },
  {
    id: 19,
    text: "Who directed the movie 'Bandit Queen'?",
    options: ["Shyam Benegal", "Shekhar Kapur", "Govind Nihalani", "Ketan Mehta"],
    correctAnswer: 1,
    difficulty: "medium",
    category: "Directors",
    explanation: "Shekhar Kapur directed the biographical film 'Bandit Queen' (1994) based on the life of Phoolan Devi."
  },
  {
    id: 20,
    text: "Which film featured the song 'Chaiyya Chaiyya'?",
    options: ["Dil Se", "Taal", "Guru", "Rockstar"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "Songs",
    explanation: "'Chaiyya Chaiyya' was featured in Mani Ratnam's 'Dil Se' (1998), famously shot on top of a moving train."
  },

  // Hard Questions (21-30)
  {
    id: 21,
    text: "Who was the first Indian to win an Academy Award?",
    options: ["Satyajit Ray", "Bhanu Athaiya", "A.R. Rahman", "Resul Pookutty"],
    correctAnswer: 1,
    difficulty: "hard",
    category: "Awards",
    explanation: "Bhanu Athaiya won the Academy Award for Best Costume Design for 'Gandhi' in 1983, becoming the first Indian to win an Oscar."
  },
  {
    id: 22,
    text: "Which was Guru Dutt's last film as a director?",
    options: ["Kaagaz Ke Phool", "Sahib Bibi Aur Ghulam", "Chaudhvin Ka Chand", "Pyaasa"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "Directors",
    explanation: "'Kaagaz Ke Phool' (1959) was Guru Dutt's last film as a director. Though commercially unsuccessful, it's now considered a masterpiece."
  },
  {
    id: 23,
    text: "In which year did Raj Kapoor's 'Awara' win the Grand Prix at Cannes?",
    options: ["1951", "1953", "1955", "It never won"],
    correctAnswer: 3,
    difficulty: "hard",
    category: "International Recognition",
    explanation: "'Awara' was nominated for the Grand Prix at Cannes in 1953 but didn't win. However, it gained international acclaim and was successful in many countries."
  },
  {
    id: 24,
    text: "Who was the cinematographer for 'Guide'?",
    options: ["Fali Mistry", "V.K. Murthy", "Subrata Mitra", "Radhoo Karmakar"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "Technical Crew",
    explanation: "Fali Mistry was the cinematographer for both the Hindi and English versions of 'Guide' (1965)."
  },
  {
    id: 25,
    text: "Which film marked the debut of playback singer Kishore Kumar?",
    options: ["Ziddi", "Andolan", "Shikari", "Madhubala"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "Music",
    explanation: "Kishore Kumar made his playback singing debut with the song 'Marne ki duayen kyon mangu' in 'Ziddi' (1948)."
  },
  {
    id: 26,
    text: "What was the budget of 'Mother India'?",
    options: ["₹25 lakhs", "₹35 lakhs", "₹55 lakhs", "₹75 lakhs"],
    correctAnswer: 2,
    difficulty: "hard",
    category: "Production Details",
    explanation: "'Mother India' (1957) was made on a budget of approximately ₹55 lakhs, which was considered very high for that time."
  },
  {
    id: 27,
    text: "Who composed the background score for 'Sholay'?",
    options: ["R.D. Burman", "Salil Chowdhury", "Shankar-Jaikishan", "Laxmikant-Pyarelal"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "Music",
    explanation: "R.D. Burman composed both the songs and the background score for 'Sholay', creating an iconic musical landscape."
  },
  {
    id: 28,
    text: "Which actress was originally chosen for 'Mughal-E-Azam' before Madhubala?",
    options: ["Nargis", "Suraiya", "Nimmi", "Kamini Kaushal"],
    correctAnswer: 1,
    difficulty: "hard",
    category: "Casting",
    explanation: "Suraiya was originally chosen to play Anarkali in 'Mughal-E-Azam', but due to various reasons, Madhubala was eventually cast."
  },
  {
    id: 29,
    text: "Who was the art director for 'Tumhari Sulu'?",
    options: ["Nitin Chandrakant Desai", "Subrata Chakraborty", "Amit Ray", "Wasiq Khan"],
    correctAnswer: 2,
    difficulty: "hard",
    category: "Technical Crew",
    explanation: "Amit Ray and Subrata Chakraborty were the production designers for 'Tumhari Sulu' (2017)."
  },
  {
    id: 30,
    text: "Which film holds the record for the longest theatrical run in India?",
    options: ["Dilwale Dulhania Le Jayenge", "Sholay", "Mother India", "Mughal-E-Azam"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "Records",
    explanation: "'Dilwale Dulhania Le Jayenge' ran for over 25 years at Mumbai's Maratha Mandir cinema, setting a world record for the longest theatrical run."
  }
]

export default function MainFeature() {
  const [gameState, setGameState] = useState('start') // start, playing, completed
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100

  const startQuiz = () => {
    setGameState('playing')
    setCurrentQuestionIndex(0)
    setUserAnswers([])
    setSelectedAnswer(null)
    setShowAnswer(false)
    setScore(0)
    setStartTime(Date.now())
    setEndTime(null)
    toast.success('Quiz started! Good luck! 🎬')
  }

const selectAnswer = (answerIndex) => {
    if (showAnswer) return
    setSelectedAnswer(answerIndex)
    
    // Immediately process the answer
    const isCorrect = answerIndex === currentQuestion.correctAnswer
    const newUserAnswers = [...userAnswers, {
      questionId: currentQuestion.id,
      selectedAnswer: answerIndex,
      isCorrect,
      question: currentQuestion
    }]
    
    setUserAnswers(newUserAnswers)
    setShowAnswer(true)
    
    if (isCorrect) {
      setScore(score + 1)
      toast.success('Correct! 🎉')
    } else {
      toast.error('Oops! That\'s not right 😅')
    }
    
    // Auto advance to next question after showing answer
    setTimeout(() => {
      if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setSelectedAnswer(null)
        setShowAnswer(false)
      } else {
        setGameState('completed')
        setEndTime(Date.now())
        toast.success('Quiz completed! 🏆')
      }
    }, 2000)
  }

  const restartQuiz = () => {
    setGameState('start')
    setCurrentQuestionIndex(0)
    setUserAnswers([])
    setSelectedAnswer(null)
    setShowAnswer(false)
    setScore(0)
    setStartTime(null)
    setEndTime(null)
  }

  const getScoreBreakdown = () => {
    const breakdown = { easy: 0, medium: 0, hard: 0 }
    userAnswers.forEach(answer => {
      if (answer.isCorrect) {
        breakdown[answer.question.difficulty]++
      }
    })
    return breakdown
  }

  const getTimeTaken = () => {
    if (startTime && endTime) {
      return Math.round((endTime - startTime) / 1000)
    }
    return 0
  }

  if (gameState === 'start') {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="quiz-card p-6 sm:p-8 lg:p-12"
        >
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-30"></div>
                <div className="relative bg-gradient-to-r from-primary to-secondary p-6 rounded-full">
                  <ApperIcon name="Play" className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                </div>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
              Ready for the Ultimate Bollywood Challenge?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                <div className="difficulty-badge difficulty-easy mb-2">
                  <ApperIcon name="Smile" className="w-4 h-4 mr-1" />
                  Easy
                </div>
                <p className="text-sm text-surface-600">10 questions for casual fans</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl border border-yellow-200">
                <div className="difficulty-badge difficulty-medium mb-2">
                  <ApperIcon name="Zap" className="w-4 h-4 mr-1" />
                  Medium
                </div>
                <p className="text-sm text-surface-600">10 questions for regular fans</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border border-red-200">
                <div className="difficulty-badge difficulty-hard mb-2">
                  <ApperIcon name="Flame" className="w-4 h-4 mr-1" />
                  Hard
                </div>
                <p className="text-sm text-surface-600">10 questions for true buffs</p>
              </div>
            </div>

            <div className="bg-surface-50 rounded-xl p-6 mb-8 text-left max-w-2xl mx-auto">
              <h3 className="font-semibold text-surface-900 mb-4 flex items-center">
                <ApperIcon name="Info" className="w-5 h-5 mr-2 text-primary" />
                Quiz Instructions
              </h3>
              <ul className="space-y-2 text-surface-700">
                <li className="flex items-start">
                  <ApperIcon name="CheckCircle" className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                  30 multiple choice questions covering movies, actors, songs, and trivia
                </li>
                <li className="flex items-start">
                  <ApperIcon name="Clock" className="w-4 h-4 mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                  Take your time - there's no time limit
                </li>
                <li className="flex items-start">
                  <ApperIcon name="Award" className="w-4 h-4 mr-2 mt-0.5 text-purple-500 flex-shrink-0" />
                  Get detailed explanations for each answer
                </li>
                <li className="flex items-start">
                  <ApperIcon name="BarChart" className="w-4 h-4 mr-2 mt-0.5 text-orange-500 flex-shrink-0" />
                  See your performance breakdown at the end
                </li>
              </ul>
            </div>

            <button
              onClick={startQuiz}
              className="quiz-button quiz-button-primary text-lg px-8 py-4 animate-bounce-subtle"
            >
              <ApperIcon name="Rocket" className="w-6 h-6 mr-2" />
              Start the Quiz
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  if (gameState === 'completed') {
    const scoreBreakdown = getScoreBreakdown()
    const timeTaken = getTimeTaken()
    const percentage = Math.round((score / QUIZ_QUESTIONS.length) * 100)

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="quiz-card p-6 sm:p-8 lg:p-12"
        >
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-40"></div>
                <div className="relative bg-gradient-to-r from-primary to-secondary p-6 rounded-full">
                  <ApperIcon name="Trophy" className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                </div>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-4">
              Quiz Completed! 🎉
            </h2>

            <div className="text-4xl sm:text-6xl font-bold text-primary mb-2">
              {score}/{QUIZ_QUESTIONS.length}
            </div>
            <div className="text-lg sm:text-xl text-surface-600 mb-8">
              {percentage}% correct • {Math.floor(timeTaken / 60)}m {timeTaken % 60}s
            </div>

            {/* Performance Message */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-surface-900 mb-2">
                {percentage >= 90 ? '🏆 Bollywood Mastermind!' : 
                 percentage >= 70 ? '🌟 Bollywood Expert!' :
                 percentage >= 50 ? '🎬 Bollywood Fan!' :
                 '📚 Keep Watching!'}
              </h3>
              <p className="text-surface-700">
                {percentage >= 90 ? 'Outstanding! You\'re a true Bollywood encyclopedia!' : 
                 percentage >= 70 ? 'Great job! You really know your Bollywood!' :
                 percentage >= 50 ? 'Not bad! You\'ve got good Bollywood knowledge!' :
                 'Keep watching more Bollywood movies to improve your score!'}
              </p>
            </div>

            {/* Score Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                <div className="difficulty-badge difficulty-easy mb-2">Easy</div>
                <div className="text-2xl font-bold text-green-800">{scoreBreakdown.easy}/10</div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl border border-yellow-200">
                <div className="difficulty-badge difficulty-medium mb-2">Medium</div>
                <div className="text-2xl font-bold text-yellow-800">{scoreBreakdown.medium}/10</div>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border border-red-200">
                <div className="difficulty-badge difficulty-hard mb-2">Hard</div>
                <div className="text-2xl font-bold text-red-800">{scoreBreakdown.hard}/10</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={restartQuiz}
                className="quiz-button quiz-button-primary"
              >
                <ApperIcon name="RotateCcw" className="w-5 h-5 mr-2" />
                Take Quiz Again
              </button>
              
              <button
                onClick={() => {
                  const text = `I scored ${score}/${QUIZ_QUESTIONS.length} (${percentage}%) on the BollyBrains Bollywood Quiz! 🎬✨`
                  if (navigator.share) {
                    navigator.share({ text })
                  } else {
                    navigator.clipboard.writeText(text)
                    toast.success('Result copied to clipboard!')
                  }
                }}
                className="quiz-button quiz-button-secondary"
              >
                <ApperIcon name="Share2" className="w-5 h-5 mr-2" />
                Share Result
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <motion.div
        key={currentQuestionIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="quiz-card p-6 sm:p-8 lg:p-12"
      >
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <div className="text-sm text-surface-600 mb-2 sm:mb-0">
              Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}
            </div>
            <div className={`difficulty-badge difficulty-${currentQuestion.difficulty}`}>
              <ApperIcon 
                name={currentQuestion.difficulty === 'easy' ? 'Smile' : 
                      currentQuestion.difficulty === 'medium' ? 'Zap' : 'Flame'} 
                className="w-4 h-4 mr-1" 
              />
              {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
            </div>
          </div>
          
          <div className="progress-bar">
            <motion.div 
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question */}
<div className="mb-6">
          <div className="text-xs uppercase tracking-widest text-accent mb-3 font-bold">
            {currentQuestion.category}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-surface-900 leading-tight">
            {currentQuestion.text}
          </h3>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index
            const isCorrect = index === currentQuestion.correctAnswer
            const isIncorrect = showAnswer && isSelected && !isCorrect
            
            let optionClass = 'quiz-option'
            if (showAnswer) {
              if (isCorrect) {
                optionClass += ' quiz-option-correct'
              } else if (isIncorrect) {
                optionClass += ' quiz-option-incorrect'
              }
            } else if (isSelected) {
              optionClass += ' quiz-option-selected'
            }

            return (
              <motion.button
                key={index}
                whileHover={{ scale: showAnswer ? 1 : 1.02 }}
                whileTap={{ scale: showAnswer ? 1 : 0.98 }}
                onClick={() => selectAnswer(index)}
                className={optionClass}
                disabled={showAnswer}
              >
                <div className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-surface-100 flex items-center justify-center text-sm font-medium mr-4 flex-shrink-0">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-left">{option}</span>
                  {showAnswer && isCorrect && (
                    <ApperIcon name="CheckCircle" className="w-5 h-5 text-green-600 ml-auto flex-shrink-0" />
                  )}
                  {showAnswer && isIncorrect && (
                    <ApperIcon name="XCircle" className="w-5 h-5 text-red-600 ml-auto flex-shrink-0" />
                  )}
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Explanation */}
        <AnimatePresence>
          {showAnswer && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8"
            >
              <div className="flex items-start">
                <ApperIcon name="Lightbulb" className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-blue-900 mb-1">Explanation</h4>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  )
}