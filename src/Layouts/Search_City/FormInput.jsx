import React, { useContext, useState } from "react";
import ApiContext from "../../Context/ApiContext";

const FormInput = () => {
  const [input, setInput] = useState("Dindigul");
  const { cities, setCities } = useContext(ApiContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setCities(input);
    setInput("");
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="search"
          value={input}
          id=""
          placeholder="Enter a city name"
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="text" value={cities} id="" readOnly />
        <input type="submit" value="" style={{ display: "none" }} />
      </form>
    </>
  );
};

export default FormInput;
