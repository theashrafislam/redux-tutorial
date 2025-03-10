import Counter from "./components/Counter"
import UserCard from "./components/UserCard"

function App() {

  


  return (
    <>
      <div className="flex items-center flex-col gap-5 justify-center mt-10">
        <Counter />

        <div className="max-w-7xl mx-auto">
          <UserCard />
        </div>

      </div>
    </>
  )
}

export default App
