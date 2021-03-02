import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/actions/userAction'
import { Link } from 'react-router-dom'
const Homepage = () => {
    const dispatch = useDispatch();

    const { users } = useSelector(state => state.user);


    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])


    return (
        <div className="container">
            <div className="row">
                {users.map((item, index) => (
                    <div className="col-12 col-md-3 col-lg-3" key={index}>
                        <Link to={`/user/${item._id}`}>
                            <div className="homepage_container shadow"
                                type="button"
                            >
                                <div className="user_profile">
                                    <i className="fa fa-user" />
                                    <p>{item.customerName}< br /> <span>customer name</span></p>
                                </div>
                                <div className="row date_div">
                                    <div className="date_left col-md-4">
                                        <p>{item.requestID}</p>
                                        <span>Request ID</span>
                                    </div>
                                    <div className="date_right col-md-8">
                                        <p>{item.movingDate}</p>
                                        <span>moving Date</span>
                                    </div>
                                </div>
                                <div className="row date_div">
                                    <div className="date_left col-md-4">
                                        <p className="lcl_text">{item.shipmentMode}</p>
                                        <span>shipment mode</span>
                                    </div>
                                    <div className="date_right col-md-8 left-margin2">
                                        <button>{item.status}</button>
                                        <br />
                                        <span>status</span>
                                    </div>
                                </div>
                                <div className="select_div">
                                    <form>
                                        <input type="radio" id="male" name="gender" defaultValue="male" defaultChecked />
                                        <label htmlFor="male" className="left-margin" >{item.origin}</label><br />
                                        <input type="radio" id="female" name="gender" defaultValue="female" />
                                        <label htmlFor="female" className="left-margin">{item.destination}</label><br />
                                    </form>
                                </div>
                                <div className="Document_div">
                                    <p><i className="fa fa-file" />Document Required</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Homepage
