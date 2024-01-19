/* eslint-disable react/prop-types */
const BoxItem = ({text}) => {
  return (
    <div>
        <div className="flex flex-col w-[199px]">
            <div className="bg-[#5EBB47] w-[199px] h-[149px]">
            </div>
            <p className="text-[18px]">
                {text}
            </p>
        </div>
    </div>
  )
}

export default BoxItem