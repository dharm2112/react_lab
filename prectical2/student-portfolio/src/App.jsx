import { Link, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'

function Home() {
  return (
    <main>
      <h1>Dharm Gabani</h1>
      <p>Welcome to my simple portfolio.</p>
    </main>
  )
}

function Projects() {
  return (
    <main>
      <h1>Projects</h1>
      <ul>
        <li>Portfolio Website</li>
        <li>Calculator App</li>
        <li>Todo List</li>
      </ul>
    </main>
  )
}

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/projects">Projects</Link> |{' '}
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
