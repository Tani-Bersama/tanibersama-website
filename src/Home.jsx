import { Link } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./components/Footer/Footer";
import UpCard from "./components/home/UpCard";
import SecondTitle from "./components/home/SecondTitle.";
import CrisisCard from "./components/home/CrisisCard";
import ArrowRight from "./components/home/ArrowRight";
import EffectCard from "./components/home/EffectCard";
import FourthCard from "./components/home/FourthCard";
import FifthCard from "./components/home/FifthCard";

function Home() {
  return (
    <Layout>
      <div className="flex bg-[#55A840] text-white h-[300px] font-all">
        <div className="flex flex-col m-auto mx-10">
          <h1 className="font-bold text-[18px]">ON FARM MANAGEMENT</h1>
          <p className="max-w-[800px] text-[14px]">
            Manajemen budidaya modern (on-farm management) sudah sangat urgent
            dijalankan sehingga praktek budidaya yang bagus (good agriculture
            practice = GAP) dapat diterapkan secara komprehensif dan
            berkesinambungan.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-x-10 my-16">
        <UpCard
          number={"1"}
          title={"Solid"}
          desc="Perencanana, eksekusi dan perbaikan yang 
                menyeluruh, komprehensif dan berkesinambungan"
        />
        <UpCard
          number={"2"}
          title={"Standard Operating Procedure (SOP)"}
          desc="SOP berdasarkan GAP yang dijalankan secara 
                konsisten dan terstandardisasi"
        />
        <UpCard
          number={"3"}
          title={"Kecukupan sumberdaya"}
          desc="SDM, peralatan, pendanaan, tenaga ahli, 
                dukungan dari vendor dan subkontraktor"
        />
        <UpCard
          number={"4"}
          title={"Injeksi teknologi dan methode"}
          desc="Penerapan teknologi dan methode terbaik"
        />
      </div>
      <div className="my-16 mx-8">
        <SecondTitle />
        <div className="flex justify-center items-center gap-x-[90px]">
          <CrisisCard />
          <ArrowRight />
          <EffectCard />
        </div>
      </div>
      <FourthCard />
      <FifthCard />
    </Layout>
  );
}

export default Home;
