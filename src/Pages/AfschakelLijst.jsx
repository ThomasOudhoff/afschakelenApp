import { useState } from 'react';
import cameraIcon from '../Assets/camera-icon.png';

function AfschakelLijst() {
    const [formulierData, setFormulierData] = useState({
        geldigVan: '',
        geldigTot: '',
        geldigWeek: '',
        uitschrijver: '',
        klus: '',
        sectie: '',
        afschakelenNaam1: '',
        afschakelenNaam2: '',
        personeelnummer1: '',
        personeelnummer2: '',
        bijschakelenNaam: '',
        bijschakelenPers: '',
        toonOpmerking: false,
    });
    const [stappen, setStappen] = useState(
        Array.from({ length: 8 }, (_, i) => ({
            stapNr: i + 1,
            actie: '',
            verantwoordelijke: '',
            slotnaam: '',
            schakelaarNr: '',
            uitBedrijf1: '',
            uitBedrijf2: '',
            inBedrijf: '',
        }))
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulierData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleStapChange = (index, veld, waarde) => {
        const nieuweStappen = [...stappen];
        nieuweStappen[index][veld] = waarde;
        setStappen(nieuweStappen);
    };
    const toggleOpmerking = (index) => {
        const nieuweStappen = [...stappen];
        nieuweStappen[index].toonOpmerking = !nieuweStappen[index].toonOpmerking;
        setStappen(nieuweStappen);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Afschakellijst invullen</h2>

            <div className="formulierkolom-links" style={{
                background: '#f0f0f0',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px'
            }}>
                <label>
                    Geldig van:
                    <input type="date" name="geldigVan" value={formulierData.geldigVan} onChange={handleChange} />
                </label>
                <br /><br />
                <label>
                    Geldig tot:
                    <input type="date" name="geldigTot" value={formulierData.geldigTot} onChange={handleChange} />
                </label>
                <br /><br />
                <label>
                    Geldig week:
                    <input type="number" name="geldigWeek" value={formulierData.geldigWeek} onChange={handleChange} />
                </label>
                <br /><br />
                <label>
                    Uitschrijver:
                    <input type="text" name="uitschrijver" value={formulierData.uitschrijver} onChange={handleChange} />
                </label>
                <br /><br />
                <label>
                    Klus:
                    <input type="text" name="klus" value={formulierData.klus} onChange={handleChange} />
                </label>
            </div>
            <div className="formulierkolom-rechts" style={{
                background: '#e8f4ff',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px'
            }}>
                <label>
                    Sectie:
                    <input type="text" name="sectie" value={formulierData.sectie} onChange={handleChange}/>
                </label>
                <br/><br/>
                <h4>Afschakelen door:</h4>
                <label>
                    Naam 1:
                    <input type="text" name="afschakelenNaam1" value={formulierData.afschakelenNaam1}
                           onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    Personeelnummer 1:
                    <input type="number" name="personeelnummer1" value={formulierData.personeelnummer1}
                           onChange={handleChange}/>
                </label>
                <br/><br/>
                <label>
                    Naam 2:
                    <input type="text" name="afschakelenNaam2" value={formulierData.afschakelenNaam2}
                           onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    Personeelnummer 2:
                    <input type="number" name="personeelnummer2" value={formulierData.personeelnummer2}
                           onChange={handleChange}/>
                </label>
                <br/><br/>

                <h4>Bijschakelen door:</h4>
                <label>
                    Naam:
                    <input type="text" name="bijschakelenNaam" value={formulierData.bijschakelenNaam}
                           onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    Personeelnummer:
                    <input type="number" name="bijschakelenPers" value={formulierData.bijschakelenPers}
                           onChange={handleChange}/>
                </label>
                <h3>Stappenoverzicht</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Stap</th>
                        <th>Actie</th>
                        <th>Verantwoordelijke</th>
                        <th>Slotnaam</th>
                        <th>Schakelaarnr</th>
                        <th>Uit bedrijf 1</th>
                        <th>Uit bedrijf 2</th>
                        <th>In bedrijf</th>
                        <th>Foto</th>
                    </tr>
                    </thead>
                    <tbody>
                    {stappen.map((stap, index) => (
                        <tr key={index}>
                            <td>{stap.stapNr}</td>
                            <td><input type="text" value={stap.actie}
                                       onChange={(e) => handleStapChange(index, 'actie', e.target.value)}/></td>
                            <td><input type="text" value={stap.verantwoordelijke}
                                       onChange={(e) => handleStapChange(index, 'verantwoordelijke', e.target.value)}/>
                            </td>
                            <td><input type="text" value={stap.slotnaam}
                                       onChange={(e) => handleStapChange(index, 'slotnaam', e.target.value)}/></td>
                            <td><input type="text" value={stap.schakelaarNr}
                                       onChange={(e) => handleStapChange(index, 'schakelaarNr', e.target.value)}/></td>
                            <td><input type="text" value={stap.uitBedrijf1}
                                       onChange={(e) => handleStapChange(index, 'uitBedrijf1', e.target.value)}/></td>
                            <td><input type="text" value={stap.uitBedrijf2}
                                       onChange={(e) => handleStapChange(index, 'uitBedrijf2', e.target.value)}/></td>
                            <td><input type="text" value={stap.inBedrijf}
                                       onChange={(e) => handleStapChange(index, 'inBedrijf', e.target.value)}/></td>
                            <td>
                                <label style={{cursor: 'pointer'}}>
                                    <img
                                        src={cameraIcon}
                                        alt="Upload foto"
                                        style={{width: '32px', height: '32px'}}
                                    />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        style={{display: 'none'}}
                                        onChange={(e) => handleStapChange(index, 'foto', e.target.files[0])}
                                    />
                                </label>
                                {stap.foto && (
                                    <div style={{marginTop: '5px'}}>
                                        <img
                                            src={URL.createObjectURL(stap.foto)}
                                            alt={`Foto stap ${stap.stapNr}`}
                                            style={{width: '60px', height: 'auto'}}
                                        />
                                    </div>
                                )}
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => toggleOpmerking(index)}
                                    style={{padding: '4px 8px', marginBottom: '5px'}}
                                >
                                    {stap.toonOpmerking ? 'Verberg opmerking' : 'Opmerking'}
                                </button>

                                {stap.toonOpmerking && (
                                    <div>
      <textarea
          placeholder="Voer hier je opmerking in"
          value={stap.opmerking}
          onChange={(e) => handleStapChange(index, 'opmerking', e.target.value)}
          style={{width: '100%', marginTop: '5px'}}
      />
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
        ;
}

export default AfschakelLijst;
