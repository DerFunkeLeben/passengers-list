import React, { FC } from 'react'
import clsx from 'clsx'

import { IPassenger } from '../../types'
import styles from './Table.module.scss'

interface IProps {
  passenger: IPassenger
}

const Row: FC<IProps> = ({ passenger }) => {
  const { id, name, age, gender, survived } = passenger

  return (
    <>
      <div className={clsx(styles.cell, styles.centered)}>{id}</div>
      <div className={styles.cell}>{name}</div>
      <div className={clsx(styles.cell, styles.centered)}>{Math.ceil(age)}</div>
      <div className={clsx(styles.cell, styles.centered)}>{gender === 'male' ? '👨' : '👩'}</div>
      <div className={clsx(styles.cell, styles.centered, survived ? styles.green : styles.red)}>
        {survived ? '✔' : '×'}
      </div>
    </>
  )
}

export default Row
