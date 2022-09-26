import logo from './logo.svg';
import './scss/project.scss'
import Header from './components/Header';
import Intro from './components/Intro';
import Strong from './components/Strong';
import School from './components/School';
import Arbeit from './components/Arbeit';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Intro></Intro>
      <Strong></Strong>
      <School></School>
      <Arbeit></Arbeit>
    </div>
  );
}

export default App;
