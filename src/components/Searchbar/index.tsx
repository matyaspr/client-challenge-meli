import React, { useState, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import searchIcon from '../../assets/img/search.png'
import style from './style.module.scss'
import { useAutoFocus } from '../../hooks/useAutoFocus'

export const Searchbar: React.FC = () => {
  const [query, setQuery] = useState<string>('')
  const navigate = useNavigate()
  const searchBarRef = useAutoFocus()

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setQuery(ev.target.value)
  }

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    if (query) {
      navigate(`/items?search=${query}`)
    }
  }

  return (
    <form className={style.searchForm} onSubmit={handleSubmit} data-testid='search-form'>
      <label htmlFor='search-input'>Buscar un producto</label>
      <input
        ref={searchBarRef}
        type='text'
        id='search-input'
        placeholder='Nunca dejes de buscar'
        value={query}
        onChange={handleChange}
      />
      <button aria-label='Buscar'>
        <img src={searchIcon} alt='Buscar' />
      </button>
    </form>
  )
}
