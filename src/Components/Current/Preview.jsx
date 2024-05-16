import React, { useState } from 'react'

const Preview = ({ el, snippetData, installationCmd }) => {

    return (
        <>
            <div
                onClick={() => openSheet()}
                className={`cursor-pointer flex w-[400px] h-[300px] overflow-hidden items-center justify-center border border-[#d0d0d0] rounded-2xl`}>
                {el}
                {code == 1 && <pre className="text-xs w-full h-full bg-[#121212] text-[#f0f0f0]">{snippetData}</pre>}
                {code == 2 && <pre className="text-xs w-full h-full bg-[#121212] text-[#f0f0f0] px-4 flex justify-center items-center">
                    <span className='p-2 border border-[#313131] bg-[#212121] flex justify-between items-center w-full rounded-md '>
                        {installationCmd}
                        <svg className='cursor-pointer hover:bg-[#313131] p-1 rounded-full transition-all' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 8.25V18C20 21 18.21 22 16 22H8C5.79 22 4 21 4 18V8.25C4 5 5.79 4.25 8 4.25C8 4.87 8.24997 5.43 8.65997 5.84C9.06997 6.25 9.63 6.5 10.25 6.5H13.75C14.99 6.5 16 5.49 16 4.25C18.21 4.25 20 5 20 8.25Z" stroke="#b0b0b0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16 4.25C16 5.49 14.99 6.5 13.75 6.5H10.25C9.63 6.5 9.06997 6.25 8.65997 5.84C8.24997 5.43 8 4.87 8 4.25C8 3.01 9.01 2 10.25 2H13.75C14.37 2 14.93 2.25 15.34 2.66C15.75 3.07 16 3.63 16 4.25Z" stroke="#b0b0b0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 13H12" stroke="#b0b0b0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 17H16" stroke="#b0b0b0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </span>
                </pre>}
            </div>
        </>
    )
}

export default Preview