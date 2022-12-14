import React from "react";
import Profil from "./Profile/Profil";
import Photo from "./Profile/Photo.png"
function App() {
  const alertMyInput = fullName => alert(fullName);

  return (
    <div>
      <Profil> <img src={Photo} alt="" /></Profil>
      <Profil fullName="Mamadou Di Pape Diaw" bio ="je suis etudiant fullstack a gomycode " profession = "Informaticien" alertMyInput={alertMyInput}/>
      
    </div>
  );
}



export default App;
