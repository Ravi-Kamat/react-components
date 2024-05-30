import './App.css';
import Person, { Button, Header, List } from './Person';

function App() {

  const clickButton = () => {
    const name = document.getElementById('name')
    const age = document.getElementById('age')
    name.style.textTransform = "capitalize"
    name.style.color = "red"
    age.style.color = "red"
    // alert("button clicked")
  }

  const items = ['Robbert Jr.', 'Cris', 'Scarlet', 'Tom', 'Julia', 'Brat']



  return (
    <>
      <Header title={"Actor Info"} />
      <Person name="jonny depp" age="52" />
      <Button text={"Click!"} onClick={clickButton}
      />
      <List items={items} />

    </>
  );
}

export default App;
