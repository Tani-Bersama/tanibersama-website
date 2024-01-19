/* eslint-disable react/prop-types */
import ArrowR from "./ArrowR"

const Point = ({text}) => {
  return (
    <div className="flex flex-row gap-1 items-center">
        <ArrowR/>
        {text}
    </div>
  )
}

export default Point