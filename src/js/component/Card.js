import React, { useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/Card.css";

export const Card = () => {
    const { store, actions } = useContext(Context)
    useEffect (() =>{
        actions.getcontact()
    },[])
    return (
        <div className="container">
            {store.contact.map((item, index) => (
                <div className="card mb-3" style={{ width: "auto" }} key={index}>
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <img src="data:image/jpeg;base64,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" alt="contacto"/>
                        </div>
                        <div className="col-lg-7">
                            <div className="card-body" id="lista_contact">
                                <h5 className="card-title"><i class="fa-solid fa-user"></i>{item.full_name}</h5>
                                <h5 className="card-title"><i className="fa-solid fa-envelope"></i>{item.email}</h5>
                                <h5 className="card-title"><i class="fa-solid fa-book"></i>{item.agenda_slug}</h5>
                                <h5 className="card-title"><i className="fa-solid fa-location-dot"></i>{item.address}</h5>
                                <h5 className="card-title"><i className="fa-solid fa-phone"></i>{item.phone}</h5>
                            </div>
                        </div>
                        <div class="d-grid gap-2 d-md-block col-lg-1">
                            <button class="btn btn-success" type="button"><i class="fa-solid fa-pencil"></i></button>
                            <button class="btn btn-danger" type="button"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};