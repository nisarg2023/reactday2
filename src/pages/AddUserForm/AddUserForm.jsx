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

  const [checkboxValues, setCheckboxValues] = useState([]);

  const [achivements, setAchivements] = useState([{}]);

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

  const updatecheckBox = (value) => {
    setCheckboxValues((prev) => {
      return prev.includes(value)
        ? prev.filter((_, i) => i !== prev.indexOf(value))
        : [...prev, value];
    });
  };

  const handelAddAchivement = ()=>{
    setAchivements((prev)=>{return [...prev, {}]})
  }

  const removeAchivement = (index)=>{
    setAchivements((prev)=>{return prev.filter((_,i)=>{return i !=index})})
  }
 
  const addTitelToAchivements = (e,index)=>{
    let newArr = [...achivements]
    newArr[index].title =e.target.value;
    setAchivements(newArr);
  }

  const addDateToAchivements = (e,index)=>{
    let newArr = [...achivements]
    newArr[index].date =e.target.value;
    setAchivements(newArr);
  }  
 
  const handelOnSubmit = (event) => {
    event.preventDefault();
   
    if(isEmpty(event.target.firstName)|| 
    isEmpty(event.target.lastName)||
    isEmpty(event.target.address))
    {
      return false
    }


    if (!isEmpty(event.target.mobile)) {
      if (!/^[1-9]\d{9}$/gm.test(event.target.mobile.value)) {
        setFormErr((prev) => {
          return { ...prev, mobile: "number is not in proper formate" };
        });
        return false;
      } else {
        setFormErr((prev) => {
          return { ...prev, mobile: "" };
        });
      }
    }
    else{
      return false;
    }
  
    if (!isEmpty(event.target.dob)) {
      let dobYear = new Date(event.target.dob.value).getFullYear();
      if (!(dobYear > 1980 && dobYear < 2020)) {
        setFormErr((prev) => {
          return { ...prev, dob: "Date of birth is between 1980 and 2020" };
        });
        return false;
      } else {
        setFormErr((prev) => {
          return { ...prev, dob: "" };
        });
      }
    }
    else{
      return false;
    }

    

    if (event.target.gender.value === "") {
      setFormErr((prev) => {
        return { ...prev, gender: "select gender" };
      });
      return false;
    } else {
      setFormErr((prev) => {
        return { ...prev, gender: "" };
      });
    }

    if (checkboxValues.length === 0) {
      setFormErr((prev) => {
        return { ...prev, intrest: "select at list one intrest" };
      });
      return false;
    } else {
      setFormErr((prev) => {
        return { ...prev, intrest: "" };
      });
    }

    for(let i=0; i<achivements.length; i++) 
  { 
    if(!(achivements[i].title&&achivements[i].date))
    {
      let newArr = [...achivements]
      newArr[i].err ="Enter title and date ";
      setAchivements(newArr); 
      return false;
    }
    else{
      let newArr = [...achivements]
      newArr[i].err ="";
      setAchivements(newArr);
    }
  }


   
    console.log("data is valide")

    
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

          <label htmlFor="lastName"> last name : </label>
          <input type="text" name="lastName" placeholder="last name" />
          <span>{formErr.lastName}</span>

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
            <label htmlFor="intrest">Intrest</label>
            <input
              type="checkbox"
              name="intrest"
              id="chk1"
              value={"play"}
              onClick={() => updatecheckBox("play")}
            />{" "}
            play
            <input
              type="checkbox"
              name="intrest"
              id="chk2"
              value={"read"}
              onClick={() => updatecheckBox("read")}
            />{" "}
            read
            <input
              type="checkbox"
              name="intrest"
              id="chk3"
              value={"travel"}
              onClick={() => updatecheckBox("travel")}
            />{" "}
            travel
            <span>{formErr.intrest}</span>
          </div>

          <div>
            <label htmlFor="achivement">Achivement</label><br/>
           
            <table >
            <tr>
              <td>title</td>
              <td>date</td>
              <td> <input type="button" value="add" onClick={handelAddAchivement} /></td>
            </tr>

            {achivements.map(({title,date,err},index)=>{
              return(
            <>
            
            <tr>

              <td><input type="text" name="title" id="" value={title} onChange={(e)=>{addTitelToAchivements(e,index)}}/></td>
              <td><input type="date" name="date" id="" value={date} onChange={(e)=>{addDateToAchivements(e,index)}}/></td>
              <td><input type="button" name="" id="" value="remove" onClick={()=>removeAchivement(index)}/></td>
            </tr>
            <span>{err}</span>
            
            </>
              )
            })}
            
            </table>

          </div>


          <div>
            <input type="submit" value="submit" />
          </div>
        </div>
      </form>
    </>
  );
};
