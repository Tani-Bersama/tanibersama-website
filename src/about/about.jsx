import React from "react";
import Layout from "../Layout";
import WhoCard from "./components/WhoCard";
import CfCard from "./components/CfCard";
import StratCard from "./components/StratCard";
import PersonsCard from "./components/PersonsCard";

const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

export default function About() {
  return (
    <Layout>
      <div>
        <div className="flex justify-center my-[50px]">
          <WhoCard />
        </div>
        <div className="flex flex-col my-[70px] justify-center items-center">
          <div className="mt-[30px] font-bold text-[18px] text-center">
            Collective Farming: Solusi Paling Efektif dan Menyeluruh untuk
            Peningkatan Produktivitas Berkesinambungan
          </div>
          <div className="flex flex-wrap justify-center">
            <CfCard title="Collective Farming">
              <div>- Konsolidasi lahan</div>
              <div>- Manajemen lahan hamparan: kemudahan menjalankan GAP</div>
              <div>- 1 on-farm management</div>
              <div>- Kredit untuk semua petani dan tanpa jaminan</div>
              <div>- Peningkatan produksi</div>
              <div>- Jaminan off-taker</div>
              <div>- Resiko budidaya rendah</div>
              <div>- Resiko kredit rendah</div>
              <div>- Biaya budidaya efisien</div>
              <div>- Pendampingan dari tim ahli dan field assistance (FA)</div>
              <div>- Penetrasi penggunaan teknologi</div>
            </CfCard>
            <CfCard title="Collective Farming">
              <div>Konsolidasi lahan</div>
              <div>Manajemen lahan hamparan: kemudahan menjalankan GAP</div>
              <div>1 on-farm management</div>
              <div>Kredit untuk semua petani dan tanpa jaminan</div>
              <div>Peningkatan produksi</div>
              <div>Jaminan off-taker</div>
              <div>Resiko budidaya rendah</div>
              <div>Resiko kredit rendah</div>
              <div>Biaya budidaya efisien</div>
              <div>Pendampingan dari tim ahli dan field assistance (FA)</div>
              <div>Penetrasi penggunaan teknologi</div>
            </CfCard>
            <CfCard title="Collective Farming">
              <div>Konsolidasi lahan</div>
              <div>Manajemen lahan hamparan: kemudahan menjalankan GAP</div>
              <div>1 on-farm management</div>
              <div>Kredit untuk semua petani dan tanpa jaminan</div>
              <div>Peningkatan produksi</div>
              <div>Jaminan off-taker</div>
              <div>Resiko budidaya rendah</div>
              <div>Resiko kredit rendah</div>
              <div>Biaya budidaya efisien</div>
              <div>Pendampingan dari tim ahli dan field assistance (FA)</div>
              <div>Penetrasi penggunaan teknologi</div>
            </CfCard>
            <CfCard title="Collective Farming">
              <div>Konsolidasi lahan</div>
              <div>Manajemen lahan hamparan: kemudahan menjalankan GAP</div>
              <div>1 on-farm management</div>
              <div>Kredit untuk semua petani dan tanpa jaminan</div>
              <div>Peningkatan produksi</div>
              <div>Jaminan off-taker</div>
              <div>Resiko budidaya rendah</div>
              <div>Resiko kredit rendah</div>
              <div>Biaya budidaya efisien</div>
              <div>Pendampingan dari tim ahli dan field assistance (FA)</div>
              <div>Penetrasi penggunaan teknologi</div>
            </CfCard>
          </div>
        </div>
        <StratCard />
        <div className="flex flex-col items-center my-24">
          <div className="my-5 text-center text-[18px] font-bold">
            Founders & Key Persons
          </div>
          <div className="flex justify-center">
            <PersonsCard
              name="DR. ZUZIANA SUSANTI, MSi"
              cat="Expert, Advisor, Agronomist"
            >
              <div>Peneliti BPPADI ({">"}15 thn)</div>
              <div>
                Peneliti BRIN (Badan Riset dan Inovasi Nasional) Teknologi
                Tanaman Pangan ({">"}2 thn)
              </div>
              <div>Team leader in various research projects (BPPADI)</div>
              <div>
                Team Leader Proyek Pengembangan Produktivitas Tanaman Padi
                (BAPANAS – ID FOOD – BRIN)
              </div>
            </PersonsCard>
            <PersonsCard
              name="DR. ZUZIANA SUSANTI, MSi"
              cat="Expert, Advisor, Agronomist"
            >
              <div>Peneliti BPPADI ({">"}15 thn)</div>
              <div>
                Peneliti BRIN (Badan Riset dan Inovasi Nasional) Teknologi
                Tanaman Pangan ({">"}2 thn)
              </div>
              <div>Team leader in various research projects (BPPADI)</div>
              <div>
                Team Leader Proyek Pengembangan Produktivitas Tanaman Padi
                (BAPANAS – ID FOOD – BRIN)
              </div>
            </PersonsCard>
          </div>
          <div className="flex justify-center">
            <PersonsCard
              name="DR. ZUZIANA SUSANTI, MSi"
              cat="Expert, Advisor, Agronomist"
            >
              <div>Peneliti BPPADI ({">"}15 thn)</div>
              <div>
                Peneliti BRIN (Badan Riset dan Inovasi Nasional) Teknologi
                Tanaman Pangan ({">"}2 thn)
              </div>
              <div>Team leader in various research projects (BPPADI)</div>
              <div>
                Team Leader Proyek Pengembangan Produktivitas Tanaman Padi
                (BAPANAS – ID FOOD – BRIN)
              </div>
            </PersonsCard>
            <PersonsCard
              name="DR. ZUZIANA SUSANTI, MSi"
              cat="Expert, Advisor, Agronomist"
            >
              <div>Peneliti BPPADI ({">"}15 thn)</div>
              <div>
                Peneliti BRIN (Badan Riset dan Inovasi Nasional) Teknologi
                Tanaman Pangan ({">"}2 thn)
              </div>
              <div>Team leader in various research projects (BPPADI)</div>
              <div>
                Team Leader Proyek Pengembangan Produktivitas Tanaman Padi
                (BAPANAS – ID FOOD – BRIN)
              </div>
            </PersonsCard>
            <PersonsCard
              name="DR. ZUZIANA SUSANTI, MSi"
              cat="Expert, Advisor, Agronomist"
            >
              <div>Peneliti BPPADI ({">"}15 thn)</div>
              <div>
                Peneliti BRIN (Badan Riset dan Inovasi Nasional) Teknologi
                Tanaman Pangan ({">"}2 thn)
              </div>
              <div>Team leader in various research projects (BPPADI)</div>
              <div>
                Team Leader Proyek Pengembangan Produktivitas Tanaman Padi
                (BAPANAS – ID FOOD – BRIN)
              </div>
            </PersonsCard>
          </div>
        </div>
      </div>
    </Layout>
  );
}
