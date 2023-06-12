import { getRandom } from "random-key-generator";
const Card = ({ img, title, text, items,link}) => {
  return (
    <><div className="card">
    <img src={img} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </div>
    <ul className="list-group list-group-flush">
      {items.map(item=>{
          return  <li className="list-group-item" key={getRandom()}>{item}</li>
      })}
    </ul>
    <div className="card-body">
      <a href={link} className="card-link">
        View Live
      </a>
      {/* <a href="#" class="card-link">
        Another link
      </a> */}
    </div>
  </div>
  <div className="mb-5"></div>
  </>
  );
};

export default Card;
