// eslint-disable-next-line react/prop-types
const PortfolioCom = ({ NavArray, comActiveId, myClass1, handleActiveTab }) => {
    return (
        <>
            <div className=' bg-[#171717] mx-2 mt-2 mb-5 rounded-2xl '>
                <nav className=' grid grid-cols-3 text-gray-400 p-2'>
                    {/* eslint-disable-next-line react/prop-types */}
                    {NavArray.map((data, ind) => {
                        return (
                            <div className={`h-10 text-center capitalize flex flex-wrap justify-center items-center rounded-xl cursor-pointer hover:text-white hover:bg-[#28292f] ${comActiveId === data.myId ? myClass1 : ''}`} onClick={() => handleActiveTab(data.myId)} key={ind}> {data.innerText}</div>
                        )
                    })}
                </nav>
            </div>
            {/* eslint-disable-next-line react/prop-types */}
            {NavArray.filter((data) => {
                return (data?.myId === comActiveId)
            }).map((data1, ind) => {
                return (
                    <p className='text-[#969696] m-2 text-font-family1' key={ind} >{data1.ParaText}</p>
                )
            })}
        </>
    )
}

export default PortfolioCom
