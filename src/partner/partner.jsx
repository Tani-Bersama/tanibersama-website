import React from "react";
import Layout from "../Layout";
import MitraCard from "./components/MitraCard";

export default function Partner() {
  return (
    <Layout>
      <div className="">
        <div>KEMITRAAN DALAM EKOSISTEM COLLECTIVE FARMING</div>
        <div className="flex flex-wrap">
          <MitraCard title="PETANI-PETANI">
            Petani/Kelompok Tani di Karawang, Bekasi, Subang, Indramayu, dan
            daerah-daerah sentra tanaman padi lainnya.
          </MitraCard>
          <MitraCard title="BANK-BANK PENYALUR KUR">
            <img
              src="src/partner/assets/images/bank/bri.jpg"
              alt="bri"
              className="w-auto h-[80px]"
            />
            <img
              src="src/partner/assets/images/bank/bsi.jpg"
              alt="bsi"
              className="w-auto h-[80px]"
            />
            <img
              src="src/partner/assets/images/bank/sinarmas.png"
              alt="sinarmas"
              className="w-auto h-[80px]"
            />
          </MitraCard>
          <MitraCard title="OFFTAKER - PABRIK BERAS">
            <img
              src="src/partner/assets/images/offtaker/agrojabar.jpg"
              alt="agrojabar"
              className="w-auto h-[100px]"
            />
            <img
              src="src/partner/assets/images/offtaker/foodstation.png"
              alt="foodstation"
              className="w-auto h-[60px]"
            />
            <img
              src="src/partner/assets/images/offtaker/pip.png"
              alt="pip"
              className="w-auto h-[80px]"
            />
            <img
              src="src/partner/assets/images/offtaker/wilmar.png"
              alt="wilmar"
              className="w-auto h-[75px]"
            />
          </MitraCard>
          <MitraCard title="PRODUSEN ALSINTAN">
            <img
              src="src/partner/assets/images/alsintan/dji.png"
              alt="dji"
              className="w-auto h-[80px]"
            />
            <img
              src="src/partner/assets/images/alsintan/kubora.png"
              alt="kubora"
              className="w-auto h-[80px]"
            />
            <img
              src="src/partner/assets/images/alsintan/maxxi.png"
              alt="maxxi"
              className="w-auto h-[80px]"
            />
            <img
              src="src/partner/assets/images/alsintan/yanmar.png"
              alt="yanmar"
              className="w-auto h-[80px]"
            />
          </MitraCard>
          <MitraCard title="PRODUSEN AGRO-INPUT">
            <img
              src="src/partner/assets/images/agroinput/agricon.png"
              alt="agricon"
              className="w-auto h-[80px]"
            />
            <img
              src="src/partner/assets/images/agroinput/bayer.png"
              alt="bayer"
              className="w-auto h-[80px]"
            />
            <img
              src="src/partner/assets/images/agroinput/biotis.png"
              alt="biotis"
              className="w-auto h-[80px]"
            />
            <img
              src="src/partner/assets/images/agroinput/corteva.png"
              alt="corveta"
              className="w-auto h-[80px]"
            />
            <img
              src="src/partner/assets/images/agroinput/dgw.png"
              alt="dgw"
              className="w-auto h-[80px]"
            />
            <img
              src="src/partner/assets/images/agroinput/fmc.png"
              alt="fmc"
              className="w-auto h-[80px]"
            />
            <img
              src="src/partner/assets/images/agroinput/makmur.png"
              alt="makmur"
              className="w-auto h-[80px]"
            />
            <img
              src="src/partner/assets/images/agroinput/pupukindonesiaholdingcompany.jpg"
              alt="pupukindonesia"
              className="w-auto h-[80px]"
            />
            <img
              src="src/partner/assets/images/agroinput/sygenta.jpg"
              alt="sygenta"
              className="w-auto h-[80px]"
            />
          </MitraCard>
          <MitraCard title="ASURANSI BUDIDAYA">
            <img
              src="src/partner/assets/images/asuransi/aca.png"
              alt="aca"
              className="w-auto h-[80px]"
            />
            <img
              src="src/partner/assets/images/asuransi/jasindo.jpg"
              alt="jasindo"
              className="w-auto h-[80px]"
            />
          </MitraCard>
        </div>
      </div>
    </Layout>
  );
}
