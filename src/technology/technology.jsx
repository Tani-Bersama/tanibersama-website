import Layout from "../Layout";
import Arrow from "./components/Arrow";
import Box from "./components/Box";
import BoxItem from "./components/BoxItem";
import DescriptionText from "./components/DescriptionText";
import Point from "./components/Point";

export default function Technology() {
  return (
    <Layout>
      <div className="p-16">
        <div className="flex flex-col">
          <p className="font-bold text-xl lg:text-[24px]">
            IT FOR UPSTREAM AGRICULTURE INDUSTRY
          </p>
          <p className="text-md lg:text-[18px]"> 
            Sustained high productivity on big scale areas
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-wrap gap-1 mt-10 justify-center">
            <div className="grid grid-flow-row-dense gap-1 grid-cols-2 grid-rows-2 lg:grid-rows-4">
              <Box text="Area Luas" color={"bg-[#45A32E]"}/>
              <Box text="Area Luas" color={"bg-[#45A32E] "}/>
              <Box text="Data Lahan" color={"bg-[#45A32E] "}/>
              <Box text="Data Lahan" color={"bg-[#45A32E] "}/>
            </div>
            <div className="grid grid-flow-row-dense gap-1 grid-cols-2 grid-rows-4">
              <Box text="Data test/monitoring lahan dan survey" color={"bg-[#5EBB47]"}/>
              <Box text="Area Luas" color={"bg-[#5EBB47] "}/>
              <Box text="Data Lahan" color={"bg-[#5EBB47] "}/>
              <Box text="Data Lahan" color={"bg-[#5EBB47] "}/>
              <Box text="Data test/monitoring lahan dan survey" color={"bg-[#5EBB47]"}/>
              <Box text="Area Luas" color={"bg-[#5EBB47] "}/>
              <Box text="Data Lahan" color={"bg-[#5EBB47] "}/>
              <Box text="Data Lahan" color={"bg-[#5EBB47] "}/>
            </div>
            <div className="grid grid-flow-row-dense gap-1 grid-cols-2 grid-rows-4">
              <Box text="Data test/monitoring lahan dan survey" color={"bg-[#79D264]"}/>
              <Box text="Area Luas" color={"bg-[#79D264] "}/>
              <Box text="Data Lahan" color={"bg-[#79D264] "}/>
              <Box text="Data Lahan" color={"bg-[#79D264] "}/>
              <Box text="Data test/monitoring lahan dan survey" color={"bg-[#79D264]"}/>
              <Box text="Area Luas" color={"bg-[#79D264] "}/>
              <Box text="Data Lahan" color={"bg-[#79D264] "}/>
              <Box text="Data Lahan" color={"bg-[#79D264] "}/>
            </div>      
          </div>
          <Arrow/>
          <div className="flex flex-wrap gap-20">
            <div className="font-bold">
              Data Processing and Artificial Intelligence
            </div>
            <div className="flex flex-col">
              <Point text="Data input"/>
              <Point text="Data processing"/>
              <Point text="Knowledge management"/>
              <Point text="Analysis"/>
              <Point text="Prediction"/>
              <Point text="Recommendation"/>
              <Point text="Display/monitoring"/>
            </div>
          </div>
          <Arrow/>
          <div className="bg-transparent border border-[#45A32E] text-center font-semibold p-10">
            Sustained High Productivity on Every Block and Big Scale Areas
          </div>
          <hr className="w-5/12 h-[3px] bg-[#55A840] my-10 lg:my-28" />
          <div className="bg-[#5EBB47] text-white text-2xl font-bold text-center rounded-lg p-36 mb-20">
            Injeksi Teknologi untuk Peningkatan Produksi 
            dan Pengelolaan Rice-Estate Skala Luas
          </div>
          <div className="flex flex-wrap gap-16 text-center justify-center">
            <div className="grid grid-flow-row-dense gap-10 grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2">
              <BoxItem text="Panen lebih cepat dan lebih bagus"/>
              <BoxItem text="Semprot lebih cepat, serempak dan efektif"/>
              <BoxItem text="Olah lahan sempurna"/>
              <BoxItem text="Tanam lebih rapat dan lebih bagus"/>
            </div>
            <div className="grid grid-flow-row-dense gap-10 grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2">
              <BoxItem text="Panen lebih cepat dan lebih bagus"/>
              <BoxItem text="Semprot lebih cepat, serempak dan efektif"/>
              <BoxItem text="Olah lahan sempurna"/>
              <BoxItem text="Tanam lebih rapat dan lebih bagus"/>
            </div>
          </div>
          <div className="flex flex-wrap gap-32 mt-14 mb-28 justify-center">
            <DescriptionText 
              title="Konsolidasi Lahan"
              improvement="(Lebih bagus, lebih cepat/serempak, lebih mudah)"
              description="Problem yang diselesaikan: keterbatasan SDM 
              yang berkualitas dan keterbatasan alat mesin
               pertanian yang bagus."
              />
            <DescriptionText 
              title="Konsolidasi Lahan"
              improvement="(Lebih bagus, lebih cepat/serempak, lebih mudah)"
              description="Problem yang diselesaikan: keterbatasan SDM 
              yang berkualitas dan keterbatasan alat mesin
               pertanian yang bagus."
              />
          </div>
        </div>
      </div>
    </Layout>
  );
}
