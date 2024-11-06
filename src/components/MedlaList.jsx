const MedlaList = ({ countries, handleDelete }) => {
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>국가 |</th>
              <th>금메달 |</th>
              <th>은메달 |</th>
              <th>동메달 |</th>
              <th>합계 |</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {[...countries]
              .sort((a, b) => b.gold - a.gold)

              .map((country) => (
                <tr key={country.name}>
                  <td>{country.name}</td>
                  <td>{country.gold}</td>
                  <td>{country.silver}</td>
                  <td>{country.bronze}</td>
                  <td>
                    {(country.bronze + country.gold + country.silver) * 1}
                  </td>
                  <td>
                    <button onClick={() => handleDelete(country.name)}>
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MedlaList;
