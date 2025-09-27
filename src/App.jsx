import { Hello } from "./components/hello";
import { Card } from "./components/Card";
import { useState } from "react";

const CARDS = [
  {id:0, title: 'Card A', description: 'Filho de A' },
  {id:1, title: 'Card B', description: 'Filho de B' },
  {id:2, title: 'Card C', description: 'Filho de C' },
]

const App = () => {
  const [count, setCount] = useState(0)

  const inc = () => setCount(c => c +1)

  return (
    <main className="min-h-dvh bg-slate-50">
      <h1 className="text-3xl font-bold text-slate-800">
        Hello Tailwind + React!
      </h1>
      <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
       {/* <Card title="Card A">
          <p>Eu sou o filho de A</p>
          </Card>

          <Card title="Card B">
            <p>Eu sou o filho de B</p>
          </Card>
          
          <Card title="Card C">
            <p>Eu sou o filho de B</p>
          </Card>  */}

          {CARDS.map(item => (
            <Card key={item.id} title={item.title}>
              <p>{item.description}</p>
            </Card>
          ))}

      </div>

      <a href="#" className="inline-block px-4 py-2 rounded-lg border hover:bg-slate100 focus:ring-2 focust:ring-blue-500">
        Link com foco
      </a>


      <button className="inline-block px-4 py-2 rounded-lg border hover:bg-slate100 focus:ring-2 focust:ring-blue-500 cursor-pointer"
        onClick={inc}
        >
         Contador: {count} 
      </button>

      <Hello name="Geovane" />
    </main>
  );
}

export default App