// eslint-disable-next-line react/prop-types
const GalleryCom = ({ imageSrcArr, photo, handleInputImage }) => {
    return (
        <>
            <div className=' grid grid-cols-12 mx-2 mt-2 mb-5'>
                <div className=' col-span-4 w-fit px-4 flex justify-center items-center bg-[#171717] rounded-2xl '>
                    <nav className=' text-center capitalize text-white text-[16px] flex flex-wrap justify-center items-center'>Gallery</nav>
                </div>
                <div className=' col-span-4 w-fit px-4 flex justify-center items-center bg-[#ffffff]/[3%] cursor-pointer rounded-full shadow-[-0.5px_-0.5px_6.9px_0px_rgba(255,255,255,0.25),9px_10px_7.1px_0px_rgba(0,0,0,0.4),inset_0px_0px_48.91px_0px_rgba(255,255,255,0.05),inset_0px_3.26px_3.26px_0px_rgba(255,255,255,0.15)]'>
                    <nav className=' text-center capitalize text-white text-[16px] flex flex-wrap justify-center items-center '>
                        <label htmlFor="input-file"> + Add Images</label>
                        <input type="file" multiple accept=' image/jpeg, image/jpg, image/png ' name="input-image" id="input-file" className=' hidden' onChange={(e) => handleInputImage(e)} />
                    </nav>
                </div>
                <div className=' col-span-2 w-[45px] h-[45px] rounded-full bg-[linear-gradient(45deg,#303439_0%,#161718_100%)]  shadow-[-5px_-3px_30px_-10px_#96bee7,4px_5px_30px_5px_#101213]'>
                    <nav className=' h-full  text-center text-white flex flex-wrap justify-center items-center'>
                        <i className="fa-solid fa-arrow-left"></i>
                    </nav>
                </div>
                <div className=' col-span-2  w-[45px] h-[45px] rounded-full bg-[linear-gradient(45deg,#303439_0%,#161718_100%)] shadow-[-5px_-3px_30px_-10px_#96bee7,4px_5px_30px_5px_#101213]'>
                    <nav className=' h-full  text-center text-white flex flex-wrap justify-center items-center'>
                        <i className="fa-solid fa-arrow-right"></i>
                    </nav>
                </div>
            </div>
            <div className='m-3 p-2 flex gap-2 overflow-x-scroll'>
                {/* eslint-disable-next-line react/prop-types */}
                {imageSrcArr.length > 0 ?
                    // eslint-disable-next-line react/prop-types
                    imageSrcArr.map((data, ind) => {
                        return (
                            <img src={data.imgSource} alt={data.imgSource} width={190} height={179} className=' w-[190px] h-[179px] rounded-2xl' id='image-show' key={ind} />
                        )
                    }) :
                    <>
                        <img src={photo} alt={photo} width={190} height={179} className=' rounded-2xl' />
                        <img src={photo} alt={photo} width={190} height={179} className=' rounded-2xl' />
                        <img src={photo} alt={photo} width={190} height={179} className=' rounded-2xl' />
                        <img src={photo} alt={photo} width={190} height={179} className=' rounded-2xl' />
                        <img src={photo} alt={photo} width={190} height={179} className=' rounded-2xl' />
                        <img src={photo} alt={photo} width={190} height={179} className=' rounded-2xl' />
                    </>
                }
            </div>
        </>
    )
}

export default GalleryCom
