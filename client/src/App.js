import './App.css';

function App() {

  const today = new Date()

  return (
    <>
      <main>
        <header>
          <a href='' className='logo'>
            My Blog
          </a>
          <nav>
            <a href=''>Login</a>
            <a href=''>Register</a>
          </nav>
        </header>

        <div className='post'>
          <div className='image'>
            <img
              src='https://techcrunch.com/wp-content/uploads/2017/03/cyclops2-2017-0106-underwater.jpg?w=990&crop=1'
              alt='oceangate sub'
            />
          </div>

          <div className='content'>
            <h2>
              OceanGate fires a whistleblower, hackers threaten to leak Reddit
              data, and Marvel embraces AI art
            </h2>
            <div className="info">
              <a className='author'>Sam O'Cain</a>
              <time>2023-06-23 9:47am</time>
            </div>
            <p className='summary'>
              OceanGate fired a whistleblower: The director of marine operations
              at OceanGate, the company whose submersible went missing Sunday on
              an expedition to the Titanic in the North Atlantic, was fired
              after raising concerns about its first-of-a-kind carbon fiber hull
              and other systems before its maiden voyage, according to a court
              filing in a 2018 lawsuit.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
