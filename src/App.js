import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import SelectVariants from './MaterialUIPickers';
import { Button } from 'antd';
import Fill from './Fill';

function App() {

  //states for drop down
  let [show, setshow] = useState([])
  const [currentDomainSelect, setcurrentDomainSelect] = useState("It Cloud")

  let [name1, setname] = useState("")
  let [errorname, seterrorname] = useState(false)

  let [name2, setname2] = useState("")
  let [errorname2, seterrorname2] = useState(false)

  let [ui, setui] = useState("")
  let [uierrorname, uiseterrorname] = useState(false)

  let [name1gowin, setnamegowin] = useState("")
  let [errornamegowin, seterrornamegowin] = useState(false)

  let [name1ar, setnamear] = useState("")
  let [errornamear, seterrornamear] = useState(false)

  let [name1asd, setnameasd] = useState("")
  let [errornameasd, seterrornameasd] = useState(false)

  let [name1et, setnameet] = useState("")
  let [errornameet, seterrornameet] = useState(false)


  let [name1is, setnameis] = useState("")
  let [errornameis, seterrornameis] = useState(false)


  let [name1etd, setnameetd] = useState("")
  let [errornameetd, seterrornameetd] = useState(false)

  let [email, setemail] = useState("")
  let [errornameemail, seterrornameemail] = useState(false)


  let [selectdomains, setselectdomains] = useState(false)

  let [leadsupport, setleadsupport] = useState("")
  let [isleadtrue, setleadsupporttrue] = useState(false);

  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};
  
  







  //function for deopdown
  const changeselect = (eve) => {
    setcurrentDomainSelect(eve)
  }

  //function to check emial
  function checkEmail(input) {

    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(input.toLowerCase());
    ;
  }

  console.log(email)


  //function for submit
  function onsubmit1(event) {
    event.preventDefault();
    if (name1 === "") {
      seterrorname(true)
    } else {
      seterrorname(false)
    }

    if (name2 === "") {
      seterrorname2(true)
    } else {
      seterrorname2(false)
    }


    if (ui === "") {
      uiseterrorname(true)
    } else {
      uiseterrorname(false)
    }


    if (name1gowin === "") {
      seterrornamegowin(true)
    } else {
      seterrornamegowin(false)
    }

    if (name1ar === "") {
      seterrornamear(true)
    } else {
      seterrornamear(false)
    }

    if (name1asd === "") {
      seterrornameasd(true)
    } else {
      seterrornameasd(false)
    }

    if (name1et === "") {
      seterrornameet(true)
    } else {
      seterrornameet(false)
    }

    if (name1is === "") {
      seterrornameis(true)
    } else {
      seterrornameis(false)
    }

    if (name1etd === "") {
      seterrornameetd(true)
    } else {
      seterrornameetd(false)
    }

    if (!checkEmail(email)) {
      seterrornameemail(true)
    } else {
      seterrornameemail(false)
    }


    if (show.length <= 0) {
      setselectdomains(true)
    }
    else (
      setselectdomains(false)
    )


    if (leadsupport === "") {
      setleadsupporttrue(true)
    }
    else {
      setleadsupporttrue(false)
    }


    setname("")
    setname2("")
    setnamegowin("")
    setnamear("")
    setnameasd("")
    setnameet("")
    setnameis("")
    setnameetd("")
    setemail("")


  }





  function showitem() {




    let newArr = [...show];


    if (!newArr.includes(currentDomainSelect)) {          //checking weather array contain the id
      newArr.push(currentDomainSelect);
      setshow(newArr)              //adding to array because value doesnt exists
    } else {
      newArr.splice(newArr.indexOf(currentDomainSelect), 1);  //deleting
      setshow(newArr)
    }


    // newArr.push(currentDomainSelect)
    // console.log(newArr+"HBSHASBAHUA")
    // setshow(newArr)
    // console.log("cgcfhgf",show.push(currentDomainSelect))
    //     console.log(currentDomainSelect)


  }





  return (

    <div>


      <div className="maindiv">

        <center> <img src='./images/areteclogo.png'></img></center>

        <form className='formdiv submitted ng-invalid'>

          <h3 style={{ margin: "0" }}>AretecSBD 8&#40;a&#41; stars ||| regestration Form</h3>
          <p style={{ margin: "20px 0" }}>Contact Email:<a href='mailto:stars3@aretecinc.com'>stars3@aretecinc.com</a></p>
          <p style={{ margin: "20px 0" }} >Contract Number:47QTCB22D0173</p>
          <h5 style={{ margin: "50px 0" }}>Aretec approval of pricing staffing and participation in white glove Review will always be required </h5>

          <p >Company Email</p>
          <input value={email} className={errornameemail ? "redclass" : "blue"} onChange={(e) => { setemail(e.target.value) }} placeholder="Enter Email" ></input>
          {errornameemail && <p className='p1'> provide valid email </p>}
          <p>Client Agency</p>
          <input value={name1} className={errorname ? "redclass" : "blue"} onChange={(e) => { setname(e.target.value) }} type={"text"} placeholder="Enter Text" ></input>
          {errorname && <Fill field="Client Agency"></Fill>}


          <p>Name</p>
          <input value={name2} className={errorname2 ? "redclass" : "blue"} onChange={(e) => { setname2(e.target.value) }} type={"text"} placeholder="Enter Text" ></input>
          {errorname2 && <Fill field="Name"></Fill>}


          <p>Unique Identifier (RfI,RFP,RFQ,SS Number)</p>
          <input value={ui} className={uierrorname ? "redclass" : "blue"} onChange={(e) => { setui(e.target.value) }} type={"text"} placeholder="Enter Text" ></input>
          {uierrorname && <Fill field="Unique Identifier"></Fill>}

          <p>GoWin Id</p>
          <input value={name1gowin} className={errornamegowin ? "redclass" : "blue"} onChange={(e) => { setnamegowin(e.target.value) }} type={"text"} placeholder="Enter Text" ></input>
          {errornamegowin && <Fill field="GoWin Id"></Fill>}
          <ul className='b1'>

            {show.map((obj, ind) => {
              return (

                <li className='selecteditem'>{obj}</li>
              )
            })}
          </ul>






          <select name="domains" id="domain" className={selectdomains ? 'selectbox1' : 'selectbox'} onClick={showitem}
            onChange={(event) => changeselect(event.target.value)}
            required
          >
            <option className='o1' value="" disabled selected hidden>Compatibilty Domain</option>
            <option className='o1' style={{ color: "black" }} value="It Cloud">It Cloud</option>
            <option className='o1' style={{ color: "black" }} value="Data Secure /Analytics">Data Secure /Analytics</option>
            <option className='o1' style={{ color: "black" }} value="Cyber">Cyber</option>
            <option className='o1' style={{ color: "black" }} value="O&#38;M">O&#38;M</option>
            <option className='o1' style={{ color: "black" }} value="new Vechile">new Vechile</option>
          </select>

          {selectdomains && <Fill field="Compatibilty Domain"></Fill>}


          <div className='selectDate'>
            <div className='w1'>
              <p>Lead and Support</p>
              <select className={isleadtrue ? 'selectbox1' : 'selectbox'} onChange={(e) => setleadsupport(e.target.value)}  >

                <option className='o1' value="" disabled selected hidden>Lead And Support</option>
                <option className='o1' style={{ color: "black" }} value="prime">Prime</option>
                <option className='o1' style={{ color: "black" }} value="sub">Sub</option>
              </select>

              {isleadtrue && <Fill field="lead and Support"></Fill>}
            </div>

            <div className='w2'>
              <p>Anticipate RFP and Date</p>
              <input value={name1ar} className={errornamear ? "redclass" : "blue"} onChange={(e) => { setnamear(e.target.value) }} type={"date"}></input>
              {errornamear && <Fill field="Anticipate RFP and Date"></Fill>}
            </div>
          </div>


          <p>Anticipated Submission Date</p>
          <input value={name1asd} className={errornameasd ? "redclass" : "blue"} onChange={(e) => { setnameasd(e.target.value) }} type="date"></input>
          {errornameasd && <Fill field="Anticipated Submission Date"></Fill>}

          <p>Uplaod Support Articles (e.g RFP/RfI Attachment,Capture Desk)</p>

          <div class="upload-btn-wrapper" style={{ marginTop: "30px" }}>
          {isFilePicked? (
				<div className='inputfilename'>
					<p>{selectedFile.name}</p>
				</div>
			) : (
				<p className='inputfilename'>Plz select a file </p>
			)}
            <center> <button class="btn">Upload a file</button></center>
            <input onChange={changeHandler} type="file" name="file" />
          </div>


          <p>Estimated Total Value</p>
          <input value={name1et} className={errornameet ? "redclass" : "blue"} onChange={(e) => { setnameet(e.target.value) }} type="text" placeholder='Enter Text' ></input>
          {errornameet && <Fill field="Estimated Total Value"></Fill>}
          <p>Identified Subs</p>
          <input value={name1is} className={errornameis ? "redclass" : "blue"} onChange={(e) => { setnameis(e.target.value) }} type="text" placeholder='Enter Text' ></input>
          {errornameis && <Fill field="Identified Subs"></Fill>}

          <p>Engagment To date &#40; Deccribe Completed Activites &#41;</p>
          <input value={name1etd} className={errornameetd ? "redclass" : "blue"} onChange={(e) => { setnameetd(e.target.value) }} type="text" placeholder='Enter Text' ></input>
          {errornameetd && <Fill field="Engagment To date"></Fill>}
          <button type="submit" className='button' onClick={onsubmit1}> Submit</button>
        </form>
      </div>

    </div>

  );
}

