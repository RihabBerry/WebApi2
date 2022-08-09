import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/DCandidate";

const DCandidateForm = (props) => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.currentId == 0) {
      dispatch(actions.Create(inputs));
    } else {
      dispatch(actions.Update(props.currentId, inputs));
    }
    //qu'est ce que vous allez faire avec votre data
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  useEffect(() => {
    console.log("the id ", props.currentId);

    if (props.currentId !== 0) {
      setInputs(userList.find((x) => x.id === props.currentId));
      console.log("this is slected", inputs);
    }
  }, [props.currentId]);

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
