import { useState } from "react";
import MedalForm from "./components/MedalForm";
import MedlaList from "./components/MedlaList";

const App = () => {
  const [countries, setCountries] = useState([]);

  const handleDelete = (countryName) => {
    setCountries(countries.filter((country) => country.name !== countryName));
  };
  return (
    <div>
      <MedalForm countries={countries} setCountries={setCountries} />
      <MedlaList countries={countries} handleDelete={handleDelete} />
    </div>
  );
};
//삭제
export default App;
