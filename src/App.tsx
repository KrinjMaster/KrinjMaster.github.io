function App() {
  return (
    <div className="app">
      <div className="container w-screen snap-y h-screen snap-mandatory overflow-y-auto">
        <section className="h-[100vh] bg-zinc-800 w-screen snap-start">
          <h1 className="font-bold text-center text-white text-[100px]">Main Section</h1>
        </section>
        <section className="h-[100vh] bg-zinc-600 w-screen snap-start">
          <h1 className="font-bold text-center text-white text-[100px]">Second Section</h1>
        </section>
        <section className="h-[100vh] bg-zinc-400 w-screen snap-start">
          <h1 className="font-bold text-center text-white text-[100px]">Third Section</h1>
        </section>
      </div>
    </div>
  )
}

export default App
