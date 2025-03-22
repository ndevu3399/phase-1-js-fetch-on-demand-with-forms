const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const input = document.querySelector("#searchByID");
      const titleElement = document.querySelector("#movieDetails h4");
      const summaryElement = document.querySelector("#movieDetails p");
  
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => {
          if (!response.ok) throw new Error("Movie not found");
          return response.json();
        })
        .then((data) => {
          titleElement.innerText = data.title;
          summaryElement.innerText = data.summary;
        })
        .catch((error) => {
          titleElement.innerText = "Movie Not Found";
          summaryElement.innerText = "Please enter a valid ID.";
          console.error(error);
        });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);
  