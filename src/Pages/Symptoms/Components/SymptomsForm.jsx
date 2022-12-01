import Chip from '@mui/material/Chip';
import { default as React, useState } from 'react';
import AddChipsButton from '../../../Components/Forms/AddChipsButton';

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function SymptomsForm(props) {
    const {
        state,
        dispatch,
        ACTION_TYPE,
    } = props;

    const [anchorElBodySystem, setAnchorElBodySystem] = React.useState(null);
    const openBodySystem = Boolean(anchorElBodySystem);

    const handleClickBodySystem = (event) => {
        setAnchorElBodySystem(event.currentTarget);
    };

    const handleCloseBodySystem = () => {
        setAnchorElBodySystem(null);
    };

    const [anchorElRelatedBodySystem, setAnchorElRelatedBodySystem] = useState(null);
    const openRelatedBodySystem = Boolean(anchorElRelatedBodySystem);

    const handleClickRelatedBodySystem = (event) => {
        setAnchorElRelatedBodySystem(event.currentTarget);
    };

    const handleCloseRelatedBodySystem = () => {
        setAnchorElRelatedBodySystem(null);
    };

    const [anchorElSymptoms, setAnchorElSymptoms] = React.useState(null);
    const openSymptoms = Boolean(anchorElSymptoms);

    const handleClickSymptoms = (event) => {
        setAnchorElSymptoms(event.currentTarget);
    };
    
    const handleCloseSymptoms = () => {
        setAnchorElSymptoms(null);
    };

    const onChangeInput = (event) => {
        dispatch({
            type: ACTION_TYPE.CHANGE_INPUT,
            payload: {
                name: event.target.name,
                value: event.target.value
            }
        })
    }

    const handleDeleteChips = (value, name) => {
        dispatch({
            type: ACTION_TYPE.DELETE_CHIPS,
            payload: {
                value: value,
                name: name
            }
        })
    }

    const handleChangeAddChips = (value, name) => {
        dispatch({
            type: ACTION_TYPE.ADD_CHIPS,
            payload: {
                value: value,
                name: name
            }
        })
    }

    return (
        <>
            <label htmlFor="name" className='form__label'>Name</label>
            <input type="text" 
                placeholder='Name' 
                id='name' 
                className='form__input' 
                onChange={onChangeInput} 
                value={state.name}
                name='name'
            />

            <label htmlFor="type" className='form__label'>Type</label>
            <select id="type" 
                className='full__length form__select' 
                onChange={onChangeInput} 
                value={state.type}
                name='type'
            >
                <option disabled value="">Choose an option</option>
                <option value="symptom">Symptom</option>
                <option value="ailment">Ailment</option>
            </select>

            <label htmlFor="Description" 
                className='form__label' 
                style={{ marginTop: '2rem' }}
            >
                Short Description
            </label>
            <textarea type="text" 
                placeholder='Short Description' 
                id='description' 
                className='form__input' 
                rows="10" 
                value={state.description} 
                onChange={onChangeInput}
                name='description'
            />

            <label htmlFor="Systems" className='form__label'>Body Systems</label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.bodySystem.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }} 
                            key={value} 
                            label={value} 
                            onDelete={() => handleDeleteChips(value, 'bodySystem')}
                        />
                    ))}
                </div>
                <AddChipsButton 
                    open={openBodySystem}
                    onClickAddButton={handleClickBodySystem}
                    anchorEl={anchorElBodySystem}
                    handleClose={handleCloseBodySystem}
                    handleChange={handleChangeAddChips}
                    names={names}
                    fieldName='bodySystem'
                />
            </div>

            <label htmlFor="Systems" 
                className='form__label' 
                style={{ marginTop: '2rem' }}
            >
                Related Body Systems
            </label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.relatedBodySystem.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }} 
                            key={value} 
                            label={value} 
                            onDelete={() => handleDeleteChips(value, 'relatedBodySystem')}
                        />
                    ))}
                </div>
                <AddChipsButton 
                    open={openRelatedBodySystem}
                    onClickAddButton={handleClickRelatedBodySystem}
                    anchorEl={anchorElRelatedBodySystem}
                    handleClose={handleCloseRelatedBodySystem}
                    handleChange={handleChangeAddChips}
                    names={names}
                    fieldName='relatedBodySystem'
                />
            </div>

            <label htmlFor="Ailments" 
                className='form__label' 
                style={{ marginTop: '2rem' }}
            >
                Ailments
            </label>
            <div className='chip__container'>
                <div className='chips'>
                    {state.ailments.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }} 
                            key={value} 
                            label={value} 
                            onDelete={() => handleDeleteChips(value, 'ailments')} 
                        />
                    ))}
                </div>
                <AddChipsButton 
                    open={openSymptoms}
                    onClickAddButton={handleClickSymptoms}
                    anchorEl={anchorElSymptoms}
                    handleClose={handleCloseSymptoms}
                    handleChange={handleChangeAddChips}
                    names={names}
                    fieldName='ailments'
                />
            </div>
        </>
    )
}

export default SymptomsForm