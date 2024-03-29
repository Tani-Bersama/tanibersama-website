const Information = () => {
  return (
    <div className="flex flex-col text-white gap-4">
        <div className="font-bold">
            PT TANI BERSAMA SEJAHTERA
        </div>
        <div className="w-[294px]">
            <div>
                Head Office:
            </div>
            Menara MTH, 15th floor, suite 1508
            Jl. MT Haryono Kav 23, Tebet
            Jakarta Timur, 12820
            www.tanibersama.id
        </div>
        <div className="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <span>
                info@tanibersama.id  |  partner@tanibersama.id
            </span>
        </div>
    </div>
  )
}

export default Information