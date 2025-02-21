import React, { FC, useEffect, useState } from 'react'

import { useDebounceValue } from '../../hooks/useDebounceValue'
import useFilterStore from '../../store'

import styles from './Filters.module.scss'

const Filters: FC = () => {
  const filter = useFilterStore.use.filter()

  const setNameFilter = useFilterStore.use.setName()
  const setMinAge = useFilterStore.use.setMinAge()
  const setMaxAge = useFilterStore.use.setMaxAge()
  const setGender = useFilterStore.use.setGender()
  const setSurvived = useFilterStore.use.setSurvived()

  const [name, setName] = useState<string>('')
  const debouncedName = useDebounceValue(name, 500)

  useEffect(() => {
    setNameFilter(debouncedName)
  }, [debouncedName])

  return (
    <div className={styles.wrapper}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Поиск по имени'
        className={styles.input}
      />

      <span className={styles.caption}>Возраст: </span>
      <div className={styles.age}>
        <input
          type='number'
          value={filter.age.min}
          onChange={(e) => setMinAge(Number(e.target.value))}
          placeholder='Минимальный'
          className={styles.inputAge}
        />
        <span> — </span>
        <input
          type='number'
          value={filter.age.max}
          onChange={(e) => setMaxAge(Number(e.target.value))}
          placeholder='Максимальный'
          className={styles.inputAge}
        />
      </div>

      <span className={styles.caption}>Пол: </span>
      <select
        value={filter.gender}
        onChange={(e) => setGender(e.target.value as 'male' | 'female')}
        className={styles.input}
      >
        <option value=''>Выберите пол</option>
        <option value='male'>👨</option>
        <option value='female'>👩</option>
      </select>

      <label htmlFor='survived' className={styles.caption}>
        <input
          type='checkbox'
          checked={filter.survived === true}
          onChange={(e) => setSurvived(e.target.checked || undefined)}
          id='survived'
        />{' '}
        Только выжившие
      </label>

      <label htmlFor='notSurvived'>
        <input
          type='checkbox'
          checked={filter.survived === false}
          onChange={(e) => setSurvived(e.target.checked ? false : undefined)}
          id='notSurvived'
        />{' '}
        Только невыжившие
      </label>
    </div>
  )
}

export default Filters
