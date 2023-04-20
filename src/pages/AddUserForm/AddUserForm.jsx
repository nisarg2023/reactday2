import { useState } from "react";

export const AddUserForm = () => {
  const [formErr, setFormErr] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    dob: "",
    gender: "",
    address: "",
    intrest: "",
  });

  const isEmpty = (input) => {
    if (input.value === "") {
      setFormErr((prev) => {
        return { ...prev, [input.name]: "this field is required" };
      });
      return true;
    } else {
      setFormErr((prev) => {
        return { ...prev, [input.name]: "" };
      });
      return false;
    }
  };

  const handelOnSubmit = (event) => {
    event.preventDefault();

    isEmpty(event.target.firstName);
    isEmpty(event.target.lastName);
   
    isEmpty(event.target.dob);
    isEmpty(event.target.address);

    if(!isEmpty(event.target.mobile))
    {
        if(!/[0-9]{10}/gm.test(event.target.mobile.value))
        {
            setFormErr((prev) => {
                return { ...prev, mobile: "number is not in proper formate" };
              });  
        }
        else{
            setFormErr((prev) => {
                return { ...prev, mobile: "" };
              });  
        }
    }
  };

  return (
    <>
      <form action="" onSubmit={(event) => handelOnSubmit(event)}>
        <div>
          <div>
            <label htmlFor="firstName">first Name : </label>
            <input type="text" name="firstName" placeholder="first name" />
            <span>{formErr.firstName}</span>
          </div>

          <div>
            <label htmlFor="lastName"> last name : </label>
            <input type="text" name="lastName" placeholder="last name" />
            <span>{formErr.lastName}</span>
          </div>

          <div>
            <label htmlFor="mobile">moblie :</label>
            <input name="mobile" type="text" placeholder="moblie" />
            <span>{formErr.mobile}</span>
          </div>

          <div>
            <label htmlFor="dob"> DOB :</label>
            <input type="date" name="dob" id="" />
            <span>{formErr.dob}</span>
          </div>

          <div>
            <label htmlFor="gender">gender :</label>
            <input type="radio" name="gender" id="" value={"male"} />
            Male
            <input type="radio" name="gender" id="" value={"female"} />
            Female
            <span>{formErr.gender}</span>
          </div>

          <div>
            <label htmlFor="address">address : </label>
            <textarea name="address" id="" cols="30" rows="3"></textarea>
            <span>{formErr.address}</span>
          </div>

          <div>
            <label htmlFor="intrest">intrest</label>
            <input type="checkbox" name="intrest" id="" value="play" /> play
            <input type="checkbox" name="intrest" id="" value="read" /> read
            <input type="checkbox" name="intrest" id="" value="travel" /> travel
            <span>{formErr.intrest}</span>
          </div>

          <div>
            <input type="submit" value="submit" />
          </div>
        </div>
      </form>
    </>
  );
};
