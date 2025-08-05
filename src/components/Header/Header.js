import Nav from './Nav';

const header = () => {
  return (
    <header className="flex flex-col gap-3">
        <h1 className="text-center text-2xl font-bold ">Todo List</h1>
        <Nav></Nav>
    </header>
  )
}

export default header