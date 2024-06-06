import React, { useEffect, useState } from 'react'
import ButtonV1 from '../Components/Buttons/ButtonV1'
import ButtonV2 from '../Components/Buttons/ButtonV2'
import ButtonV3 from '../Components/Buttons/ButtonV3'
import ButtonV4 from '../Components/Buttons/ButtonV4'
import ButtonV5 from '../Components/Buttons/ButtonV5'
import ButtonV6 from '../Components/Buttons/ButtonV6'
import ButtonV7 from '../Components/Buttons/ButtonV7'
import Sheet from '../Components/Current/Sheet';
import { AnimatePresence } from 'framer-motion'
import ButtonV8 from '../Components/Buttons/ButtonV8'

const ButtonPage = () => {
    const [sheet, setSheet] = useState(false);
    const [buttonData, setButtonData] = useState([]);
    const [selectedData, setSelectedData] = useState(null);

    useEffect(() => {
        const fetchButtonData = async () => {
            try {
                const res = await fetch('./Data/buttonData.json');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setButtonData(data);
            } catch (error) {
                console.error('Fetching error:', error);
            }
        };

        fetchButtonData();
    }, []);

    const closeSheet = (e) => {
        setSheet(false);
        document.body.style.overflow = 'auto';
    }

    const openSheet = (data) => {
        setSelectedData(data);
        setSheet(true);
        document.body.style.overflow = 'hidden';
    }


    return (
        <>
            <AnimatePresence>
                {sheet && <Sheet
                    selectedData={selectedData}
                    closeSheet={closeSheet} />}
            </AnimatePresence>
            <div className="grid responsiveSection">
                {/* <div className="flex flex-wrap gap-4 justify-center items-center w-full max-w[1440px]"> */}
                {buttonData.map((data, index) => (
                    <div
                        key={index}
                        onClick={() => openSheet(data)}
                        className={`cursor-pointer flex w-[300px] h-[225px] md:w-[400px] md:h-[300px] overflow-hidden items-center justify-center border hover:bg-[#fbfbfb] transition-all rounded-2xl`}>
                        {data.componentName === "ButtonV1" && <ButtonV1 title={data.title} />}
                        {data.componentName === "ButtonV2" && <ButtonV2 title={data.title} />}
                        {data.componentName === "ButtonV3" && <ButtonV3 title={data.title} />}
                        {data.componentName === "ButtonV4" && <ButtonV4 title={data.title} />}
                        {data.componentName === "ButtonV5" && <ButtonV5 title={data.title} />}
                        {data.componentName === "ButtonV6" && <ButtonV6 title={data.title} />}
                        {data.componentName === "ButtonV7" && <ButtonV7 title={data.title} />}
                        {data.componentName === "ButtonV8" && <ButtonV8 title={data.title} />}
                    </div>
                ))}
            </div>
        </>
    )
}

export default ButtonPage