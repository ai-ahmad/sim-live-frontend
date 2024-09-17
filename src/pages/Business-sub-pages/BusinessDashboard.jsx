import { useState, useRef } from 'react'
import { Motion, spring } from 'react-motion'
import { BarChart as BarChartIcon, TrendingUp, DollarSign, Users, Building, ShoppingBag, Coffee, Dumbbell, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Custom Card components
const Card = ({ className, children, ...props }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`} {...props}>
    {children}
  </div>
)

const CardHeader = ({ className, children }) => (
  <div className={`p-4 ${className}`}>{children}</div>
)

const CardTitle = ({ className, children }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
)

const CardContent = ({ className, children }) => (
  <div className={`p-4 ${className}`}>{children}</div>
)

// Custom Progress component
const Progress = ({ value, className }) => (
  <div className={`w-full bg-gray-200 rounded-full ${className}`}>
    <div
      className="bg-blue-600 rounded-full h-full transition-all duration-300 ease-in-out"
      style={{ width: `${value}%` }}
    />
  </div>
)

export default function BusinessDashboard() {
  const [hoveredBusiness, setHoveredBusiness] = useState(null)
  const sliderRef = useRef(null)

  const user = {
    name: "Bekzod Mirzaaliyev",
    avatar: "https://yt3.googleusercontent.com/ytc/AIdro_kQ0De5HtsKcFUOAxSII-Roa7VwT4N4PJOgNNrGd8lsyjk=s900-c-k-c0x00ffffff-no-rj",
    totalIncome: 15000000
  }
  

  const allBusinesses = [
    { id: 1, name: 'IT Kompaniya', income: 5000000, icon: Building, color: 'from-blue-500 to-blue-600' },
    { id: 2, name: 'Online Do\'kon', income: 4000000, icon: ShoppingBag, color: 'from-green-500 to-green-600' },
    { id: 3, name: 'Restoran', income: 3000000, icon: Coffee, color: 'from-yellow-500 to-yellow-600' },
    { id: 4, name: 'Fitnes Markaz', income: 2000000, icon: Dumbbell, color: 'from-red-500 to-red-600' },
    { id: 5, name: 'Ta\'lim Markazi', income: 1000000, icon: GraduationCap, color: 'from-purple-500 to-purple-600' },
  ]

  const topBusinesses = allBusinesses.slice(0, 3)

  const totalTopIncome = topBusinesses.reduce((sum, business) => sum + business.income, 0)

  const chartData = topBusinesses.map(business => ({
    name: business.name,
    daromad: business.income
  }))

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const goToPrev = () => {
    sliderRef.current.slickPrev()
  }

  const goToNext = () => {
    sliderRef.current.slickNext()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 sm:p-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full border-4 border-white mr-4" />
                <div>
                  <h1 className="text-3xl font-bold">{user.name}</h1>
                  <p className="text-xl opacity-80">Tadbirkor</p>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <p className="text-sm opacity-80">Umumiy oylik daromad</p>
                <p className="text-4xl font-bold">{user.totalIncome.toLocaleString()} so'm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Топ-3 прибыльных бизнеса</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {topBusinesses.map((business, index) => (
              <Motion key={business.id} style={{ scale: spring(hoveredBusiness === index ? 1.05 : 1) }}>
                {interpolatedStyle => (
                  <Card 
                    className="transition-all duration-300 ease-in-out cursor-pointer"
                    style={{
                      transform: `scale(${interpolatedStyle.scale})`,
                    }}
                    onMouseEnter={() => setHoveredBusiness(index)}
                    onMouseLeave={() => setHoveredBusiness(null)}
                  >
                    <CardHeader className={`bg-gradient-to-r ${business.color} text-white`}>
                      <div className="flex justify-between items-center">
                        <CardTitle>{business.name}</CardTitle>
                        <business.icon className="w-8 h-8" />
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="text-2xl font-bold mb-2">{business.income.toLocaleString()} so'm</div>
                      <Progress value={(business.income / totalTopIncome) * 100} className="h-2 mb-2" />
                      <p className="text-sm text-gray-500">от общего дохода {((business.income / totalTopIncome) * 100).toFixed(1)}%</p>
                    </CardContent>
                  </Card>
                )}
              </Motion>
            ))}
          </div>
        </div>

        <div className="mb-8 bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Сравнение доходов от бизнеса</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="daromad" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mb-8 bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Бизнес-показатели</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="flex flex-col items-center pt-6">
                <DollarSign className="w-8 h-8 mb-4 text-green-500" />
                <p className="text-xl font-semibold">{user.totalIncome.toLocaleString()} uzs</p>
                <p className="text-sm text-gray-500">Валовая прибыль</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center pt-6">
                <BarChartIcon className="w-8 h-8 mb-4 text-blue-500" />
                <p className="text-xl font-semibold">{allBusinesses.length}</p>
                <p className="text-sm text-gray-500">Активный бизнес</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center pt-6">
                <TrendingUp className="w-8 h-8 mb-4 text-purple-500" />
                <p className="text-xl font-semibold">15%</p>
                <p className="text-sm text-gray-500">Темпы роста</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center pt-6">
                <Users className="w-8 h-8 mb-4 text-yellow-500" />
                <p className="text-xl font-semibold">1,234</p>
                <p className="text-sm text-gray-500">Количество сотрудников</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 relative">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Все ваши предприятия</h2>
          <button 
            onClick={goToPrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-4xl text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none hidden md:block z-10"
          >
            &lt;
          </button>
          <button 
            onClick={goToNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-4xl text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none hidden md:block z-10"
          >
            &gt;
          </button>
          <Slider ref={sliderRef} {...sliderSettings}>
            {allBusinesses.map((business) => (
              <div key={business.id} className="px-2">
                <Card className="h-full">
                  <CardHeader className={`bg-gradient-to-r ${business.color} text-white`}>
                    <div className="flex justify-between items-center">
                      <CardTitle>{business.name}</CardTitle>
                      <business.icon className="w-8 h-8" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="text-xl font-bold mb-2">{business.income.toLocaleString()} uzs</div>
                    <p className="text-sm text-gray-500">Ежемесячный доход</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}