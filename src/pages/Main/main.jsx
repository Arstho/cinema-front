import MovieCard from "../components/MovieCard";
import './Main.css'

const movie = [
    {
        id: 1,
        title: "Крестный Отец",
        releaseDate: "Март 14, 1972",
        description:
          "Криминальная сага, повествующая о нью-йоркской сицилийской мафиозной семье Корлеоне. Фильм охватывает период 1945-1955 годов.",
        posterUrl:
          "https://upload.wikimedia.org/wikipedia/ru/c/c4/Godfather_vhs.jpg",
      },
      {
        id: 2,
        title: "Побег из Шоушенка",
        releaseDate: "Сентябрь 23, 1994 год",
        description:
          "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки.",
        posterUrl:
          "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/1dca1646-03d2-4362-8933-ecafa4087acf/orig",
      },
      {
        id: 3,
        title: "Темный Рыцарь",
        releaseDate: "Июль 14, 2008 год",
        description:
          "Банда преступников в клоунских масках совершает ограбление банка в Готэм-Сити. В погоне за увеличением доли преступники убивают друг друга, в живых остаётся только Джокер (Хит Леджер), который и сбегает с деньгами. Бэтмен начинает расследование.",
        posterUrl:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ff425143971503.5607641a8ee3f.png",
      },

      {
        id: 3,
        title: "Последний Самурай",
        releaseDate: "20 сентябрь, 2002 год",
        description: "Действие разворачивается в Японии 70-ых годов девятнадцатого века. Капитан Нейтон Альгрен, уважаемый американский военный офицер, нанят Императором Японии для обучения первой армии Страны Восходящего Солнца современному искусству ведения боевых действий.",
        posterUrl: "https://fffmovieposters.com/wp-content/uploads/74074.jpg"
      },

      {
        id: 4,
        title: "Притяжение",
        releaseDate: '10 июль, 2015 год',
        description: "Руководство оборонного ведомства Российской Федерации в лице коменданта города полковника Валентина Лебедева принимает решение не допускать развития конфликта и ждать дальнейших событий, так как корабль не проявлял никакой агрессивности, несмотря на атаку землян.",
        posterUrl: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/alien-invasion-03-matthias-hauser.jpg"
      },
    
      {
        id: 5,
        title: "Оно",
        releaseDate: "13 сентябрь, 2019 год",
        description: "В октябре 1988 года Билл Денбро изготавливает бумажный кораблик для своего шестилетнего брата Джорджи. Кораблик плывёт по дождливым улицам маленького городка Дерри, штат Мэн, а затем попадает в канализацию. Когда Джорджи пытается достать его, в канализации он видит клоуна, который представляется как «Пеннивайз — танцующий клоун». Пеннивайз заманивает Джорджи подойти ближе, затем откусывает его руку и утаскивает его в канализацию.",
        posterUrl: "https://images.squarespace-cdn.com/content/v1/522e85abe4b0b503a9bca081/1528596924568-ERT5VBD1F7ZR22UHCOXH/IT-OB-01.png"
      }
]

function Main() {
    return (
      <div className="main">
        {movie.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} releaseDate={movie.releaseDate} description={movie.description} poster={movie.posterUrl}/>
        ))}
      </div>
    );
  }
  
  export default Main;