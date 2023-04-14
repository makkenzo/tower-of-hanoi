import React, { useEffect, useState } from 'react';

import Pole from './components/Pole';

const App = () => {
    const [poles, setPoles] = useState([[8, 7, 6, 5, 4, 3, 2, 1], [], []]);
    const [moves, setMoves] = useState(0);
    const [message, setMessage] = useState('');
    const [selectedPole, setSelectedPole] = useState(null);
    const [won, setWon] = useState(false);

    const moveDisk = (from, to) => {
        if (poles[from].length === 0) {
            setMessage('Стержень пуст');
        } else if (poles[to].length > 0 && poles[from][poles[from].length - 1] > poles[to][poles[to].length - 1]) {
            setMessage('Невозможно переместить больший диск на меньший');
        } else {
            const disk = poles[from].pop();
            poles[to].push(disk);
            setPoles([...poles]);
            setSelectedPole(null);
        }
    };

    useEffect(() => {
        if (selectedPole !== null) return;

        const checkWin = () => {
            if (poles[0].length === 0 && poles[1].length === 0) {
                setMessage(`Победа! Вы сделали ${moves} ходов.`);
                setWon(true);
            }
        };

        checkWin();
    }, [poles, moves, selectedPole]);

    const handlePoleClick = (poleIndex) => {
        if (selectedPole === null) {
            setSelectedPole(poleIndex);
        } else {
            moveDisk(selectedPole, poleIndex);
            setMoves(moves + 1);
        }
    };

    const resetGame = () => {
        setPoles([[8, 7, 6, 5, 4, 3, 2, 1], [], []]);
        setMoves(0);
        setMessage('');
        setWon(false);
    };

    return (
        <div className="flex justify-center mt-8">
            <div className="flex flex-col items-center">
                <div className="flex">
                    <Pole disks={poles[0]} onClick={() => handlePoleClick(0)} />
                    <Pole disks={poles[1]} onClick={() => handlePoleClick(1)} />
                    <Pole disks={poles[2]} onClick={() => handlePoleClick(2)} />
                </div>
                <p className={`${won ? 'text-green-500' : 'text-red-500'} mt-4`}>{message}</p>
                <button
                    className="bg-[#F6F7EB] rounded-lg px-4 py-2 mt-4 hover:bg-[#44BBA4] hover:text-white focus:outline-none focus:shadow-outline"
                    onClick={resetGame}
                >
                    Начать заново
                </button>
            </div>
        </div>
    );
};

export default App;
