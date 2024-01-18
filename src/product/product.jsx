import Layout from "../Layout"
import Items from "./components/Items"

const Product = () => {
  return (
    <Layout>
        <div className="w-full">
        <div 
            className="
                bg-[#5EBB47] 
                w-full
                h-[300px] 
                flex 
                mb-32
                justify-center
                place-items-center
                ">
            <h1 
                className="
                    font-bold 
                    text-white 
                    text-2xl
                    ">
                PRODUCT AND SERVICES
            </h1>
        </div>
        <div className="flex justify-center">
            <div 
                className="
                    mt-4
                    mb-14
                    grid
                    lg:grid-cols-3  
                    md:grid-cols-2
                    grid-cols-1
                    content-start
                    px-60
                    auto-cols-auto
                    place-content-start
                    
                ">
                    <Items title="Konsolidasi Lahan" description="Lahan serentak satu hamparan, 
                    satu manajemen budidya"/>
                    <Items title="Teknologi IoT, aplikasi dan pendukung budidaya"/>
                    <Items 
                        title="Survey, perencanaan dan penjadwalan budidaya" />
                    <Items title="Pembiayaan Hamparan" description="Semua mendapatkan pembiayaan"/>
                    <Items 
                        title="Teknologi dan methode budidaya" 
                        description="GAP untuk mencapai produktivitas tinggi (> 10 ton/ha) secara berkelanjutan"/>
                    <Items title="Konsolidasi subkontraktor" description="Kualitas, dukungan dan kapasitasnya meningkat"/>
                    <Items title="On-farm management" description="Manajemen budidaya modern, terpadu dan terintegrrasi"/>
                    <Items title="Konsolidasi supplier dan vendor 
                        Untuk mendukung program" />
                    <Items title="Serap gabah dan konsolidasi offtaker"/>
                    <Items 
                        title="Monitoring, pendampingan dan supervisi" 
                        description="Semua pekerja dan subkontraktor yang terlibat "/>
                    <Items title="Logistic services"/>
                    <Items 
                        title="Mekanisasi pertanian" 
                        description="Lebih cepat, lebih baik, lebih mudah"/>
                    <div className="lg:col-span-3 flex justify-center">
                        <Items title="Benih unggul" />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Product