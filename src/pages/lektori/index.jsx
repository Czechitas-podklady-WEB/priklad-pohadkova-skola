import { render } from "@czechitas/render";
import { Header } from "../../components/Header";
import { lektori } from "./lektori";

const Lektori = ({ lektori }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Jméno a příjmení</th>
          <th scope="col">Role</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {lektori.map((lektor, index) => (
          <tr>
            <td>{index + 1}.</td>
            <td>{lektor.jmeno + " " + lektor.prijmeni}</td>
            <td>
              <i className="las la-bell"></i> {lektor.role}
            </td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Page = () => {
  return (
    <>
      <Header />

      {lektori.length === 0 ? (
        <div className="fst-italic">Seznam lektorů je prázdný.</div>
      ) : (
        <Lektori lektori={lektori} />
      )}
    </>
  );
};

document.querySelector(".container").innerHTML = render(<Page />);
