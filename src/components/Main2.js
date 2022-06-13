import { useEffect, useState } from "react";
import StyledMain from "./StyledMain2";

export default function Main2() {
  const [vegis, setVegis] = useState([]);
  const [search, setSearch] = useState([]);
  const [language, setLanguage] = useState(true);

  useEffect(() => {
    fetch("https://fetch-me.vercel.app/api/shopping/items")
      .then((response) => response.json())
      .then((vegiData) => {
        setVegis(vegiData.data);
      });
  }, []);

  //change language
  function changeLanguage() {
    setLanguage((language) => !language);
  }

  //unnutz
  const found = vegis.find((vegi) => {
    return vegi.name.en.includes("A");
  });
  //form

  function createList(e) {
    const form = e.elements.value;
    const { field } = form.field.value;
    setSearch(search.push(field.value));
  }
  return (
    <StyledMain>
      <form onCreateList={createList}>
        <label htmlFor="field">...</label>
        <input type="text" id="field" name="field" placeholder="your Vegi!" />

        <button onChange={createList}>Search</button>

        <ul>
          <li>{}</li>
        </ul>
        {found && <h2>{found.name.de}</h2>}
      </form>
      <button onClick={changeLanguage}>switch the language</button>
      <section>
        {vegis.map((vegi) => (
          <ul>
            {language === true ? (
              <li key={vegi._id}>{vegi.name.de}</li>
            ) : (
              <li key={vegi._id}>{vegi.name.en}</li>
            )}
          </ul>
        ))}
      </section>
    </StyledMain>
  );
}
