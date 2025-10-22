import {
  Hero,
  About,
  Experience,
  Projects,
  Contact,
  Footer,
  Header
} from '@/components/sections';

function App() {
  return (
    <div className='max-w-4xl m-auto'>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
