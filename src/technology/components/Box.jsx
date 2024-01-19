/* eslint-disable react/prop-types */
const Box = ({text, color}) => {
  return (
    <div className={`
        ${color}
        text-white 
        w-[169px] 
        h-[64px]
        flex
        text-center
        text-sm
        justify-center
        items-center
        font-medium
        `}>
        {text}
    </div>
  )
}

export default Box