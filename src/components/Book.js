import { useState } from "react";
import BookDetails from "./BookDetails";

const Book = ({
  title,
  omslagafbeeldingen,
  author,
  publisher,
  language,
  series,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article>
      <button className="sliderImage" onClick={() => setIsOpen(true)}>
        {" "}
        <img className="sliderImages" src={omslagafbeeldingen} alt={"cover picture of " + title} />
        <h5 className="sliderTitle" >{title}</h5>
      </button>

      <BookDetails
        omslagafbeeldingen={omslagafbeeldingen}
        title={title}
        author={author}
        publisher={publisher}
        language={language}
        series={series}
        description={description}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      ></BookDetails>
    </article>
  );
};

export default Book;
