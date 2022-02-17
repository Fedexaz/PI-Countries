import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { countryDetail } from '../../redux/actions';

import Country from './Country';

import style from './css/countries.module.css'

export default function Paginator({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch()

  function changePage(event, page = 1) {
    const pageNumber = Number(!event ? page : event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage === 1 ? 0 : currentPage * 10 - 10;
    const endIndex =   currentPage === 1 ? 9 : startIndex + 10;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    const start = Math.ceil(data.slice(10).length / 10)
    return new Array(start).fill().map((_, idx) => idx + 1)
  };

  const reloadPages = () => {
    getPaginatedData().map((c => {
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
      }))
  }
  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [currentPage]);

  useEffect(()=>{
    changePage(null, 1)
    reloadPages()
  }, [data])

  return (
    <>
    <div className={style.cardcontainer}>
      {
        getPaginatedData().map((c => {
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
        }))
      }
      </div>
      <div className={style.paginatorcontainer}>
        {getPaginationGroup().map((i) => ( <button key={i} onClick={changePage}>{i}</button> ))}
      </div>
    </>
  );
}