import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { default as React, useReducer, useState } from 'react';
import { ACTION_TYPE, blendReducer, INITIAL_STATE } from '../../../Reducers/blendReducer';
import RegionalDataTable from '../../Supplements/Components/RegionalDataTable/RegionalDataTable';
import BlendsForm from './BlendsForm';
import RegionalNameFrom from './RegionalNameFrom';
import TopUsesForm from './TopUsesForm';
import TopUsesTable from './TopUsesTable/TopUsesTable';

const EditBlends = () => {
    const [state, dispatch] = useReducer(blendReducer, INITIAL_STATE)
    const [region, setRegion] = useState('');
    const [ragionalName, setRagionalName] = useState('');

    const [selectedRegions, setSelectedRegions] = useState([]);
    const [selectedTopUses, setSelectedTopUses] = useState([]);

    const [topUsesName, setTopUsesName] = useState('');
    const [topUsesDescription, setTopUsesDescription] = useState('');
    const [topUsesAilment, setTopUsesAilment] = useState('');


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
                <h1 className='header__title'>Edit Oil</h1>
                <div className='header__actions'>
                    <Button className='form__button'
                        variant='contained'
                        sx={{ borderRadius: '5rem' }}
                        onClick={updateSupplement}
                    >
                        Update Blend
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