import Information from "./components/Information"
import Linknav from "./components/LinkNav"

const Footer = () => {
  return (
    <div 
        className="
            bg-[#5EBB47] 
            grid
            grid-cols-3
            bottom-0
            w-full
            p-16
            ">
                <div className="col-start-1">
                    Logo
                </div>
                <div className="col-start-2 w-[294px]">
                  <Information/>
                </div>
                <div className="col-start-3">
                  <Linknav/>
                </div>
    </div>
  )
}

export default Footer