export default App;


// function App(){
//   return(
//    <div>
//    <form class="row g-3">
//   <div class="col-md-4">
//     <label for="validationServer01" class="form-label">First name</label>
//     <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required></input>
//     <div class="valid-feedback">
//       Looks good!
//     </div>
//   </div>
//   <div class="col-md-4">
//     <label for="validationServer02" class="form-label">Last name</label>
//     <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required></input>
//     <div class="valid-feedback">
//       Looks good!
//     </div>
//   </div>
//   <div class="col-md-4">
//     <label for="validationServerUsername" class="form-label">Username</label>
//     <div class="input-group has-validation">
//       <span class="input-group-text" id="inputGroupPrepend3">@</span>
//       <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required></input>
//       <div id="validationServerUsernameFeedback" class="invalid-feedback">
//         Please choose a username.
//       </div>
//     </div>
//   </div>
//   <div class="col-md-6">
//     <label for="validationServer03" class="form-label">City</label>
//     <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required></input>
//     <div id="validationServer03Feedback" class="invalid-feedback">
//       Please provide a valid city.
//     </div>
//   </div>
//   <div class="col-md-3">
//     <label for="validationServer04" class="form-label">State</label>
//     <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
//       <option selected disabled value="">Choose...</option>
//       <option>...</option>
//     </select>
//     <div id="validationServer04Feedback" class="invalid-feedback">
//       Please select a valid state.
//     </div>
//   </div>
//   <div class="col-md-3">
//     <label for="validationServer05" class="form-label">Zip</label>
//     <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required></input>
//     <div id="validationServer05Feedback" class="invalid-feedback">
//       Please provide a valid zip.
//     </div>
//   </div>
//   <div class="col-12">
//     <div class="form-check">
//       <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required></input>
//       <label class="form-check-label" for="invalidCheck3">
//         Agree to terms and conditions
//       </label>
//       <div id="invalidCheck3Feedback" class="invalid-feedback">
//         You must agree before submitting.
//       </div>
//     </div>
//   </div>
//   <div class="col-12">
//     <button class="btn btn-primary" type="submit">Submit form</button>
//   </div>
// </form>
//    </div>
//   )
// }


// export default App;