import React from 'react';

import './Movie.css';

function MoviePage(props) {


 
  return (
    <div className="movie-page-container">
        <div className='movieBody'>
        <div className="movie-page-info">
        <h1 className="movie-page-title">Последний самурай</h1>
        <p className="movie-page-text">Жанры: Исторический, Драма</p>
        <p className="movie-page-text">Год: 2004</p>
        <p className="movie-page-text">Создатели: Том Круз, Эдвард Цвик</p>
        <p className="movie-page-text">Описание: Самурай Кацумото, медитируя в деревне, наблюдает видение — белый тигр отбивается от окруживших его загонщиков.

1876 год. Отставной капитан Армии Союза Нэйтан Олгрен зарабатывает на жизнь рекламой винчестеров. Однополчанин, сержант Зеб отводит его на встречу с японцами и полковником Багли, бывшим командиром Олгрена. Глава делегации министр Омура, заинтересовавшись опытом Олгрена в войне с индейцами, предлагает ему обучать солдат японской императорской армии. Олгрен заявляет Багли, что за деньги готов убивать кого угодно, но готов убить Багли бесплатно, поскольку не может ему простить безжалостные убийства индейских женщин и детей. Олгрен обучает солдат, вчерашних крестьян, но получает приказ выступить против мятежника Кацумото, бывшего учителя императора. Олгрен на деле показывает, что необученные, трусливые крестьяне не готовы к войне, но по приказу командования солдаты выступают в поход.</p>
<iframe className='movie-page-video' src="https://www.youtube.com/embed/FM-CE4D8NJM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
        </div>
        {/* <div className='imgContainer'>
      <img src='https://fffmovieposters.com/wp-content/uploads/74074.jpg' alt='' className="movie-page-poster" />
        </div> */}
 
    </div>
  );
}

export default MoviePage;
