import { render } from "@czechitas/render";
import { Header } from "../components/Header";

const HomePage = () => {
  return (
    <>
      <Header />

      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="/images/logo.svg"
          alt=""
          width="160"
        />
        <h1 className="display-5 fw-bold">Pohádková škola JavaScriptu</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Jak víte ze seriálu Arabela, i pohádkové postavy musí jít s dobou.
            Proto jsme se rozhodli otevřít školu programování i pro ně. Učit se
            budeme, jak jinak, JavaScript.
          </p>
        </div>
      </div>
    </>
  );
};

document.querySelector(".container").innerHTML = render(<HomePage />);
