import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../../redux/actions'

import style from './css/paginator.module.css'

export default function Paginator() {
  const paises = useSelector(state => state.countries)
  const dispatch = useDispatch()

  const DEMAS_PAGINAS = 10;

  let paginatorTotal;
  let paginasConData;

  let resto = paises.slice(10) //El total de paises despues de los primeros 10 de la primera pagina
  let paginator = Math.ceil(resto.length / 10)//Obtenemos la cantidad de paginas del paginador
  paginasConData = armarPaginas(resto, paginator) //Almacenamos las paginas con su data
  paginatorTotal = showPaginators(paginator)//cargamos en un array la cantidad de paginas

  function armarPaginas(data, paginas){
    let arr = []
    for(let i = 0; i < paginas; i++){
      if(i === 0){
        arr.push(data.slice(i * DEMAS_PAGINAS, DEMAS_PAGINAS - 1 * (i+1)))
        continue;
      }
      arr.push(data.slice(i * DEMAS_PAGINAS, DEMAS_PAGINAS * (i+1)))
    }
    return arr
  }


  function showPaginators(pages){
    let arr = []
    for(let i = 0; i < pages; i++){
      arr.push(i+1)
    }
    return arr
  }

  function cambiarPage(pagina){
    dispatch(changePage(paginasConData[pagina - 1]))
  }

  useEffect(() => {
    dispatch(changePage(paginasConData[0]))
  }, [])
  

  return (
    <div className={style.paginatorcontainer}>
      {
        paginatorTotal?.map(e => {
          return (
          <p key={e} onClick={(e) => cambiarPage(Number(e.target.innerText))}>{e}</p>
          )
        })
      }
      </div>
  )
}
