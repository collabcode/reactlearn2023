//Show message component
export default function Message(props: any) {
  return (
    <>
      <p className="display-1 text-center text-primary my-5">{props.text}</p>
    </>
  );
}
