import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import { default as React, useCallback, useReducer, useState } from 'react';
import { ACTION_TYPE, blendReducer, INITIAL_STATE } from '../../../Reducers/blendReducer';
import RegionalDataTable from '../../Supplements/Components/RegionalDataTable/RegionalDataTable';
import BlendsForm from './BlendsForm';
import RegionalNameFrom from './RegionalNameFrom';
import TopUsesForm from './TopUsesForm';
import TopUsesTable from './TopUsesTable/TopUsesTable';

const EditBlends = () => {
    const [state, dispatch] = useReducer(blendReducer, INITIAL_STATE)
    const [region, setRegion] = useState('');
    const [regionalName, setRegionalName] = useState('');

    const [selectedRegions, setSelectedRegions] = useState([]);
    const [selectedTopUses, setSelectedTopUses] = useState([]);

    const [topUsesName, setTopUsesName] = useState('');
    const [topUsesDescription, setTopUsesDescription] = useState('');
    const [topUsesAilment, setTopUsesAilment] = useState('');


    const addRegionalName = () => {

    }

    const updateSupplement = () => {

    }

    const handleSelectDeleteAllRegions = useCallback(() => {
        // TODO: Delete all selected
    }, [])

    const handleSelectDeleteAllTopUses = useCallback(() => {
        // TODO: Delete all selected
    }, [])

    const addTopUses = () => {

    }

    const [action, setAction] = useState('');

    const handleChangeAction = (event) => {
        setAction(event.target.value);
    };

    const handleClickExecuteAction = () => {
        // TODO
    }


    return (
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Blend</h1>
                <div className='header__actions'>
                    <Button className='form__button'
                        variant='contained'
                        sx={{ borderRadius: '5rem' }}
                        onClick={updateSupplement}
                    >
                        Update Blend
                    </Button>

                    <select name="Days" id="days" defaultValue={action} onChange={handleChangeAction}>
                        <option disabled value="">Select an Action</option>
                        <option value="force">Force Update</option>
                    </select>

                    <Button
                        id="action-button"
                        aria-haspopup="true"
                        onClick={handleClickExecuteAction}
                        variant='contained'
                        sx={{
                            padding: '0.5rem',
                            borderRadius: '2rem',
                            marginLeft: '1rem'
                        }}
                        disabled={action === '' ? true : false}
                    >
                        <DoneIcon />
                    </Button>
                </div>
            </div>

            <div className='form__container'>
                <BlendsForm
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
                    setRagionalName={setRegionalName}
                    ragionalName={regionalName}
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
                        description={topUsesDescription}
                        setDescription={setTopUsesDescription}
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

export default EditBlends;