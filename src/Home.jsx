import { Link } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./components/Footer/Footer";

function Home() {
  return (
    <Layout>
      <div className="text-center">
        <div className="">website under construction</div>
        <Link to="/about">about</Link>
      </div>
    </Layout>
  );
}

export default Home;
