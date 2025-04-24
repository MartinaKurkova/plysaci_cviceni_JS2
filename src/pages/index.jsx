import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const silvestr = {
  name: "Silvestr",
  image: "https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/elephant.jpg",
  text: "Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechno kolem.",
}

const ctirad = {
  name: "Ctirad",
  image: "https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/mouse.jpg",
  text:"Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře.",
}

const PlushySilvestr = () => {
  return (
    <div className="plushy">
    <img className="plushy__image" src={silvestr.image} />
    <h2 className="plushy__name">{silvestr.name} </h2>
    <p className="plushy__text">{silvestr.text} </p>
</div>
  )
}

const PlushyCtirad = () => {
  return (
    <div className="plushy">
    <img className="plushy__image" src={ctirad.image} />
    <h2 className="plushy__name">{ctirad.name} </h2>
    <p className="plushy__text">{ctirad.text} </p>
</div>
  )
}


document.querySelector('#root').innerHTML = render(
  <div className="container">
  <h1>Plyšáci</h1>
    <div className="plushies">
      <PlushySilvestr />
      <PlushyCtirad />
    </div>
  </div>
);
