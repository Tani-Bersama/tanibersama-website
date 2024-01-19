import React from "react";

const Item = ({ text }) => <div className="my-5 text-white">{text}</div>;

export default function EffectCard() {
  return (
    <div className="bg-[#55A840] px-[100px] py-[50px]">
      <div className="flex flex-col text-center items-center max-w-[300px]">
        <Item
          text="Petani makin sulit keluar dari “lingkaran setan”: - Produktivitas rendah
        - Hutang ke berbagai pihak"
        />
        <Item text="Petani makin banyak kehilangan sawahnya" />
        <Item text="Kualitas SDM pertanian makin menurun" />
        <Item text="Lahan produktif makin sempit" />
        <Item text="Pertanian hulu: investasi/ bisnis yang buruk/merugikan" />
        <Item text="Produksi beras makin kecil dan ancaman krisis ketahanan pangan" />
      </div>
    </div>
  );
}
