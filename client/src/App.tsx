import axios from 'axios'
import { useState } from 'react'
import './App.css'
import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)

  const makeRequest = async () => {
    try {
      const response = await axios.get('/api/users')
      console.log('response: ', response.data)
    } catch (err) {
      console.log(err instanceof Error ? err.message)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React Today!
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
        <button onClick={() => makeRequest()}>make request</button>
      </header>
    </div>
  )
}

export default App
