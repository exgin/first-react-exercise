const App = () => (
  <div>
    <Person hobbies={['coding', 'swimming', 'stocks']} age={19} name='Bob' />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
