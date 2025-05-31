import './App.css'


const users = [{
    name: 'name1',
    age: '331',
    id: 1,
},
    {
        name: 'name2',
        age: '332',
        id: 2,
    },{
        name: 'name3',
        age: '333',
        id: 3,
    }]


function App() {
    console.log('qdqasd')
  return (
    <>
        {users.map((user) => (
            <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.age}</p>
            </div>
        ))}
    </>
  )
}

export default App
