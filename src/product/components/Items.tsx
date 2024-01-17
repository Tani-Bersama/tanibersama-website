import React from "react";

interface ItemsProps {
    title : string;
    description? : string;
}

const Items: React.FC<ItemsProps> = ({title, description}) => {
  return (
    <div 
        className="
            relative
            grid 
            auto-rows-min
            grid-rows-2
            gap-7
            ">
                <div 
                    className="
                        row-start-1
                        flex
                        justify-center
                        ">
                    <div 
                className="
                    bg-[#5EBB47] 
                    w-36
                    h-36
                    rounded-full
                    ">
                    </div>
                </div>
                <div className="flex justify-center items-center flex-col row-start-2 h-fit mb-0 pb-0">
                    <p 
                        className="
                            font-medium
                            text-center
                            text-md
                            relative
                            mb-4
                            max-w-[270px]
                            ">
                        {title}
                    </p>
                    <p className="text-sm text-center max-w-[300px]">
                        {description}
                    </p>
                </div>
    </div>
  )
}

export default Items