import useScreenSize from "./useScreenSize";

export default function Home() {
  const { width, height, name, image } = useScreenSize();

  return (
    <div>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <h2>H: {height}</h2>
        <h2>W: {width}</h2>
        <h1>{name}</h1>
      </div>
    </div>
  );
}
