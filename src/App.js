import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Sidebar from './Components/Sidebar/Sidebar';

import {
  AddAilmentsForm, AddAvaterForm, AddBlendsForm, AddBodySystemForm, AddCardsForm, AddCategoryForm, AddConstituentsFrom, AddContentSuggestion, AddOilForm,
  AddPropertiesForm, AddRecipesForm, AddRemedyForm, AddSuplementsForm, AddSymptomsForm, AddUGCRecipeForm, AddUGCRemedyForm, AddUserForm, Ailments, Avaters,
  Blends, BodySystem, Cards, Categories, Constituents, ContentSuggestion, Dashboard, EditAilmentForm, EditAilmentSolution, EditAilmentSupportiveSolution,
  EditAvaterForm, EditBlends, EditBlendsRegionalData, EditBlendsTopUses, EditBodySystem, EditBodySystemSolution, EditCardsForm, EditCategoryFrom, EditConstituentsFrom, EditIngrediantFrom, EditOil,
  EditOilFoundIn, EditOilTopUses, EditPanelFrom, EditPropertyForm, EditRecipeFrom, EditRecipeIngrediant, EditRegionalData, EditSupplementsForm, EditTopTipsFrom,
  EditTopUses, EditUGCRecipeForm, EditUGCRemedyForm, EditUserFavourite, EditUserForm, GlobalStatus, Oil, Properties, Recipes, Remedies, SeedDownload, Supplements,
  Symptoms, UGCRecipes, UGCRecipesPrivate, UGCRemedies, UGCRemediesPrivate, Users
} from './Pages';


function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <NavBar />
        <Routes>
          {/* Dashboard -----*/}
          <Route exact path='/' element={<Dashboard />}/>

          {/* UGC Recipes -----*/}
          <Route exact path='/ugcrecipes' element={<UGCRecipes />}/>
          <Route exact path='/ugcrecipes-private' element={<UGCRecipesPrivate />}/>
          <Route exact path='/ugcrecipes/new/:status' element={<AddUGCRecipeForm />} />
          <Route exact path='/ugcrecipes/:id' element={<EditUGCRecipeForm />} />

          {/* UGC remedies -----*/}
          <Route exact path='/ugcremedies' element={<UGCRemedies />}/>
          <Route exact path='/ugcremedies-private' element={<UGCRemediesPrivate />}/>
          <Route exact path='/ugcremedy/new/:status' element={<AddUGCRemedyForm />} />
          <Route exact path='/ugcremedy/:id' element={<EditUGCRemedyForm />} />

          {/* Content Suggestion -----*/}
          <Route exact path='/content-suggestion' element={<ContentSuggestion />} />
          <Route exact path='/content-suggestion/new/' element={<AddContentSuggestion />} />

          {/* Ailments -----*/}
          <Route exact path='/ailments' element={<Ailments />}/>
          <Route exact path='/ailments/new/' element={<AddAilmentsForm />}/>
          <Route exact path='/ailments/:id/' element={<EditAilmentForm />}/>
          <Route exact path='/ailments/solution/edit/:id' element={<EditAilmentSolution />}/>
          <Route exact path='/ailments/solution/supportive/edit/:id' element={<EditAilmentSupportiveSolution />}/>

          {/* Body System */}
          <Route exact path='/body-system' element={<BodySystem />}/>
          <Route exact path='/body-system/new' element={<AddBodySystemForm />}/>
          <Route exact path='/body-system/:id' element={<EditBodySystem />}/>
          <Route exact path='/body-system/:id/solutions/:solutionId' element={<EditBodySystemSolution />}/>


          {/* Remedies */}
          <Route exact path='/remedies' element={<Remedies />} />
          <Route exact path='/remedies/new' element={<AddRemedyForm />} />

          {/* Symptoms */}
          <Route exact path='/symptoms' element={<Symptoms />} />
          <Route exact path='/symptoms/new/' element={<AddSymptomsForm />} />

          {/* Cards */}
          <Route exact path='/cards' element={<Cards />} />
          <Route exact path='/cards/new' element={<AddCardsForm />} />
          <Route exact path='/cards/:id' element={<EditCardsForm />} />

          {/* Categories -----*/}
          <Route exact path='/categories' element={<Categories />} />
          <Route exact path='/categories/new' element={<AddCategoryForm />} />
          <Route exact path='/categories/:id' element={<EditCategoryFrom />} />
          <Route exact path='/categories/:id/panels/:panelId' element={<EditPanelFrom />} />
          <Route exact path='/categories/:id/toptips/:tipsId' element={<EditTopTipsFrom />} />

          {/* Recipes  -----*/}
          <Route exact path='/recipes' element={<Recipes />} />
          <Route exact path='/recipes/new' element={<AddRecipesForm />} />
          <Route exact path='/recipes/:id' element={<EditRecipeFrom />} />
          <Route exact path='/recipes/:id/ingredients/:ingId' element={<EditRecipeIngrediant />} />

          {/* Blends -----*/} 
          <Route exact path='/blends' element={<Blends />} />
          <Route exact path='/blends/new' element={<AddBlendsForm />} />
          <Route exact path='/blends/:id' element={<EditBlends />} />
          <Route exact path='/blends/:id/topuses/:usesId' element={<EditBlendsTopUses />} />
          <Route exact path='/blends/:id/regionname/:regionid' element={<EditBlendsRegionalData />} />

          {/* Oil -----*/} 
          <Route exact path='/oil' element={<Oil />} />
          <Route exact path='/oil/new' element={<AddOilForm />} />
          <Route exact path='/oil/:id' element={<EditOil />} />
          <Route exact path='/oil/:id/topuses/:usesId' element={<EditOilTopUses />} />
          <Route exact path='/oil/:id/foundin/:foundId' element={<EditOilFoundIn />} />

          {/* Suplements -----*/}
          <Route exact path='/supplements' element={<Supplements />} />
          <Route exact path='/supplements/new' element={<AddSuplementsForm />} />
          <Route exact path='/supplements/:id' element={<EditSupplementsForm />} />
          <Route exact path='/supplements/:id/regionname/:regionId' element={<EditRegionalData />} />
          <Route exact path='/supplements/:id/topuses/:usesId' element={<EditTopUses />} />
          <Route exact path='/supplements/:id/ingredients/:ingId' element={<EditIngrediantFrom />} />
          
          {/* Constituents -----*/}
          <Route exact path='/constituents' element={<Constituents />} />
          <Route exact path='/constituents/new' element={<AddConstituentsFrom />} />
          <Route exact path='/constituents/:id' element={<EditConstituentsFrom />} />

          {/* Properties -----*/}
          <Route exact path='/properties' element={<Properties />} />
          <Route exact path='/properties/new' element={<AddPropertiesForm />} />
          <Route exact path='/properties/:id' element={<EditPropertyForm />} />

          {/* Avaters ----- */}
          <Route exact path='/avaters' element={<Avaters />} />
          <Route exact path='/avaters/new' element={<AddAvaterForm />} />
          <Route exact path='/avaters/:id' element={<EditAvaterForm />} />
          

          {/* users -----*/}
          <Route exact path='/users' element={<Users />} />
          <Route exact path='/users/new' element={<AddUserForm />} />
          <Route exact path='/users/:id' element={<EditUserForm />} />
          <Route exact path='/users/:id/favourite/:favId' element={<EditUserFavourite />} />

          {/* Global Status -----*/}
          <Route exact path='/global-status' element={<GlobalStatus />} />

          {/* Seed Download -----*/}
          <Route exact path='/seed-download' element={<SeedDownload />} />

        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
