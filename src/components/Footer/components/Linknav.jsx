import { Link } from "react-router-dom"

const Linknav = () => {
  return (
    <div className="flex flex-col gap-2 text-white">
      <Link to="/" >
        Home
      </Link>
      <Link to="/collective" >
        Collective Farming
      </Link>
      <Link to="/product" >
        Product & Services
      </Link>
      <Link to="/technology" >
        Technology
      </Link>
      <Link to="/partners" >
        Partners
      </Link>
      <Link to="/about" >
        About Us
      </Link>
    </div>
  )
}

export default Linknav