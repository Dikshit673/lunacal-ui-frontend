// eslint-disable-next-line react/prop-types
const ServiceCom = ({ children }) => {
    return (
        <div className=' bg-[#363c43] mb-4 rounded-2xl'>
            <div className=' grid grid-cols-12'>
                <div className=' col-span-1'>
                    <div className=' flex flex-col justify-start items-center my-3 gap-20'>
                        <div className=' icon-gradient '>
                            <i className="fa-regular fa-circle-question"></i>
                        </div>
                        <div className='flex flex-col gap-[0.1rem]' id='6-boxes-wrapper'>
                            <div className=' flex gap-x-[0.1rem]'>
                                <div className=' w-[9.31px] h-[9.31px] bg-[#4a4e54] '></div>
                                <div className=' w-[9.31px] h-[9.31px] bg-[#4a4e54] '></div>
                            </div>
                            <div className=' flex gap-x-[0.1rem]'>
                                <div className=' w-[9.31px] h-[9.31px] bg-[#4a4e54] '></div>
                                <div className=' w-[9.31px] h-[9.31px] bg-[#4a4e54] '></div>
                            </div>
                            <div className=' flex gap-x-[0.1rem]'>
                                <div className=' w-[9.31px] h-[9.31px] bg-[#4a4e54] '></div>
                                <div className=' w-[9.31px] h-[9.31px] bg-[#4a4e54] '></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-span-10'>
                    {children}
                </div>
                <div className=' col-span-1'>
                    <div className=' w-full h-full flex justify-center items-center'>
                        <div className=' w-[8px] h-[64px] bg-[linear-gradient(180deg,#888989_0%,#4a4e54_100%)]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCom
