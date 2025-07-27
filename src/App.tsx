function App() {
  return (
    <body className="bg-lightThemebody flex flex-col items-center justify-center w-full h-full">
      <div className="bg-white flex flex-col items-center justify-center rounded-[4px] py-10 px-25 shadow-2xl">
        <p className="font-medium text-4xl mb-10">Your tasks</p>
        <div className="border-1 px-4 w-3xl">
          <input className="w-full" type="text" placeholder="Pesquisar"/>
        </div>
      </div>
    </body>
  )
}

export default App
