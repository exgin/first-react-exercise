const App = () => (
  <div>
    <Tweet username='BillyBob23' name='Billy' date={new Date().toDateString()} msg='AHHHHHHHHH' />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
