export default function Card(props: any) {
  return (
    <div className="col-sm-4 container-sm pt-5">
      <div className="card">
        <img src={props.image} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h1 className="card-title">{props.title + " " + props.id}</h1>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
