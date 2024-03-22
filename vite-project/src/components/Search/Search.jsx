import {MagnifyingGlass} from "@phosphor-icons/react";

/* Componente `Search` para realizar pesquisas */
const Search = ({search, setSearch}) => {
  return (
    <div className="search">
        <h2><MagnifyingGlass size={20} /> Pesquisar</h2>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite para pesquisar"/>
    </div>
  )
}

export default Search