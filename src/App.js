import { SnackbarProvider } from 'notistack';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Sidebar from "./Components/Sidebar/Sidebar";

import {
  AddAilmentsForm, AddAvaterForm, AddBlendsForm, AddBodySystemForm, AddCardsForm, AddCategoryForm, AddConstituentsFrom, AddContentSuggestion, AddOilForm, AddPropertiesForm,
  AddRecipesForm, AddRemedyForm, AddSuplementsForm, AddSymptomsForm, AddUGCRecipeForm, AddUGCRemedyForm, AddUserForm, Ailments, Avaters, Blends, BodySystem, Cards, Categories,
  Constituents, ContentSuggestion, Dashboard, EditAilmentForm, EditAilmentSolution, EditAilmentSupportiveSolution, EditAvaterForm, EditBlends, EditBlendsRegionalData, EditBlendsTopUses,
  EditBodySystem, EditBodySystemSolution, EditCardsForm, EditCategoryFrom, EditConstituentsFrom, EditIngrediantFrom, EditOil, EditOilFoundIn, EditOilTopUses, EditPanelFrom,
  EditPropertyForm, EditRecipeFrom, EditRecipeIngrediant, EditRecomendedSolutionSymptoms, EditRegionalData, EditRemedyForm, EditRemedyIngrediantFrom, EditSupplementsForm, EditSymptoms,
  EditTopTipsFrom, EditTopUses, EditUGCRecipeForm, EditUGCRemedyForm, EditUserFavourite, EditUserForm, ForgotPassword, GlobalStatus, Login, Oil, Properties, Recipes, Remedies, SeedDownload, Supplements,
  Symptoms, UGCRecipes, UGCRecipesPrivate, UGCRemedies, UGCRemediesPrivate, Users
} from "./Pages";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <BrowserRouter>
    <SnackbarProvider maxSnack={3}>
      {!isLoggedIn && (
        <>
          <Routes>
            <Route path="/" element = {<Login />} />
            <Route path="/forgot" element = {<ForgotPassword />} />
          </Routes>
        </>
      )}
      {
        isLoggedIn && (
        <Sidebar>
          <NavBar />
          <Routes>
            {/* Dashboard -----*/}
            <Route exact path="/" element={<Dashboard />} />

            {/* UGC Recipes -----*/}
            <Route exact path="/ugcrecipes/:status/new" element={<AddUGCRecipeForm />} />
            <Route exact path="/ugcrecipes/:id" element={<EditUGCRecipeForm />} />
            <Route exact path="/ugcrecipes/private" element={<UGCRecipesPrivate />} />
            <Route exact path="/ugcrecipes/public" element={<UGCRecipes />} />

            {/* UGC remedies -----*/}
            <Route exact path="/ugcremedies/:status/new" element={<AddUGCRemedyForm />} />
            <Route exact path="/ugcremedies/:id" element={<EditUGCRemedyForm />} />
            <Route exact path="/ugcremedies/private" element={<UGCRemediesPrivate />} />
            <Route exact path="/ugcremedies/public" element={<UGCRemedies />} />

            {/* Content Suggestion -----*/}
            <Route exact path="/content-suggestion/new/" element={<AddContentSuggestion />}  />
            <Route exact path="/content-suggestion" element={<ContentSuggestion />} />

            {/* Ailments -----*/}
            <Route exact path="/ailments/new" element={<AddAilmentsForm />} />
            <Route exact path="/ailments/:id" element={<EditAilmentForm />} />
            <Route exact path="/ailments/solution/edit/:id" element={<EditAilmentSolution />} />
            <Route exact path="/ailments/solution/supportive/edit/:id" element={<EditAilmentSupportiveSolution />} />
            <Route exact path="/ailments" element={<Ailments />} />

            {/* Body System  -----*/}
            <Route exact path="/body-system/new" element={<AddBodySystemForm />} />
            <Route exact path="/body-system/:id" element={<EditBodySystem />} />
            <Route exact path="/body-system/:id/solutions/:solutionId" element={<EditBodySystemSolution />} />
            <Route exact path="/body-system" element={<BodySystem />} />

            {/* Remedies  -----*/}
            <Route exact path="/remedies/new" element={<AddRemedyForm />} />
            <Route exact path="/remedies/:id" element={<EditRemedyForm />} />
            <Route exact path="/remedies/:id/ingredients/:ingId" element={<EditRemedyIngrediantFrom />} />
            <Route exact path="/remedies" element={<Remedies />} />

            {/* Symptoms */}
            <Route exact path="/symptoms/new" element={<AddSymptomsForm />} />
            <Route exact path="/symptoms/:id" element={<EditSymptoms />} />
            <Route exact path="/symptoms/:id/solution/:solutionId" element={<EditRecomendedSolutionSymptoms />}  />
            <Route exact path="/symptoms" element={<Symptoms />} />

            {/* Cards  -----*/}
            <Route exact path="/cards/new" element={<AddCardsForm />} />
            <Route exact path="/cards/:id" element={<EditCardsForm />} />
            <Route exact path="/cards" element={<Cards />} />

            {/* Categories -----*/}
            <Route exact path="/categories/new" element={<AddCategoryForm />} />
            <Route exact path="/categories/:id" element={<EditCategoryFrom />} />
            <Route exact path="/categories/:id/panels/:panelId" element={<EditPanelFrom />} />
            <Route exact path="/categories/:id/toptips/:tipsId" element={<EditTopTipsFrom />} />
            <Route exact path="/categories" element={<Categories />} />

            {/* Recipes  -----*/}
            <Route exact path="/recipes/new" element={<AddRecipesForm />} />
            <Route exact path="/recipes/:id" element={<EditRecipeFrom />} />
            <Route exact path="/recipes/:id/ingredients/:ingId" element={<EditRecipeIngrediant />} />
            <Route exact path="/recipes" element={<Recipes />} />

            {/* Blends -----*/}
            <Route exact path="/blends/new" element={<AddBlendsForm />} />
            <Route exact path="/blends/:id" element={<EditBlends />} />
            <Route exact path="/blends/:id/topuses/:usesId" element={<EditBlendsTopUses />} />
            <Route exact path="/blends/:id/regionname/:regionid" element={<EditBlendsRegionalData />} />
            <Route exact path="/blends" element={<Blends />} />

            {/* Oil -----*/}
            <Route exact path="/oil/new" element={<AddOilForm />} />
            <Route exact path="/oil/:id" element={<EditOil />} />
            <Route exact path="/oil/:id/topuses/:usesId" element={<EditOilTopUses />} />
            <Route exact path="/oil/:id/foundin/:foundId" element={<EditOilFoundIn />}/>
            <Route exact path="/oil" element={<Oil />} />

            {/* Suplements -----*/}
            <Route exact path="/supplements/new" element={<AddSuplementsForm />}/>
            <Route exact path="/supplements/:id" element={<EditSupplementsForm />}/>
            <Route exact path="/supplements/:id/regionname/:regionId" element={<EditRegionalData />}/>
            <Route exact path="/supplements/:id/topuses/:usesId" element={<EditTopUses />} />
            <Route exact path="/supplements/:id/ingredients/:ingId" element={<EditIngrediantFrom />}/>
            <Route exact path="/supplements" element={<Supplements />} />

            {/* Constituents -----*/}
            <Route exact path="/constituents/new" element={<AddConstituentsFrom />}/>
            <Route exact path="/constituents/:id" element={<EditConstituentsFrom />} />
            <Route exact path="/constituents" element={<Constituents />} />

            {/* Properties -----*/}
            <Route exact path="/properties/new" element={<AddPropertiesForm />} />
            <Route exact path="/properties/:id" element={<EditPropertyForm />} />
            <Route exact path="/properties" element={<Properties />} />

            {/* Avaters ----- */}
            <Route exact path="/avaters/new" element={<AddAvaterForm />} />
            <Route exact path="/avaters/:id" element={<EditAvaterForm />} />
            <Route exact path="/avaters" element={<Avaters />} />

            {/* users -----*/}
            <Route exact path="/users/new" element={<AddUserForm />} />
            <Route exact path="/users/:id" element={<EditUserForm />} />
            <Route exact path="/users/:id/favourite/:favId" element={<EditUserFavourite />}/>
            <Route exact path="/users" element={<Users />} />

            {/* Global Status -----*/}
            <Route exact path="/global-status" element={<GlobalStatus />} />

            {/* Seed Download -----*/}
            <Route exact path="/seed-download" element={<SeedDownload />} />
        </Routes>
      </Sidebar>
        )
      }
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
