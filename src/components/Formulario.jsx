import { Fragment } from 'react'
import useCotizador from '../hooks/useCotizador'
import { marcas, years, planes } from '../constants'
import Error from './Error'

export default function Formulario() {

  const { datos, handleChangeDatos, error, setError, cotizarSeguro } = useCotizador()

  const handleSubmit = e => {
    e.preventDefault()

    if (Object.values(datos).includes('')) {
      setError('Todos los campos son obligatorios')
      return
    }
    setError('')

    //* Cotizar
    cotizarSeguro()

  }

  return (
    <>
      {error && <Error />}

      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={e => handleChangeDatos(e)}
            value={datos.marca}
          >
            <option value="">-- Seleccione Marca --</option>
            {marcas.map(marca => (
              <option
                key={marca.id}
                value={marca.id}
              >
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={e => handleChangeDatos(e)}
            value={datos.year}
          >
            <option value="">-- Seleccione Año --</option>
            {years.map(year => (
              <option
                key={year}
                value={year}
              >
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elige un plan
          </label>
          <div className="flex gap-3 items-center">
            {planes.map(plan => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input
                  type="radio"
                  name='plan'
                  value={plan.id}
                  onChange={e => handleChangeDatos(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          className='w-full bg-indigo-500 hover:bg-indigo-700 transition-colors text-white cursor-pointer p-3 uppercase font-bold'
          value='Cotizar'
        />
      </form>
    </>
  )
}
