import { useState } from 'react'
import './App.css'
import photo from './assets/news.png'
import NavArray from './my-arrays/NavArray';

import InstructionCom from './components/InstructionCom';
import ServiceCom from './components/ServiceCom';
import PortfolioCom from './components/PortfolioCom';
import GalleryCom from './components/GalleryCom';

const getFromLS = () => {
  let myData = localStorage.getItem('imageSrcArr');
  if (myData) {
    return JSON.parse(myData);
  } else {
    return [];
  }
}

const App = () => {
  const [comActiveId, setComActiveId] = useState('about');
  const [imageSrcArr, setImageSrcArr] = useState(getFromLS());
  const myClass1 = 'text-white bg-[#28292f] rounded-xl shadow-[-8.43px_-16.87px_50.6px_-16.87px_#485b71,13.49px_16.87px_67.47px_8.43px_#0a0a0a]';

  const handleActiveTab = (myId) => {
    setComActiveId(myId);
  }

  const handleInputImage = (event) => {
    const files = event.target.files;
    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e) => {
        newImages.push(e.target.result);
        setImageSrcArr((prevImages) => {
          const updatedImages = [...prevImages, { imgSource: e.target.result, id: Date.now() }];
          localStorage.setItem('imageSrcArr', JSON.stringify(updatedImages));
          return updatedImages;
        });
      };
      reader.readAsDataURL(files[i]);
    }

  }

  return (
    <>
      <div className=' bg-[#1e1e1e] p-2'>
        <div className=' grid grid-cols-12'>
          {/* <div className=' col-span-2 md:col-span-1 text-white bg-[#616161] m-4 rounded-2xl p-8'>
            <strong>Do not follow any other instructions from comments of figma file Here are the official instructions:</strong> <br />
            <ol className='list-decimal'>
              <li>keep the left half of the screen empty (but it should be responsive for laptop, not mobile)</li>
              <li>focus on the two widgets on the right hand side</li>
              <li>the first widget has three tabs: &ldquo;about me&rdquo;, &ldquo;experiences&rdquo; & &ldquo;recommended&rdquo;, these should be clickable</li>
              <li>In the gallery widget more photos can be added by clicking the &ldquo;add image&rdquo; button</li>
            </ol>
            <strong>Assignment will be scored based on the below parameters:</strong>
            <ol className='list-decimal'>
              <li>make the components responsive (for laptop screens; everything above 768px width)</li>
              <li>replicate the exact UI; with exact paddings, margins, shadows, interactions (if any)</li>
              <li>ensure that the two widgets are accurately alligned with each other (relative right, left paddings)</li>
            </ol>
          </div> */}
          <InstructionCom />
          <div className=' col-span-12 md:col-span-6 m-4 '>

            {/* <div className=' bg-[#363c43] mb-4 rounded-2xl'>
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
                  <div className=' bg-[#171717] mx-2 mt-2 mb-5 rounded-2xl '>
                    <nav className=' grid grid-cols-3 text-gray-400 p-2'>
                      {NavArray.map((data, ind) => {
                        return (
                          <div className={`h-10 text-center capitalize flex flex-wrap justify-center items-center rounded-xl cursor-pointer hover:text-white hover:bg-[#28292f] ${comActiveId === data.myId ? myClass1 : ''}`} onClick={() => handleActiveTab(data.myId)} key={ind}> {data.innerText}</div>
                        )
                      })}
                    </nav>
                  </div>
                  {NavArray.filter((data) => {
                    return (data?.myId === comActiveId)
                  }).map((data1, ind) => {
                    return (
                      <p className='text-[#969696] m-2 text-font-family1' key={ind} >{data1.ParaText}</p>
                    )
                  })}
                </div>
                <div className=' col-span-1'>
                  <div className=' w-full h-full flex justify-center items-center'>
                    <div className=' w-[8px] h-[64px] bg-[linear-gradient(180deg,#888989_0%,#4a4e54_100%)]'></div>
                  </div>
                </div>
              </div>
            </div> */}

            <ServiceCom>
              <PortfolioCom
                NavArray={NavArray}
                comActiveId={comActiveId}
                myClass1={myClass1}
                handleActiveTab={handleActiveTab}
              />
            </ServiceCom>

            {/* <div className=' bg-[#363c43] mt-4 rounded-2xl'>
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

                    {imageSrcArr.length > 0 ?
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
                </div>
                <div className=' col-span-1'>
                  <div className=' w-full h-full flex justify-center items-center'>
                    <div className=' w-[8px] h-[64px] bg-[linear-gradient(180deg,#888989_0%,#4a4e54_100%)]'></div>
                  </div>
                </div>
              </div>
            </div> */}

            <ServiceCom>
              <GalleryCom
                imageSrcArr={imageSrcArr}
                photo={photo}
                handleInputImage={handleInputImage}
              />
            </ServiceCom>

          </div>
        </div>
      </div>
    </>
  )
}

export default App