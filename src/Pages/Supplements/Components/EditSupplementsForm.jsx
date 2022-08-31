import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useReducer, useState } from 'react';
import { ACTION_TYPE, INITIAL_STATE, supplementsReducer } from '../../../Reducers/supplementsReducer';
import IngrediantTable from './IngrediantTable';
import IngridiantFrom from "./IngridiantFrom";
import RegionalDataTable from "./RegionalDataTable/RegionalDataTable";
import RegionalNameFrom from "./RegionalNameFrom";
import SupplementForm from "./SupplementForm";
import TopUsesForm from './TopUsesForm';
import TopUsesTable from "./TopUsesTable/TopUsesTable";

function EditSupplementsForm() {
    const [state, dispatch] = useReducer(supplementsReducer, INITIAL_STATE)
    const [region, setRegion] = useState('');
    const [ragionalName, setRagionalName] = useState('');

    const [selectedRegions, setSelectedRegions] = useState([]);
    const [selectedTopUses, setSelectedTopUses] = useState([]);
    const [selectedIngridiants, setselectedIngridiants] = useState([])

    const [topUsesName, setTopUsesName] = useState('');
    const [topUsesDescription, setTopUsesDescription] = useState('');
    const [topUsesAilment, setTopUsesAilment] = useState('');

    const [ingQuantity, setIngQuantity] = useState('')
    const [ingMeasure, setIngMeasure] = useState('')
    const [customeName, setCustomeName] = useState('')
    const [type, setType] = useState('')
    const [oil, setOil] = useState('')
    const [blend, setblend] = useState('')

    const handleSelectDeleteIngridiants = () => {
        
    }

    const addRegionalName = () => {

    }

    const updateSupplement = () => {

    }

    const handleSelectDeleteAllRegions = () => {
        // TODO: Delete all selected
    }

    const handleSelectDeleteAllTopUses = () => {
        // TODO: Delete all selected
    }

    const addTopUses = () => {

    }

    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Supplement</h1>
                <div className='header__actions'>
                    <Button className='form__button'
                        variant='contained'
                        sx={{ borderRadius: '5rem' }}
                        onClick={updateSupplement}
                    >
                        Update Supplement
                    </Button>
                </div>
            </div>

            <div className='form__container'>
                <SupplementForm
                    state={state}
                    dispatch={dispatch}
                    ACTION_TYPE={ACTION_TYPE}
                />
            </div>

            <h1 style={{ marginTop: '5rem' }}>Regional Names</h1>
            <div className='form__container flex__row' style={{ alignItems: 'center' }}>
                <RegionalNameFrom
                    region={region}
                    setRegion={setRegion}
                    setRagionalName={setRagionalName}
                    ragionalName={ragionalName}
                />
                <div className='third__length'>
                    <Button className='form__button'
                        variant='contained'
                        sx={{ borderRadius: '5rem' }}
                        startIcon={<AddIcon />}
                        onClick={addRegionalName}
                        style={{ float: 'right' }}
                    >
                        Add Regional Name
                    </Button>
                </div>
            </div>

            <div className='table__card'>
                <RegionalDataTable
                    setSelectedArray={setSelectedRegions}
                    handleSelectDeleteAll={handleSelectDeleteAllRegions}
                />
            </div>

            <h1 style={{ marginTop: '5rem' }}>Top Uses</h1>
            <div className='form__container'>
                <div className='flex__row' style={{ alignItems: 'center' }}>
                    <TopUsesForm
                        name={topUsesName}
                        setName={setTopUsesName}
                        setDescription={topUsesDescription}
                        description={setTopUsesDescription}
                        ailment={topUsesAilment}
                        setAilment={setTopUsesAilment}
                    />
                </div>
                <Button className='form__button'
                    variant='contained'
                    sx={{ borderRadius: '5rem' }}
                    startIcon={<AddIcon />}
                    onClick={addTopUses}
                    style={{ float: 'right', width: 'fit-content', marginLeft: 'auto' }}
                >
                    Add Top Uses
                </Button>
            </div >

            <div className='table__card'>
                <TopUsesTable
                    setSelectedArray={setSelectedTopUses}
                    handleSelectDeleteAll={handleSelectDeleteAllTopUses}
                />
            </div>


            <h1 style={{ marginTop: '5rem' }}>Ingredients</h1>
            <div className='form__container'>
                <IngridiantFrom
                    quantity={ingQuantity}
                    setQuantity={setIngQuantity}
                    measure={ingMeasure}
                    setMeasure={setIngMeasure}
                    customName={customeName}
                    setCustomName={setCustomeName}
                    type={type}
                    setType={setType}
                    oil={oil}
                    setOil={setOil}
                    blend={blend}
                    setBlend={setblend}
                />
                <Button className='form__button'
                    variant='contained'
                    sx={{ borderRadius: '5rem', marginTop: '1rem' }}
                    startIcon={<AddIcon />}
                    onClick={addTopUses}
                    style={{ float: 'right', width: 'fit-content', marginLeft: 'auto' }}
                >
                    Add Ingrediant
                </Button>
            </div >

            <div className='table__card'>
                <IngrediantTable
                    setSelectedArray={setselectedIngridiants}
                    handleSelectDeleteAll={handleSelectDeleteIngridiants}
                />
            </div>

            <h1 style={{ marginTop: '5rem' }}>Links</h1>
            <div className='form__container'>
                <p>Internal deep link:</p>
                <p className='link'><b>essentiallife://resource/Ailment/04dfe2f8-51f1-4e60-bcf0-2da6301c2ad2</b></p>

                <p>Web sharing link:</p>
                <p className='link'><b>https://link.essentiallife.com/Ailment/04dfe2f8-51f1-4e60-bcf0-2da6301c2ad2</b></p>
            </div>

        </section>
    )
}

export default EditSupplementsForm