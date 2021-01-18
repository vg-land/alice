import React from "react"

interface Props {}

const weather = {
  weatherList: [
    {
      date: "03/21",
      maxTemperature: "19",
      weatherType: "14",
      airQuality: "2",
      dayOrNight: null,
      windForce: "4-5",
      updateTime: null,
      qualityLevel: "良",
      highlight: true,
      windDescription: "东北",
      pm25: "61",
      minTemperature: "10",
      weekDay: "周四",
      temperature: "15",
      weather: "中雨",
      dateDesp: "今天",
    },
    {
      date: "03/22",
      maxTemperature: "11",
      weatherType: "9",
      airQuality: null,
      dayOrNight: null,
      windForce: "3",
      updateTime: null,
      qualityLevel: null,
      highlight: false,
      windDescription: "东北",
      pm25: null,
      minTemperature: "8",
      weekDay: "周五",
      temperature: null,
      weather: "阴",
      dateDesp: "明天",
    },
    {
      date: "03/23",
      maxTemperature: "15",
      weatherType: "0",
      airQuality: null,
      dayOrNight: null,
      windForce: "3",
      updateTime: null,
      qualityLevel: null,
      highlight: false,
      windDescription: "东北",
      pm25: null,
      minTemperature: "7",
      weekDay: "周六",
      temperature: null,
      weather: "晴",
      dateDesp: "后天",
    },
  ],
}

const WeatherCard: React.FC<Props> = (props) => {
  return (
    <div className="overflow-hidden rounded-lg h-90 w-80 cursor-pointer relative">
      <div className="relative bg-blue-500">
        <img
          alt="blog photo"
          src="//img.alicdn.com/tfs/TB1wPIThf6H8KJjy0FjXXaXepXa-608-193.png"
          className="max-h-40 w-full object-cover"
        />
        {weather.weatherList
          .filter((item) => item.dateDesp === "今天")
          .map((item) => (
            <div
              className="absolute left-0 right-0 top-0 bottom-0 p-4 flex items-center justify-between text-white"
              key={item.date}
            >
              <div className="">
                <p className="text-2xl">
                  {item.minTemperature}~{item.maxTemperature}℃
                </p>
                <div className="flex space-x-2 items-center">
                  <span>{item.weather}</span>
                  <div className="bg-yellow-400 text-white px-1 rounded">
                    {item.qualityLevel}
                  </div>
                </div>
                <p className="space-x-1">
                  <span>{item.dateDesp}</span>
                  <span>{item.date}</span>
                </p>
              </div>
              <div className="w-16 h-16">
                <img
                  src={`/weather/white/${item.weatherType}@2x.png`}
                  alt="weather-icon"
                  className="w-full"
                />
              </div>
            </div>
          ))}
      </div>
      <div className="bg-white dark:bg-gray-800 w-full p-4 relative space-y-2">
        {weather.weatherList
          .filter((item) => item.dateDesp !== "今天")
          .map((item) => (
            <div
              className="flex items-center text-gray-800 space-x-4"
              key={item.date}
            >
              <div className="flex-2">
                {item.weekDay}
                {item.date}
              </div>
              <div className="flex-2">
                {item.minTemperature}~{item.maxTemperature}℃
              </div>
              <div className="w-6 h-6">
                <img
                  src={`/weather/white/${item.weatherType}@2x.png`}
                  alt="weather-icon"
                  className="w-full"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default WeatherCard
