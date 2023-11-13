import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <h1>Entrada</h1>
    <Link to={'/outra'}>Outra</Link>
    <div style={{'margin-top': '5em'}}>
      <Link to={'https://github.com/EduardoMangeli/react-github-pages'}>Tutorial para incluir uma aplicação react no github pages</Link>  
    </div>
    </>
  );
}

export default App;
