import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Formulario = () => {
	const{store,actions} = useContext (Context)
	return (
		<form className="col-12 col-lg-12 col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center mt-5 ">
  <div  className="col col-4 mb-3">
    <label for="exampleInputEmail1"  className="form-label">Email address</label>
    <input type="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp"  className="form-text">.</div>
  </div>
  <div  className="col col-4 mb-3">
    <label for="exampleInputPassword1"  className="form-label">Password</label>
    <input type="password"  className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit"  className="w-25 mt-3 btn btn-primary">Submit</button>
</form>
	);
};
