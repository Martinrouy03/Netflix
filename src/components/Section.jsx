const Section = ({ category, images, id }) => {
  return (
    <section>
      <h1>{category}</h1>
      <div className="imgs">
        {images.map((movie) => {
          return <img src={movie} alt="movie" />;
        })}
      </div>
    </section>
  );
};

export default Section;
