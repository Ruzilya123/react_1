

function App() {
  const isAdult = true;
  let text1;
  let text;
  if (!isAdult) {
    text1 = <p>Меньше 18</p>;
  }
  else {
    text1 = <p>18+</p>;
  }

  const isAdmin = true;
  if (isAdmin) {
    text = <p>Администратор</p>;
  }

  return (
    <div>
      {text1}
      {text}
      
    </div>
  );
}

export default App;
