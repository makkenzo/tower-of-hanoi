import React from 'react';
import Disk from './Disk';

const Pole = ({ disks, onClick }) => {
    return (
        <div className="w-full flex flex-col items-center mx-4 flex-col-reverse mt-5">
            <div
                className="bg-[#F6F7EB] rounded-lg hover:bg-[#44BBA4] hover:text-white py-2 px-4 cursor-pointer mb-3"
                onClick={onClick}
            >
                Select
            </div>
            {disks.map((size, index) => (
                <Disk key={index} size={size} />
            ))}
        </div>
    );
};

export default Pole;
