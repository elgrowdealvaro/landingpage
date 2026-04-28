/* main app: assemble all sections */
function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Problem/>
      <Pipeline/>
      <MostImportant/>
      <Process/>
      <Market/>
      <WhyGrowdrive/>
      <ScalingCTA/>
      <FinalCTA/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
