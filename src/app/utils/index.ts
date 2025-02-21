import { IFilter } from '../store/types'
import { IPassenger } from '../types'

const filterData = (data: IPassenger[], filter: IFilter) => {
  return data?.filter((passenger) => {
    const { name, age, gender, survived } = passenger
    // Фильтр по имени
    if (filter.name && !name.toLowerCase().includes(filter.name.toLowerCase())) {
      return false
    }

    // Фильтр по возрасту (min и max)
    if (filter.age) {
      if (filter.age.min !== undefined && age < filter.age.min) {
        return false
      }
      if (filter.age.max !== undefined && age > filter.age.max) {
        return false
      }
    }

    // Фильтр по полу
    if (filter.gender && gender !== filter.gender) {
      return false
    }

    // Фильтр по статусу выживания
    if (filter.survived !== undefined && survived !== filter.survived) {
      return false
    }

    return true
  })
}

export default filterData
