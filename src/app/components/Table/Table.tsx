import React, { FC, useEffect, useState } from 'react'
import cx from 'clsx'

import Row from './Row'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { IPassenger } from '../../types'

import styles from './Table.module.scss'

interface IProps {
  passengers: IPassenger[]
}

const PAGE_SIZE = 40

const Table: FC<IProps> = ({ passengers }) => {
  const [visiblePassengers, setVisiblePassengers] = useState<IPassenger[]>([])

  const { page, loaderRef } = useIntersectionObserver()

  useEffect(() => {
    const loadPassengers = () => {
      const nextPassengers = passengers.slice(0, page * PAGE_SIZE)
      setVisiblePassengers(nextPassengers)
    }

    loadPassengers()
  }, [page, passengers])

  if (!passengers.length) return <b>Не найдено пассажиров</b>

  return (
    <>
      <div className={styles.caption}>Найдено пассажиров: {passengers.length}</div>

      <div className={styles.table}>
        <div className={cx(styles.head, styles.cell, styles.centered)}>ID</div>
        <div className={cx(styles.head, styles.cell)}>Name</div>
        <div className={cx(styles.head, styles.cell, styles.centered)}>Age</div>
        <div className={cx(styles.head, styles.cell, styles.centered)}>Gender</div>
        <div className={cx(styles.head, styles.cell, styles.centered)}>Survived</div>

        {visiblePassengers.map((passenger) => {
          return <Row key={passenger.id} passenger={passenger} />
        })}
      </div>
      <div ref={loaderRef} />
    </>
  )
}

export default Table
