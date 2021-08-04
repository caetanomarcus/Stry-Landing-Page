import {createGlobalStyle} from 'styled-components'
import Header from './components/Header'
import Initial from './components/Initial'
import MidldleBox from './components/MidlleBox'
import NewYear from './components/NewYear'


const GlobalStyle = createGlobalStyle `
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Initial />
      <MidldleBox />
      <NewYear />
      
    </div>
  );
}

export default App;
