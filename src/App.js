import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Sidebar from './Components/Sidebar/Sidebar';

import {
  AddAilmentsForm, AddAvaterForm, AddBlendsForm, AddBodySystemForm, AddCardsForm, AddCategoryForm, AddConstituentsFrom, AddContentSuggestion, AddOilForm, AddPropertiesForm, AddRecipesForm, AddRemedyForm, AddSuplementsForm, AddSymptomsForm, AddUGCRecipeForm, AddUGCRemedyForm, Ailments, Avaters, Blends, BodySystem, Cards, Categories, Constituents, ContentSuggestion,
  Dashboard, EditAilmentForm, EditAilmentSolution, EditAilmentSupportiveSolution, EditUGCRecipeForm, EditUGCRemedyForm, GlobalStatus, Oil, Properties, Recipes, Remedies, SeedDownload, Supplements, Symptoms, UGCRecipes,
  UGCRecipesPrivate, UGCRemedies, UGCRemediesPrivate, Users
} from './Pages';


function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <NavBar />
        <Routes>
          {/* Dashboard */}
          <Route exact path='/' element={<Dashboard />}/>

          {/* UGC Recipes */}
          <Route exact path='/ugcrecipes' element={<UGCRecipes />}/>
          <Route exact path='/ugcrecipes-private' element={<UGCRecipesPrivate />}/>
          <Route exact path='/recipe/new/:status' element={<AddUGCRecipeForm />} />
          <Route exact path='/recipe/:id' element={<EditUGCRecipeForm />} />

          {/* UGC remedies */}
          <Route exact path='/ugcremedies' element={<UGCRemedies />}/>
          <Route exact path='/ugcremedies-private' element={<UGCRemediesPrivate />}/>
          <Route exact path='/ugcremedy/new/:status' element={<AddUGCRemedyForm />} />
          <Route exact path='/ugcremedy/:id' element={<EditUGCRemedyForm />} />

          {/* Content Suggestion */}
          <Route exact path='/content-suggestion' element={<ContentSuggestion />} />
          <Route exact path='/content-suggestion/new/' element={<AddContentSuggestion />} />

          {/* Ailments */}
          <Route exact path='/ailments' element={<Ailments />}/>
          <Route exact path='/ailments/new/' element={<AddAilmentsForm />}/>
          <Route exact path='/ailments/:id/' element={<EditAilmentForm />}/>
          <Route exact path='/ailments/solution/edit/:id' element={<EditAilmentSolution />}/>
          <Route exact path='/ailments/solution/supportive/edit/:id' element={<EditAilmentSupportiveSolution />}/>

          {/* Body System */}
          <Route exact path='/body-system' element={<BodySystem />}/>
          <Route exact path='/body-system/new' element={<AddBodySystemForm />}/>

          {/* Remedies */}
          <Route exact path='/remedies' element={<Remedies />} />
          <Route exact path='/remedies/new' element={<AddRemedyForm />} />

          {/* Symptoms */}
          <Route exact path='/symptoms' element={<Symptoms />} />
          <Route exact path='/symptoms/new/' element={<AddSymptomsForm />} />

          {/* Cards */}
          <Route exact path='/cards' element={<Cards />} />
          <Route exact path='/card/new' element={<AddCardsForm />} />

          {/* Categories */}
          <Route exact path='/categories' element={<Categories />} />
          <Route exact path='/categories/new' element={<AddCategoryForm />} />

          {/* Recipes */}
          <Route exact path='/recipes' element={<Recipes />} />
          <Route exact path='/recipes/new' element={<AddRecipesForm />} />
s
          {/* Blends */}
          <Route exact path='/blends' element={<Blends />} />
          <Route exact path='/blends/new' element={<AddBlendsForm />} />

          {/* Oil */}
          <Route exact path='/oil' element={<Oil />} />
          <Route exact path='/oil/new' element={<AddOilForm />} />

          {/* Suplements */}
          <Route exact path='/supplements' element={<Supplements />} />
          <Route exact path='/supplements/new' element={<AddSuplementsForm />} />

          {/* Constituents */}
          <Route exact path='/constituents' element={<Constituents />} />
          <Route exact path='/constituents/new' element={<AddConstituentsFrom />} />

          {/* Properties */}
          <Route exact path='/properties' element={<Properties />} />
          <Route exact path='/properties/new' element={<AddPropertiesForm />} />

          {/* Avaters */}
          <Route exact path='/avaters' element={<Avaters />} />
          <Route exact path='/avaters/new' element={<AddAvaterForm />} />

          {/* users */}
          <Route exact path='/users' element={<Users />} />

          {/* Global Status */}
          <Route exact path='/global-status' element={<GlobalStatus />} />

          {/* Seed Download */}
          <Route exact path='/seed-download' element={<SeedDownload />} />

        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
