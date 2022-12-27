function App() {
  const get = async () => {
    const res = await fetch("http://localhost:8005");
    console.log(res);
  };
  get();
  return <div>Welome to frontend</div>;
}
export default App;
