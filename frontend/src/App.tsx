import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        {/* Content goes here */}
      </main>
      <Footer />
    </div>
  )
}

export default App
