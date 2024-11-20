import { CharacterData } from '../interfaces/CharacterData';

type CharacterProps = {
    statsDisplay: number;
    character: CharacterData;
}

const Character = (props:CharacterProps) => {
    if (props.statsDisplay == 1) {
        return (
            <div className="characterDisplayStats">
                <form className="characterNameStatsContainer">
                    <label htmlFor='deleteCharacter' className="characterNameStats">{props.character.name}</label>
                    <input type="button" name="deleteCharacter" value="Delete" className="deleteCharacter"/>
                </form>
                <div className="characterStats">
                    <div className="characterColumn1">
                        <p className="characterHealth">Health: {props.character.health}</p>
                        <p className="characterAttack">Attack: {props.character.attack}</p>
                    </div>
                    <div className="characterColumn2">
                        <p className="characterDefense">Defense: {props.character.defense}</p>
                        <p className="characterSpeed">Speed: {props.character.speed}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="characterDisplayNoStats">
                <h5 className="characterNameNoStats">{props.character.name}</h5>
            </div>
        )
    }
}

export default Character;