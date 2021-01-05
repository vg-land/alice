import "./style.css"

export interface ProcessBarProps {}

export const ProcessBar = (props: ProcessBarProps) => {
  return (
    <div>
      <div
        className="bg-white rounded-lg w-72 shadow block p-4 m-auto"
        {...props}
      >
        <div className="w-full h-2 bg-gray-400 rounded-full mt-3">
          <div className="w-3/4 h-full text-center text-xs text-white bg-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
