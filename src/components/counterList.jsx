import React, { useState } from 'react'
import Counter from './counter'


const CounterList = () => {
  const initialState = [
    {id: 0, value: 0, name: 'Ненужная вещь', price: 200}, 
    {id: 1, value: 0, name: 'Ложка'}, 
    {id: 2, value: 4, name: 'Вилка'},
    {id: 3, value: 0, name: 'Тарелка'},
    {id: 4, value: 0, name: 'Набор минималиста'}
  ]
  const [counters, setCounters] = useState(initialState)
 
  const handleDelete = (id) => {
    const newCounters = counters.filter(counter => counter.id !== id)
    setCounters(newCounters)
  }

  const handleReset = () => {
    setCounters(initialState)
  }

  const handleIncrement = (id) => {
    setCounters(counters.map(counter => {
      if (counter.id === id) {
        counter.value++
      }
      return counter
    }))
  }

  const handleDecrement = (id) => {
    setCounters(counters.map(counter => {
      if (counter.id === id) {
        counter.value--
      }
      return counter
    }))
  }

  return (
    <>
      {counters.map(counter => (
        <Counter 
          key={counter.id} 
          onHandleIncrement={handleIncrement}
          onHandleDecrement={handleDecrement}
          onDelete={handleDelete} 
          {...counter}
        />
      ))} 
      <button className='btn btn-primary btn-sm m-2' onClick={handleReset}>Сброс</button>
    </> 
  )
}

export default CounterList