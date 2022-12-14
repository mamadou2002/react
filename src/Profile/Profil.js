function Profil(props) {
  const styleObject = { textAlign:"center", color:" blue"}
    return (
      <div style={styleObject}>
      {props.children}
      <h1>{props.fullName}</h1>
      <h2>{props.profession}</h2>
      <p>{props.bio}</p>
      <button onClick={() => props.alertMyInput(props.fullName)}>
     ALERTE
     </button>
      </div>      
    );

  }

export default Profil