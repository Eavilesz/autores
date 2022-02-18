import React, { useEffect, useState } from "react";
import axios from "axios";
// import AuthorForm from "../components/AuthorForm";
import AuthorList from "../components/AuthorList";
export default () => {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/all-authors").then((res) => {
      setAuthors(res.data.author);
      setLoaded(true);
      console.log(authors);
    });
  }, []);
  const removeFromDom = (authorId) => {
    setAuthors(authors.filter((author) => author._id !== authorId));
  };
  //   const createAuthor = (author) => {
  //     axios
  //       .post("http://localhost:8000/api/author", author)
  //       .then((res) => {
  //         setAuthors([...authors, res.data]);
  //       })
  //       .catch((err) => {
  //         const errorResponse = err.response.data.errors;
  //         const errorArr = [];
  //         for (const key of Object.keys(errorResponse)) {
  //           errorArr.push(errorResponse[key].message);
  //         }
  //         setErrors(errorArr);
  //       });
  //   };
  return (
    <div>
      {errors.map((err, index) => (
        <p className="p-3 mb-2 bg-danger text-white col-4 m-auto" key={index}>
          {err}
        </p>
      ))}
      {/* <AuthorForm
        onSubmitProp={createAuthor}
        initialName=""
      /> */}

      {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom} />}
    </div>
  );
};
