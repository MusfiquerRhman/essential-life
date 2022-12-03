import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import { default as React, useCallback, useState } from 'react';
import CategoryForm from './CategoryForm';
import PanelsTable from './Panels/PanelsTable';
import TopTipsTable from './TopTips/TopTipsTable';
// import IngridiantFrom from "./Ingrediant/IngridiantFrom";
// import RecipeForm from './RecipesForm';

function EditCategoryFrom() {
    const [action, setAction] = useState('');
    const [name, setName] = useState('')
    const [shortDescription, setShortDescription] = useState('')
    const [recipe, setRecipe] = useState([])
    const [panelName, setPanelName] = useState('')
    const [panelDescription, setPanelDescription] = useState('')
    const [topTipsDescription, setTopTipsDescription] = useState('')
    const [displayImage, setDisplayImage] = useState("");
    const [file, setImage] = useState("");
    const [selectedPanels, setSelectedPanels] = useState([]);
    const [selectedTopTips, setSelectedTopTips] = useState([]);

    const handleDeleteAllSelectedPanel = useCallback(() => {

    }, [])

    const handleDeleteAllSelectedTopTips = useCallback(() => {

    }, [])

    const handleDeleteRecipe = useCallback((selectedName) => {
        setRecipe(previousChips => previousChips.filter(name => name !== selectedName))
    }, []);

    const updateCategory = () => {

    }

    const handleChangeAction = (event) => {
        setAction(event.target.value);
    };

    const handleClickExecuteAction = () => {
        // TODO
    }

    const addTopTips = () => {

    }


    const addPanel = () => {
        
    }

    const imageSelectHandler = (files) => {
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
        <section>
            <div className='form__header'>
                <h1 className='header__title'>Edit Category</h1>
                <div className='header__actions'>
                    <Button className='form__button'
                        variant='contained'
                        sx={{ borderRadius: '5rem' }}
                        onClick={updateCategory}
                    >
                        Update Category
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
                <CategoryForm
                    handleDeleteRecipe={handleDeleteRecipe}
                    recipe={recipe}
                    setShortDescription={setShortDescription}
                    shortDescription={shortDescription}
                    setName={setName}
                    name={name}
                />
            </div>

            <h1 style={{ marginTop: '5rem' }}>Panels</h1>
            <div className='form__container'>
                <div className='flex__row'  style={{ alignItems: 'center' }}>
                    <div className='third__length'>
                        <label htmlFor="name" className='form__label'>Name</label>
                        <input type="text"
                            placeholder='Name'
                            id='name'
                            className='form__input full__length'
                            onChange={(e) => setPanelName(e.target.value)}
                            value={panelName}
                            name='name'
                        />
                    </div>
                    <div className='third__length'>
                        <label htmlFor="description"
                            className='form__label'
                            style={{ marginTop: '1rem' }}
                        >
                            Description
                        </label>
                        <textarea type="text"
                            placeholder='Description'
                            id='description'
                            rows="10"
                            className='form__input full__length'
                            onChange={(e) => setPanelDescription(e.target.value)}
                            value={panelDescription}
                            name='description'
                        />
                    </div>
                    <div className='third__length'>
                        <label className='form__label' htmlFor="photo" style={{ marginTop: '2rem', marginRight: '2rem' }}>Image</label>
                        <input name='photo' className='file__input' type="file" id="photo" onChange={(e) => {
                            imageSelectHandler(e);
                        }} />
                    </div>
                </div>
                <Button className='form__button'
                    variant='contained'
                    sx={{ borderRadius: '5rem', marginTop: '1rem' }}
                    startIcon={<AddIcon />}
                    onClick={addPanel}
                    style={{ float: 'right', width: 'fit-content', marginLeft: 'auto' }}
                >
                    Add Panel
                </Button>

            </div>

            <div className='table__card'>
                <PanelsTable
                    setSelectedArray={setSelectedPanels}
                    handleSelectDeleteAll={handleDeleteAllSelectedPanel}
                />
            </div>

            <h1 style={{ marginTop: '5rem' }}>Top Tips</h1>
            <div className='form__container'>
                <label htmlFor="description"
                    className='form__label'
                    style={{ marginTop: '1rem' }}
                >
                    Description
                </label>
                <textarea type="text"
                    placeholder='Description'
                    id='description'
                    rows="10"
                    className='form__input full__length'
                    onChange={(e) => setTopTipsDescription(e.target.value)}
                    value={topTipsDescription}
                    name='description'
                />
                <Button className='form__button'
                    variant='contained'
                    sx={{ borderRadius: '5rem', marginTop: '1rem' }}
                    startIcon={<AddIcon />}
                    onClick={addTopTips}
                    style={{ float: 'right', width: 'fit-content', marginLeft: 'auto' }}
                >
                    Add Top Tips
                </Button>
            </div>

            <div className='table__card'>
                <TopTipsTable
                    setSelectedArray={setSelectedTopTips}
                    handleSelectDeleteAll={handleDeleteAllSelectedTopTips}
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

export default EditCategoryFrom