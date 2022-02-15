import React, { useEffect } from 'react'

import style from './css/paginator.module.css'

export default function Paginator() {
  
  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [])
  
  return (
    <div className={style.paginatorcontainer}>
      {
        /* false?.map(e => {
          return (
          <p key={e} onClick={(e) => console.log(Number(e.target.innerText))}>{e}</p>
          )
        }) */
      }
      </div>
  )
}
