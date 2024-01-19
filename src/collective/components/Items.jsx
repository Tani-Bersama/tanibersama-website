/* eslint-disable react/prop-types */

import Line from "./Line"

const Items = (props) => {
    var text = props.text
  return (
    <div className="flex flex-col justify-center items-center text-center gap-4 mb-4">
        <div className="w-[292px] h-auto">
            {text}
        </div>
        <Line/>
    </div>
  )
}

export default Items