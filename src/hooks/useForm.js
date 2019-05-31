import { useState } from 'react'

const useForm = (callback, initialValues = {}, changeErrorFunction = () => {}) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = event => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    let contador = 0
    const attributes = Object.keys(values)
    // validate all fields arent empty
    attributes.forEach(element => {
      if (!values[element]) {
        contador += 1
      }
    })
    if (contador > 0) return changeErrorFunction(1)
    callback()
  }

  return {
    values,
    handleChange,
    handleSubmit
  }
}

export default useForm