import Chip from '@mui/material/Chip';
import { default as React, useCallback, useState } from 'react';
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

const AilmentForm = React.memo((props) => {
    const {
        bodySystemChip,
        handleChangeBodySystem,
        handleDeleteBodySystem,
        relatedBodySystemChip,
        handleDeleteRelatedBodySystem,
        handleChangeRelatedBodySystem,
        handleDeleteSymptoms,
        handleChangeSymptoms,
        symptoms,
        setName,
        name,
        type,
        setType,
        description,
        setDescription,
    } = props;

    const [anchorElBodySystem, setAnchorElBodySystem] = React.useState(null);
    const openBodySystem = Boolean(anchorElBodySystem);

    const handleClickBodySystem = useCallback((event) => {
        setAnchorElBodySystem(event.currentTarget);
    }, []);

    const handleCloseBodySystem = useCallback(() => {
        setAnchorElBodySystem(null);
    }, []);

    const [anchorElRelatedBodySystem, setAnchorElRelatedBodySystem] = useState(null);
    const openRelatedBodySystem = Boolean(anchorElRelatedBodySystem);

    const handleClickRelatedBodySystem = useCallback((event) => {
        setAnchorElRelatedBodySystem(event.currentTarget);
    }, []);

    const handleCloseRelatedBodySystem = useCallback(() => {
        setAnchorElRelatedBodySystem(null);
    }, []);

    const [anchorElSymptoms, setAnchorElSymptoms] = React.useState(null);
    const openSymptoms = Boolean(anchorElSymptoms);

    const handleClickSymptoms = useCallback((event) => {
        setAnchorElSymptoms(event.currentTarget);
    }, []);
    
    const handleCloseSymptoms = useCallback(() => {
        setAnchorElSymptoms(null);
    }, []);

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeType = (e) => {
        setType(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }


    return (
        <React.Fragment>
            <label htmlFor="name" className='form__label'>Name</label>
            <input type="text" placeholder='Name' id='#name' className='form__input' onChange={onChangeName} value={name}/>

            <label htmlFor="type" className='form__label'>Type</label>
            <select name="Days" id="type" className='full__length form__select' onChange={onChangeType} value={type}>
                <option disabled value="">Choose an option</option>
                <option value="ailment">Ailment</option>
                <option value="symptom">Symptom</option>
            </select>

            <label htmlFor="Description" className='form__label' style={{ marginTop: '2rem' }}>Short Description</label>
            <textarea type="text" 
                placeholder='Short Description' 
                id='#Description' 
                className='form__input' 
                rows="10" 
                value={description} 
                onChange={onChangeDescription}
            />

            <label htmlFor="Systems" className='form__label'>Body Systems</label>
            <div className='chip__container'>
                <div className='chips'>
                    {bodySystemChip.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }} 
                            key={value} 
                            label={value} 
                            onDelete={() => handleDeleteBodySystem(value)}
                        />
                    ))}
                </div>
                <AddChipsButton 
                    open={openBodySystem}
                    onClickAddButton={handleClickBodySystem}
                    anchorEl={anchorElBodySystem}
                    handleClose={handleCloseBodySystem}
                    handleChange={handleChangeBodySystem}
                    names={names}
                />
            </div>


            <label htmlFor="Systems" className='form__label' style={{ marginTop: '2rem' }}>Related Body Systems</label>
            <div className='chip__container'>
                <div className='chips'>
                    {relatedBodySystemChip.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }} 
                            key={value} 
                            label={value} 
                            onDelete={() => handleDeleteRelatedBodySystem(value)}
                        />
                    ))}
                </div>
                <AddChipsButton 
                    open={openRelatedBodySystem}
                    onClickAddButton={handleClickRelatedBodySystem}
                    anchorEl={anchorElRelatedBodySystem}
                    handleClose={handleCloseRelatedBodySystem}
                    handleChange={handleChangeRelatedBodySystem}
                    names={names}
                />
            </div>

            <label htmlFor="Systems" className='form__label' style={{ marginTop: '2rem' }}>Symptoms</label>
            <div className='chip__container'>
                <div className='chips'>
                    {symptoms.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }} 
                            key={value} 
                            label={value} 
                            onDelete={() => handleDeleteSymptoms(value)} 
                        />
                    ))}
                </div>
                <AddChipsButton 
                    open={openSymptoms}
                    onClickAddButton={handleClickSymptoms}
                    anchorEl={anchorElSymptoms}
                    handleClose={handleCloseSymptoms}
                    handleChange={handleChangeSymptoms}
                    names={names}
                />
            </div>
        </React.Fragment>
    )
})

export default AilmentForm