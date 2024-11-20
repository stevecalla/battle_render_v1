import { useEffect, useState } from 'react';
import Battle from '../components/battle';

const BattleRoom = () => {
    const [battleComponent, setBattleComponent] = useState<JSX.Element | null>(null);

    useEffect(() => {
        const fetchBattleComponent = async () => {
            const component = await Battle();
            setBattleComponent(component);
        };
        fetchBattleComponent();
    }, []);

    return (
        <div id="battlePage">
            <div id="battleImage"></div>
            <div id="battleRoom">
                <h1 id="battleRoomTitle">Battle Room</h1>
                {battleComponent}
            </div>
        </div>
    );
}

export default BattleRoom;