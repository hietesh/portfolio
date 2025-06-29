import Navbar from "./components/Navbar"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Hero from "./sections/Hero"
// import Projects from "./sections/Projects"
import Services from "./sections/Services"
import Contacts from "./sections/Contacts"

function App() {

  return (
    <>
      <div className="flex">
        <Navbar/>
        <main className="flex-1">
            <Hero/>
            <div className="bg-surface lg:px-[7%]">
              <About/>
              <Services/>
              <Experience/>
              {/* <Projects/> */}
              <Contacts/>
            </div>
        </main>
      </div>
    </>
  )
}

export default App
