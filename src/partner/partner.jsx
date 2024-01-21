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
import pih from "./assets/images/agroinput/pupukindonesiaholdingcompany.jpg";
import sygenta from "./assets/images/agroinput/sygenta.jpg";

import dji from "./assets/images/alsintan/dji.png";
import kubora from "./assets/images/alsintan/kubora.png";
import maxxi from "./assets/images/alsintan/maxxi.png";
import yanmar from "./assets/images/alsintan/yanmar.png";

import aca from "./assets/images/asuransi/aca.png";
import jasindo from "./assets/images/asuransi/jasindo.jpg";

import bri from "./assets/images/bank/bri.jpg";
import bsi from "./assets/images/bank/bsi.jpg";
import sinarmas from "./assets/images/bank/sinarmas.png";

import agrojabar from "./assets/images/offtaker/agrojabar.jpg";
import foodstation from "./assets/images/offtaker/foodstation.png";
import pip from "./assets/images/offtaker/pip.png";
import wilmar from "./assets/images/offtaker/wilmar.png";

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
            <img src={aca} alt="aca" className="w-auto h-[70px] m-5" />
            <img src={jasindo} alt="jasindo" className="w-auto h-[60px] m-5" />
          </MitraCard>
          <MitraCard title="BANK-BANK PENYALUR KUR">
            <img src={bri} alt="bri" className="w-auto h-[75px] m-5" />
            <img src={bsi} alt="bsi" className="w-auto h-[90px] m-5" />
            <img
              src={sinarmas}
              alt="sinarmas"
              className="w-auto h-[70px] m-5"
            />
          </MitraCard>
          <MitraCard title="OFFTAKER - PABRIK BERAS">
            <img
              src={agrojabar}
              alt="agrojabar"
              className="w-auto h-[100px] m-5"
            />
            <img
              src={foodstation}
              alt="foodstation"
              className="w-auto h-[50px] m-5"
            />
            <img src={pip} alt="pip" className="w-auto h-[70px] m-5" />
            <img src={wilmar} alt="wilmar" className="w-auto h-[60px] m-5" />
          </MitraCard>
          <MitraCard title="PRODUSEN ALSINTAN">
            <img src={dji} alt="dji" className="w-auto h-[50px] m-5" />
            <img src={kubora} alt="kubora" className="w-auto h-[60px] m-5" />
            <img src={maxxi} alt="maxxi" className="w-auto h-[50px] m-5" />
            <img src={yanmar} alt="yanmar" className="w-auto h-[70px] m-5" />
          </MitraCard>
          <MitraCard title="PRODUSEN AGRO-INPUT">
            <img src={agricon} alt="agricon" className="w-auto h-[90px] m-5" />
            <img src={bayer} alt="bayer" className="w-auto h-[80px] m-5" />
            <img src={biotis} alt="biotis" className="w-auto h-[90px] m-5" />
            <img src={corteva} alt="corveta" className="w-auto h-[80px] m-5" />
            <img src={dgw} alt="dgw" className="w-auto h-[70px] m-5" />
            <img src={fmc} alt="fmc" className="w-auto h-[45px] m-5" />
            <img src={makmur} alt="makmur" className="w-auto h-[120px]" />
            <img src={pih} alt="pupukindonesia" className="w-auto h-[100px]" />
            <img src={sygenta} alt="sygenta" className="w-auto h-[90px]" />
          </MitraCard>
        </div>
      </div>
    </Layout>
  );
}
