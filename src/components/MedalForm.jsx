import { useState } from "react";

const MedalForm = ({ countries, setCountries }) => {
  const [countryName, setCountryName] = useState("");
  const [goldMedals, setGoldMedals] = useState("");
  const [silverMedals, setSilverMedals] = useState("");
  const [bronzeMedals, setBronzeMedals] = useState("");

  const resetFields = () => {
    setCountryName("");
    setGoldMedals(0);
    setSilverMedals(0);
    setBronzeMedals(0);
  };
  //추가

  const handleAdd = (e) => {
    e.preventDefault();
    if (!countryName) {
      alert("제대로!");
      return;
    }
    if (goldMedals >= 100 || silverMedals >= 100 || bronzeMedals >= 100) {
      alert("제대로!");
      return;
    }
    if (goldMedals < 0 || silverMedals < 0 || bronzeMedals < 0) {
      alert("제대로!");
      return;
    }
    const existingCountry = countries.find(
      (country) => country.name === countryName
    );
    if (existingCountry) {
      alert("제대로!");
      return;
    }
    //국가추가!
    //스프레드,,,,,,,,
    setCountries([
      ...countries,
      {
        id: Date.now(),
        name: countryName,
        gold: goldMedals,
        silver: silverMedals,
        bronze: bronzeMedals,
      },
    ]);
    resetFields();
  };

  //업데이트
  const handleUpate = (e) => {
    e.preventDefault();
    const existingCountry = countries.find(
      (country) => country.name === countryName
    );
    if (!existingCountry) {
      alert("제대로!");
      return;
    }
    if (goldMedals >= 100 || silverMedals >= 100 || bronzeMedals >= 100) {
      alert("제대로!");
      return;
    }
    if (goldMedals < 0 || silverMedals < 0 || bronzeMedals < 0) {
      alert("제대로!");
      return;
    }
    //기존 메달에 누적..스프레드 연산자, 명칭이 같으면!!! ㅡmap을 쓰자ㅏ..
    setCountries(
      countries.map((country) =>
        country.name === countryName
          ? {
              ...country,
              gold: goldMedals,
              silver: silverMedals,
              bronze: bronzeMedals,
            }
          : country
      )
    );
    resetFields();
  };

  return (
    <>
      <form onSubmit={handleAdd}>
        <input
          value={countryName}
          type="text"
          placeholder="국가명을 입력하세요."
          onChange={(e) => setCountryName(e.target.value)}
        />
        <input
          value={goldMedals}
          type="number"
          placeholder="금메달"
          onChange={(e) => setGoldMedals(Number(e.target.value))}
        />
        <input
          value={silverMedals}
          type="number"
          placeholder="은메달"
          onChange={(e) => setSilverMedals(Number(e.target.value))}
        />
        <input
          value={bronzeMedals}
          type="number"
          placeholder="동메달"
          onChange={(e) => setBronzeMedals(Number(e.target.value))}
        />
        <button type="submit">추가</button>
        <button type="button" onClick={handleUpate}>
          업데이트
        </button>
      </form>
    </>
  );
};

export default MedalForm;
