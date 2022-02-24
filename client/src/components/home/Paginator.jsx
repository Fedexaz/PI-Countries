import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { countryDetail, loadingState, filterAndOrder, loadCountries } from '../../redux/actions';

import Country from './Country';

import style from './css/countries.module.css'
import style2 from './css/paginator.module.css'

export default function Paginator() {
  const data = useSelector(state => state.countries);
  const loading = useSelector(state => state.loading);
  const filtradoUOrdenado = useSelector(state => state.applyFilterAndOrder)
  
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  function changePage(event) {
    const pageNumber = Number(event.target.value);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage === 1 ? 0 : currentPage * 10 - 10;
    const endIndex = currentPage === 1 ? 9 : startIndex + 10;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    return new Array(Math.ceil(data.length / 10)).fill().map((_, idx) => idx + 1)
  };
  
  useEffect(() => {
    window.scrollTo({ 
      behavior: 'smooth',
      top: '0px' 
    });
    document.title = "Countries página " + currentPage;
  }, [currentPage]);

  useEffect(()=>{
      if(filtradoUOrdenado){
        setCurrentPage(1)
        dispatch(loadingState(false))
        dispatch(filterAndOrder(false))
      }
  }, [filtradoUOrdenado])

  return (
    <>
      <div className={style.cardcontainer}>
      {
        !loading ?
        data.length ?
          getPaginatedData()?.map((c => {
            return(
            <Link key={c.ID} to={`/country/${c.ID}`} onClick={() => dispatch(countryDetail({
                ID: c.ID,
                name: c.name,
                urlImg: c.urlImg,
                continent: c.continent,
                capital: c.capital,
                area: c.area,
                poblacion: c.poblacion,
                activities: c.activities
              }))}>
              <Country name={c.name} urlImg={c.urlImg} continent={c.continent} />
            </Link>)
          })) : (
            <div className={style2.noDataContainer}>
              <h1>No hay nada por aquí... </h1>
              <button className={style2.botonRecargarPaises} onClick={(e) => {
                  dispatch(loadCountries())
                  dispatch(loadingState(false))
                  document.getElementById('filtPorContinente').value="sel"
                  document.getElementById('filtPorActividad').value="sel"
                  document.getElementById('ordenPoblacion').value="sel"
                  document.getElementById('ordenAlfabetico').value="sel"
                }
              }>Recargar países</button>
            </div>
          )
        :
        <h1>Cargando...</h1>
      }
      </div>
      {data.length ?
        <div className={style2.paginatorcontainer}>
          <button className={`${style2.antPage} ${currentPage === 1 ? style2.disabled : ''}`} onClick={e => setCurrentPage(page => page - 1)}>Prev Page</button>
          <select className={style2.button} name="pages" id="pages" value={currentPage} onChange={changePage}>
            {data.length ? getPaginationGroup().map((i) => (
              <option key={i} className={`${i === currentPage ? style2.buttonSelected : ''}`} value={i}>Page {i} {i === currentPage ? '(*)' : ''}</option> 
              )): null}
          </select>
          <button className={`${style2.sigPage} ${currentPage === Math.ceil(data.length / 10) ? style2.disabled : ''}`} onClick={e => setCurrentPage(page => page + 1)}>Next Page</button>
        </div>
      : null}
    </>
  );
}