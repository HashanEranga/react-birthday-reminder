import React from 'react';
import data from './data';
import List from './List';
function App() {

  return (
    <main>
      <section className='container'>
        <List people={data}/>
      </section>
    </main>
  )
}

export default App;
