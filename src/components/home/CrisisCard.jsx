import React from "react";

const Line = () => <div className="w-[150px] h-[1px] bg-[#55A840] my-5"></div>;

export default function CrisisCard() {
  return (
    <div className="flex flex-col items-center max-w-[400px] text-center">
      <Line />
      <div>
        Krisis peran petani: lebih berperan sebagai “landlord” atau “foreman”
      </div>
      <Line />
      <div>Krisis kebersamaan: sendiri-sendiri dan tidak terkoordinasi</div>
      <Line />
      <div>
        Krisis profil petani: usia tua, rendah pendidikan, lahan sempit, bukan
        pemilik dan tersebar
      </div>
      <Line />
      <div>Krisis NPL: tingginya kredit (hutang) macet di sektor pertanian</div>
      <Line />
      <div>Krisis pembiayaan: sulit mendapatkan modal kerja</div>
      <Line />
      <div>
        Krisis produktivitas: Resiko gagal tinggi dan produktivitas rendah
      </div>
      <Line />
      <div>
        Krisis Kualitas Tanah: degradasi kualitas tanah yang tidak tertangani
      </div>
      <Line />
      <div>
        Krisis Inovasi: sulitnya implementasi teknologi dan metoda/inisiatif
        baru
      </div>
      <Line />
    </div>
  );
}
