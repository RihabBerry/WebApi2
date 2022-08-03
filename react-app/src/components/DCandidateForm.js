import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../actions/DCandidate";

const DCandidateForm = () => {
  const [inputs, setInputs] = useState({ fullName: "", moblie: "" });
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
    console.log(inputs);
    dispatch(actions.Create(inputs));
    //qu'est ce que vous allez faire avec votre data
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="fullName"
          value={inputs.fullName || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        <label>
          moblie:
          <input
            type="text"
            name="moblie"
            value={inputs.moblie || ""}
            onChange={handleChange}
          />
        </label>
        email:
        <input
          type="text"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        age:
        <input
          type="text"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        bloodGroup:
        <input
          type="text"
          name="bloodGroup"
          value={inputs.bloodGroup || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={inputs.address || ""}
          onChange={handleChange}
        />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
};
export default DCandidateForm;
