/* eslint-disable react/prop-types */

const DescriptionText = ({title, improvement , description}) => {
  return (
    <div className="text-center w-[435px]">
        <div className="text-[#45A32E] text-[22px] font-semibold">
            {title}
        </div>
        <div className="text-[18px] font-semibold">
            {improvement}
        </div>
        <div className="text-[18px]">
            {description}
        </div>
    </div>
  )
}

export default DescriptionText