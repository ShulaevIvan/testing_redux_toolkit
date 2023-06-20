import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, removeUser } from "../redux/slices/userSlice";


export const TestGetData = () => {
    const  {users, loading} = useSelector((state) => state.users);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <button onClick={() => dispatch(fetchUsers())}>GET DATA</button>
            {console.log(users)}
        </React.Fragment>
    )
};