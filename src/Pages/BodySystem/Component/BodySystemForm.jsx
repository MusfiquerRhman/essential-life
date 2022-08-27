import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { default as React, useState } from 'react';

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

function BodySystemForm(props) {
    const {
        RemediesChip,
        handleChangeRemedyTips,
        handleDeleteRemedyTips,
        ailmentAndSymptoms,
        handleDeleteAilmentAndSymptoms,
        handleChangeAilmentAndSymptoms,
        handleDeleteAssociatedProperties,
        handleChangeAssociatedProperties,
        associatedProperties,
        setName,
        name,
        description,
        setDescription,
        tip,
        setTip,
        setDisplayImage,
        setImage
    } = props;

    const [anchorElRemedy, setAnchorElRemedy] = React.useState(null);
    const openRemedy = Boolean(anchorElRemedy);

    const handleClickRemedy = (event) => {
        setAnchorElRemedy(event.currentTarget);
    };

    const handleCloseRemedy = () => {
        setAnchorElRemedy(null);
    };

    const [anchorElAilmentAndSymptoms, setAnchorElAilmentAndSymptoms] = useState(null);
    const openAilmentAndSymptoms = Boolean(anchorElAilmentAndSymptoms);

    const handleClickAilmentAndSymptoms = (event) => {
        setAnchorElAilmentAndSymptoms(event.currentTarget);
    };

    const handleCloseAilmentAndSymptoms = () => {
        setAnchorElAilmentAndSymptoms(null);
    };

    const [anchorElAssociatedProperties, setAnchorElAssociatedProperties] = React.useState(null);
    const openAssociatedProperties = Boolean(anchorElAssociatedProperties);

    const handleClickAssociatedProperties = (event) => {
        setAnchorElAssociatedProperties(event.currentTarget);
    };

    const handleCloseAssociatedProperties = () => {
        setAnchorElAssociatedProperties(null);
    };

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const onChangeTip = (e) => {
        setTip(e.target.value)
    }

    const imageSelectHandeler = (files) => {
        setImage(files[0]);
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setDisplayImage(reader.result);
            }
        };
        if (files[0] && files[0].type.match("image.*")) {
            reader.readAsDataURL(files[0]);
        }
    };


    return (
        <>
            <label htmlFor="name" className='form__label'>Name</label>
            <input type="text" placeholder='Name' id='#name' className='form__input' onChange={onChangeName} value={name} />

            <label htmlFor="Description" className='form__label' style={{ marginTop: '2rem' }}>Short Description</label>
            <textarea type="text"
                placeholder='Short Description'
                id='#Description'
                className='form__input'
                rows="10"
                value={description}
                onChange={onChangeDescription}
            />

            <label htmlFor="Tip" className='form__label' style={{ marginTop: '2rem' }}>Usage Tip</label>
            <textarea type="text"
                placeholder='Usage Tip'
                id='#Tip'
                className='form__input'
                rows="10"
                value={tip}
                onChange={onChangeTip}
            />

            <label htmlFor="Systems" className='form__label'>Remedies</label>
            <div className='chip__container'>
                <div className='chips'>
                    {RemediesChip.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={value}
                            label={value}
                            onDelete={() => handleDeleteRemedyTips(value)}
                        />
                    ))}
                </div>
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={openRemedy ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openRemedy ? 'true' : undefined}
                        onClick={handleClickRemedy}
                        startIcon={<AddIcon />}
                        sx={{ borderRadius: '2rem' }}
                    >
                        Add
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElRemedy}
                        open={openRemedy}
                        onClose={handleCloseRemedy}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {names.map((item, index) => (
                            <MenuItem key={index} onClick={() => handleChangeRemedyTips(item)}>{item}</MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>


            <label htmlFor="Systems" className='form__label' style={{ marginTop: '2rem' }}>Ailments &amp; Symptoms</label>
            <div className='chip__container'>
                <div className='chips'>
                    {ailmentAndSymptoms.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={value}
                            label={value}
                            onDelete={() => handleDeleteAilmentAndSymptoms(value)}
                        />
                    ))}
                </div>
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={openAilmentAndSymptoms ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openAilmentAndSymptoms ? 'true' : undefined}
                        onClick={handleClickAilmentAndSymptoms}
                        startIcon={<AddIcon />}
                        sx={{ borderRadius: '2rem' }}
                    >
                        Add
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElAilmentAndSymptoms}
                        open={openAilmentAndSymptoms}
                        onClose={handleCloseAilmentAndSymptoms}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {names.map((item, index) => (
                            <MenuItem key={index} onClick={() => handleChangeAilmentAndSymptoms(item)}>{item}</MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>

            <label htmlFor="Systems" className='form__label'>Symptoms</label>
            <div className='chip__container'>
                <div className='chips'>
                    {associatedProperties.map((value) => (
                        <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                            key={value}
                            label={value}
                            onDelete={() => handleDeleteAssociatedProperties(value)}
                        />
                    ))}
                </div>
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={openAssociatedProperties ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openAssociatedProperties ? 'true' : undefined}
                        onClick={handleClickAssociatedProperties}
                        startIcon={<AddIcon />}
                        sx={{ borderRadius: '2rem' }}
                    >
                        Add
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElAssociatedProperties}
                        open={openAssociatedProperties}
                        onClose={handleCloseAssociatedProperties}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {names.map((item, index) => (
                            <MenuItem key={index} onClick={() => handleChangeAssociatedProperties(item)}>{item}</MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>
            <label className='form__label' htmlFor="myfile">Select an Image:</label>
                <input className='file__input' type="file" id="myfile" name="myfile" onChange={(e) => {
                    imageSelectHandeler(e.target.files);
                }} />
        </>
    )
}

export default BodySystemForm