import React from "react";
import Layout from "../Layout";
import MitraCard from "./components/MitraCard";

import agricon from "./assets/images/agroinput/agricon.png";
import bayer from "./assets/images/agroinput/bayer.png";
import biotis from "./assets/images/agroinput/biotis.png";
import corteva from "./assets/images/agroinput/corteva.png";
import dgw from "./assets/images/agroinput/dgw.png";
import fmc from "./assets/images/agroinput/fmc.png";
import makmur from "./assets/images/agroinput/makmur.png";
import pip from "./assets/images/agroinput/pupukindonesiaholdingcompany.jpg";
import sygenta from "./assets/images/agroinput/sygenta.jpg";

export default function Partner() {
  return (
    <Layout>
      <div className="font-all">
        <div className="mx-[15vh] my-[80px] font-bold text-[18px]">
          KEMITRAAN DALAM EKOSISTEM COLLECTIVE FARMING
        </div>
        <div className="flex flex-wrap justify-center">
          <MitraCard title="PETANI-PETANI">
            Petani/Kelompok Tani di Karawang, Bekasi, Subang, Indramayu, dan
            daerah-daerah sentra tanaman padi lainnya.
          </MitraCard>
          <MitraCard title="ASURANSI BUDIDAYA">
            <img
              src="src/partner/assets/images/asuransi/aca.png"
              alt="aca"
              className="w-auto h-[70px] m-5"
            />
            <img
              src="src/partner/assets/images/asuransi/jasindo.jpg"
              alt="jasindo"
              className="w-auto h-[60px] m-5"
            />
          </MitraCard>
          <MitraCard title="BANK-BANK PENYALUR KUR">
            <img
              src="src/partner/assets/images/bank/bri.jpg"
              alt="bri"
              className="w-auto h-[75px] m-5"
            />
            <img
              src="src/partner/assets/images/bank/bsi.jpg"
              alt="bsi"
              className="w-auto h-[90px] m-5"
            />
            <img
              src="src/partner/assets/images/bank/sinarmas.png"
              alt="sinarmas"
              className="w-auto h-[70px] m-5"
            />
          </MitraCard>
          <MitraCard title="OFFTAKER - PABRIK BERAS">
            <img
              src="src/partner/assets/images/offtaker/agrojabar.jpg"
              alt="agrojabar"
              className="w-auto h-[100px] m-5"
            />
            <img
              src="src/partner/assets/images/offtaker/foodstation.png"
              alt="foodstation"
              className="w-auto h-[50px] m-5"
            />
            <img
              src="src/partner/assets/images/offtaker/pip.png"
              alt="pip"
              className="w-auto h-[70px] m-5"
            />
            <img
              src="src/partner/assets/images/offtaker/wilmar.png"
              alt="wilmar"
              className="w-auto h-[60px] m-5"
            />
          </MitraCard>
          <MitraCard title="PRODUSEN ALSINTAN">
            <img
              src="src/partner/assets/images/alsintan/dji.png"
              alt="dji"
              className="w-auto h-[50px] m-5"
            />
            <img
              src="src/partner/assets/images/alsintan/kubora.png"
              alt="kubora"
              className="w-auto h-[60px] m-5"
            />
            <img
              src="src/partner/assets/images/alsintan/maxxi.png"
              alt="maxxi"
              className="w-auto h-[50px] m-5"
            />
            <img
              src="src/partner/assets/images/alsintan/yanmar.png"
              alt="yanmar"
              className="w-auto h-[70px] m-5"
            />
          </MitraCard>
          <MitraCard title="PRODUSEN AGRO-INPUT">
            <img src={agricon} alt="agricon" className="w-auto h-[90px] m-5" />
            <img src={bayer} alt="bayer" className="w-auto h-[80px] m-5" />
            <img src={biotis} alt="biotis" className="w-auto h-[90px] m-5" />
            <img src={corteva} alt="corveta" className="w-auto h-[80px] m-5" />
            <img src={dgw} alt="dgw" className="w-auto h-[70px] m-5" />
            <img src={fmc} alt="fmc" className="w-auto h-[45px] m-5" />
            <img src={makmur} alt="makmur" className="w-auto h-[120px]" />
            <img src={pip} alt="pupukindonesia" className="w-auto h-[100px]" />
            <img src={sygenta} alt="sygenta" className="w-auto h-[90px]" />
          </MitraCard>
        </div>
      </div>
    </Layout>
  );
}
