const Card = ({ img, title, text, items,link}) => {
  return (
    <><div class="card">
    <img src={img} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{text}</p>
    </div>
    <ul class="list-group list-group-flush">
      {items.map(item=>{
          return  <li class="list-group-item">{item}</li>
      })}
    </ul>
    <div class="card-body">
      <a href={link} class="card-link">
        View Live
      </a>
      {/* <a href="#" class="card-link">
        Another link
      </a> */}
    </div>
  </div>
  <div class="mb-5"></div>
  </>
  );
};

export default Card;
