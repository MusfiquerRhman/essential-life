import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import {
  Ailments, Avaters, Blends, BodySystem, Cards, Categories, Constituents, ContentSuggestion,
  Dashboard, GlobalStatus, Oil, Properties, Recipes, Remedies, SeedDownload, Supplements, Symptoms, UGCRecipes,
  UGCRecipesPrivate, UGCRemedies,
  UGCRemediesPrivate, Users
} from './Pages';

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route exact path='/' element={<Dashboard />}/>
          <Route exact path='/ugcrecipes' element={<UGCRecipes />}/>
          <Route exact path='/ugcrecipes-private' element={<UGCRecipesPrivate />}/>
          <Route exact path='/ugcremedies' element={<UGCRemedies />}/>
          <Route exact path='/ugcremedies-private' element={<UGCRemediesPrivate />}/>
          <Route exact path='/content-suggestion' element={<ContentSuggestion />} />
          <Route exact path='/ailments' element={<Ailments />}/>
          <Route exact path='/body-system' element={<BodySystem />}/>
          <Route exact path='/remedies' element={<Remedies />} />
          <Route exact path='/symptoms' element={<Symptoms />} />
          <Route exact path='/cards' element={<Cards />} />
          <Route exact path='/categories' element={<Categories />} />
          <Route exact path='/recipes' element={<Recipes />} />
          <Route exact path='/blends' element={<Blends />} />
          <Route exact path='/oil' element={<Oil />} />
          <Route exact path='/supplements' element={<Supplements />} />
          <Route exact path='/constituents' element={<Constituents />} />
          <Route exact path='/properties' element={<Properties />} />
          <Route exact path='/avaters' element={<Avaters />} />
          <Route exact path='/users' element={<Users />} />
          <Route exact path='/global-status' element={<GlobalStatus />} />
          <Route exact path='/seed-download' element={<SeedDownload />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
