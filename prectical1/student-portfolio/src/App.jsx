import Footer from './components/Footer'
import Skills from './components/skill'
import Header from './components/Header'
import About from './components/About'
import './App.css'

function App() {

  return (
    <>
      <h2>hello , welcome to my portfolio - run.with.dharm.</h2>
      <Header name="Dharm Gabani" />
      <About />

      <Skills skillList={['HTML', 'CSS', 'JavaScript', 'React']} />
      
      <Footer />
    </>
  )
}

export default App;
