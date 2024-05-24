import React from 'react'

const CardV2 = ({ title, logo, description, shadow, btn }) => {
  const cardStyle = {
    boxShadow: shadow ? '0px 32px 52px -24px #00000026, 0px 13px 17.5px -6px #0000000d' : 'none',
  };

  return (
    <>
      <div
        className="relative flex flex-col overflow-hidden h-[300px] w-[400px] border bg-[#fefefe] items-start justify-center rounded-2xl cursor-pointer"
        style={cardStyle}
      >
        <div className='absolute top-2 left-2 flex justify-center items-center gap-1 text-[#ffffffd4]'><img className='w-5 h-5' src={logo} alt="" />Stalwart Group</div>
        <video className='h-full w-full object-fill' src="https://videos.pexels.com/video-files/5649206/5649206-uhd_3840_2160_25fps.mp4" loop={true} autoPlay={true} />
        <div className='absolute bottom-2 left-2 flex flex-col justify-center items-start w-full'>
          <h1 className="text-2xl font-[400] text-[#fff]">{title}</h1>
          <h1 className="text-base font-[400] text-[#ffffffd4]">{description}</h1>
        </div>
      </div>

    </>
  )
}

export default CardV2