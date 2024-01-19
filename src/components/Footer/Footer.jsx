import Information from "./components/Information"
import Linknav from "./components/LinkNav"
import Logo from "./assets/logo.png"

const Footer = () => {
  return (
    <div 
        className="
            bg-[#5EBB47] 
            grid
            lg:grid-cols-3
            lg:grid-rows-1
            grid-rows-3
            lg:gap-32
            gap-8
            bottom-0
            w-full
            p-16
            ">
                <div className="row-start-1 lg:row-start-1 lg:col-start-1 justify-center lg:justify-self-end">
                    <img className="w-[124px] h-[137px]" src={Logo} alt="Logo" />
                </div>
                <div className="row-start-3 lg:row-start-1 lg:col-start-2">
                  <Information/>
                </div>
                <div className="row-start-2 lg:row-start-1 lg:col-start-3">
                  <Linknav/>
                </div>
    </div>
  )
}

export default Footer