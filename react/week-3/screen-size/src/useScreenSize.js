import { useEffect, useState, useDebugValue } from "react";

const useScreenSize = () => {
    
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [name, setName] = useState(null);
  const [image, setImage] = useState(
    "https://www.gamespace.com/wp-content/uploads/2022/10/A-Plague-Tale-Requiem-Review.jpg"
  );

  useDebugValue(`Screen Size ${width} * ${height}`);

  useEffect(() => {
    const resizeScreenHandler = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);

      if (width > 900) {
        setImage(
          "https://i.pinimg.com/originals/cd/84/b9/cd84b9ff33c31923d5c3d44b1a42978f.jpg"
        );
        setName("Amicia");
      } else if (width < 600) {
        setImage(
          "https://cdna.artstation.com/p/assets/images/images/056/129/920/large/olivier-ponsonnet-hugo-byz.jpg?1668527776"
        );
        setName("Hugo");
      } else {
        setImage(
          "https://preview.redd.it/wzw38wvsah6a1.png?width=640&crop=smart&auto=webp&s=671e5cd01f447d66e23643616e32b9d7fb39934c"
        );
        setName("Lucas");
      }

    };

    window.addEventListener("resize", resizeScreenHandler);

    return () => {
      window.removeEventListener("resize", resizeScreenHandler);
    };
  }, [width]);

  return { width, height, name, image };
};

export default useScreenSize;
