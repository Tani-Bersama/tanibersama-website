import Layout from "../Layout"
import Items from "./components/Items"
import collective from "./assets/collective.png"
import table from "./assets/table.png"

const Collective = () => {
  return (
    <Layout>
      <div className="p-4 mt-36 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="font-bold text-[24px]">COLLECTIVE FARMING: The Future of Agriculture Upstream</p>
          <p className="font-bold text-[18px] text-[#55A840]"> 
            Penanganan krisis dan pengembangan  
            &nbsp;
            <span className="font-normal">
               industri hulu pertanian
            </span>
          </p>
        </div>
        <div className="
          grid
          grid-row-2
          grid-cols-1
          lg:grid-rows-1
          lg:grid-cols-2
          mt-32
        ">
          <div className="
            flex
            flex-col 
            text-md
            lg:text-[18px]       
          ">
            <Items text="Krisis struktur kerja: > 80% oleh “un-consolidated subcontractors”"/>
            <Items text="Krisis peran petani: lebih berperan sebagai “landlord” atau “foreman”"/>
            <Items text="Krisis kebersamaan: sendiri-sendiri dan tidak terkoordinasi"/>
            <Items text="Krisis profil petani: usia tua, rendah pendidikan, lahan sempit, bukan pemilik dan tersebar"/>
            <Items text="Krisis NPL: tingginya kredit (hutang) macet di sektor pertanian"/>
            <Items text="Krisis pembiayaan: sulit mendapatkan modal kerja"/>
            <Items text="Krisis produktivitas: Resiko gagal tinggi dan produktivitas rendah"/>
            <Items text="Krisis Kualitas Tanah: degradasi kualitas tanah yang tidak tertangani"/>
            <Items text="Krisis Inovasi: sulitnya implementasi teknologi dan metoda/inisiatif baru"/>
          </div>
          <div className="p-10">
            <div className="
              bg-[#55A840] 
              flex 
              flex-col 
              text-white 
              lg:w-[490px]
              lg:h-[528px] 
              w-auto
              h-auto
              p-16
              text-sm
              lg:text-[18px]
              justify-center
              items-center
              text-center
              gap-7
              ">
              <div className="w-[405px] h-[66px]">
                Petani makin sulit keluar dari “lingkaran setan”: 
                <br/>
                - Produktivitas rendah
                <br/>
                - Hutang ke berbagai pihak
              </div>
              <div className="w-[277px] h-[44px] mt-4">
                Petani makin banyak kehilangan sawahnya
              </div>
              <div className="w-[203px] h-[44px]">
                Kualitas SDM pertanian makin menurun
              </div>
              <div className="w-[256px] h-[44px]">
                Lahan produktif makin sempit
              </div>
              <div className="w-[273px] h-[44px]">
                Pertanian hulu: investasi/ bisnis yang buruk/merugikan
              </div>
              <div className="w-[289px] h-[44px]">
                Produksi beras makin kecil dan ancaman krisis ketahanan pangan
              </div>
            </div>
          </div>
        </div>
        <hr className="w-5/12 h-[3px] bg-[#55A840] my-10 lg:my-28" />
        <div className="flex flex-col justify-center items-center text-center">
          <p className="font-bold text-xl lg:text-[24px]">On-Farm Management & Collective Farming</p>
          <p className="text-md lg:text-[18px]"> 
            Manajemen lahan hamparan, terpadu, serempak dan penerapan GAP (Good Agriculture Practice)
          </p>
        </div>
        <div>
          <img className="object-scale-down w-[945px] mt-4 lg:mt-10 h-[589px]" src={collective} alt="Collective" />
        </div>
        <hr className="w-5/12 h-[3px] bg-[#55A840] my-10 lg:my-28" />
        <div className="flex flex-col justify-center items-center text-center">
          <p className="font-bold text-lg lg:text-[24px]">Collective Farming: The Effective Approach</p>
          <p className="text-md lg:text-[18px]"> 
            Pendekatan “manajemen lahan terkonsolidasi” jauh lebih efektif untuk meningkatkan produksi 
            dan mencegah kegagalan panen
          </p>
        </div>
        <div className="mb-28 mt-10">
          <img className="object-scale-down rounded-lg w-[1082px] mt-10 h-[600px]" src={table} alt="Table" />
        </div>
      </div>
    </Layout>
  )
}

export default Collective