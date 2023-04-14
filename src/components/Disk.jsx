import React from 'react';

const Disk = ({ size }) => {
    const width = size * 12 + 40;
    return <div className={`bg-[#E94F37] mb-2 rounded-lg`} style={{ width: `${width}px`, height: '20px' }}></div>;
};

export default Disk;
