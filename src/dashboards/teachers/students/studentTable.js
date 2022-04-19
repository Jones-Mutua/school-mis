import React from "react";
import "./table.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

export const Table = () => {
    return (
        <>
            <table className="styled">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Teacher Name</th>
                        <th>TSC Number</th>
                        <th>Email</th>
                        <th>Phone</th>

                        <th>Subjects</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Jones Mutua Kyalo</td>

                        <td>4564536874</td>
                        <td>jonh@gmail.com</td>
                        <td>07590877</td>

                        <td>CRE/History</td>

                        <td>
                            <a href="" className="btn btn-danger">
                                Delete
                            </a>
                        </td>
                        <td>
                            <a className="btn btn-success " href="#">
                                Edit
                            </a>
                        </td>
                    </tr>
                    <tr className="active">
                        <td>2</td>
                        <td>Meshach Morrine Lucus</td>
                        <td>343454556</td>
                        <td>jonh@gmail.com</td>
                        <td>07590877</td>
                        <td>Maths/Chem</td>

                        <td>
                            <a href="" className="btn btn-danger">
                                Delete
                            </a>
                        </td>
                        <td>
                            <a className="btn btn-success " href="#">
                                Edit
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Jones Mutua Kyalo</td>

                        <td>4564536874</td>
                        <td>jonh@gmail.com</td>
                        <td>07590877</td>
                        <td>Computer</td>

                        <td>
                            <a href="" className="btn btn-danger">
                                Delete
                            </a>
                        </td>
                        <td>
                            <a className="btn btn-success " href="#">
                                Edit
                            </a>
                        </td>
                    </tr>
                    <tr className="active">
                        <td>4</td>
                        <td>Jones Mutua Kyalo</td>

                        <td>4564536874</td>
                        <td>jonh@gmail.com</td>
                        <td>07590877</td>
                        <td>Bio/Agri</td>

                        <td>
                            <a href="" className="btn btn-danger">
                                Delete
                            </a>
                        </td>
                        <td>
                            <a className="btn btn-success " href="#">
                                Edit
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Jones Mutua Kyalo</td>

                        <td>4564536874</td>
                        <td>jonh@gmail.com</td>
                        <td>07590877</td>
                        <td>Eng/Kiswahili</td>

                        <td>
                            <a href="" className="btn btn-danger">
                                Delete
                            </a>
                        </td>
                        <td>
                            <a className="btn btn-success " href="#">
                                Edit
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};