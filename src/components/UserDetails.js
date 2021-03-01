import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../redux/actions/userAction'
import { Link } from 'react-router-dom'

const UserDetails = (props) => {
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getUserDetails(props.match.params.id))
    }, [dispatch, props.match.params.id])

    return (
        <div>
            <div className="main_headercontainer">
                <header>
                    <p className="header_text"><Link to="/">My Leads</Link> <span> <i className="fa fa-chevron-right" />{user.requestID}</span></p>
                    <span className="my_lead">My Lead Details</span>
                </header>
                <div className="sub_header">
                    <div className="user_profile date_divnew" style={{ width: '13%' }}>
                        <i className="fa fa-user" />
                        <p>{user.customerName}<br /><span>customer name</span></p>
                    </div>
                    <div className="date_div date_divnew" style={{ width: '24%' }}>
                        <div className="date_left date_divnew" style={{ width: '49%' }}>
                            <p>{user.requestID}</p>
                            <span>Request ID</span>
                        </div>
                        <div className="date_right date_divnew" style={{ width: '49%' }}>
                            <p>{user.movingDate}</p>
                            <span>Moving Date</span>
                        </div>
                    </div>
                    <div className="date_div date_divnew" style={{ width: '30%' }}>
                        <div className="date_left date_divnew" style={{ width: '49%' }}>
                            <p className="lcl_text">{user.shipmentMode}</p>
                            <span>shipment Mode</span>
                        </div>
                        <div className="date_right date_divnew" style={{ width: '49%' }}>
                            <button>{user.status}</button><br />
                            <span>status</span>
                        </div>
                    </div>
                    <div className="select_div date_divnew select_margin" style={{ width: '32%' }}>
                        <div className="date_left date_divnew" style={{ width: '49%' }}>
                            <form>
                                <input type="radio" id="male" name="gender" defaultValue="male" defaultChecked />
                                <label htmlFor="male" className="left-margin">{user.origin}</label><br />
                                <input type="radio" id="female" name="gender" defaultValue="female" />
                                <label htmlFor="female" className="left-margin">{user.destination}</label><br />
                            </form>
                        </div>
                        <div className="date_right date_divnew arrow_div" style={{ width: '49%' }}>
                            <button><i className="fa fa-chevron-down" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row tabbing_div">
                <div className="col-md-12">
                    <div className="tabbable-panel">
                        <div className="tabbable-line">
                            <ul className="nav nav-tabs ">
                                <li className="active">
                                    <a href="#tab_default_1" data-toggle="tab">Survey Appointments </a>
                                </li>
                                <li>
                                    <a>costumer Quotations </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <button className="tabbing_btn">Send New Appointment Request</button>
                                <div className="tab-pane active" id="tab_default_1">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="table_width">Appointment Date and Time</th>
                                                <th className="table_width">Request Status</th>
                                                <th className="table_width">Log Survey Details</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="table-clr">
                                                <td className="table_width">{user.appointmentDT}</td>
                                                <td className="red_text table_width">{user.requestStatus}</td>
                                                <td className="table_width"><i className="fa fa-edit" style={{ color: '#979599' }} /></td>

                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr className="table-clr">
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr className="table-clr">
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr className="table-clr">
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserDetails
