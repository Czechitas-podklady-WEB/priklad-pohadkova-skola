import { render } from "@czechitas/render";
import { Header } from "../../components/Header";
import { lekce } from "./lekce";

const Page = () => {
  return (
    <>
      <Header />

      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Název lekce</th>
            <th scope="col">Datum</th>
            <th scope="col">Čas</th>
            <th scope="col">Místo</th>
          </tr>
        </thead>
        <tbody>
          {lekce.map((lekce, index) => (
            <tr>
              <td>{index + 1}.</td>
              <td>{lekce.nazev}</td>
              <td>{lekce.datum}</td>
              <td>{lekce.cas}</td>
              <td>{lekce.misto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

document.querySelector(".container").innerHTML = render(<Page />);
