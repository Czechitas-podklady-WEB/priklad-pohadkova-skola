import { render } from "@czechitas/render";
import { Header } from "../../components/Header";
import { ucastnici } from "./ucastnici";

const Zena = () => <i className="las la-venus" style={{ color: "red" }}></i>;
const Muz = () => <i className="las la-mars" style={{ color: "blue" }}></i>;

const Ucastnik = ({ucastnik, index}) => (
  <tr>
    <td>{index + 1}.</td>
    <td>{ucastnik.gender === "F" ? <Zena /> : <Muz />}</td>
    <td>{ucastnik.jmeno}</td>
    <td>{ucastnik.prijmeni}</td>
    <td>{ucastnik.bydliste === null ? <em>neuvedeno</em> : ucastnik.bydliste}</td>
    <td></td>
  </tr>
)

const Ucastnici = ({ ucastnici }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col"></th>
          <th scope="col">Jméno</th>
          <th scope="col">Příjmení</th>
          <th scope="col">Bydliště</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {ucastnici.map((ucastnik, index) => <Ucastnik ucastnik={ucastnik} index={index} key={index} />)}
      </tbody>
    </table>
  );
};

const Page = () => {
  return (
    <>
      <Header />

      {ucastnici.length === 0 ? (
        <div className="fst-italic">Seznam účastníků je prázdný.</div>
      ) : (
        <Ucastnici ucastnici={ucastnici} />
      )}
    </>
  );
};

document.querySelector(".container").innerHTML = render(<Page />);