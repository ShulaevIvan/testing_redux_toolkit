import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/slices/counterSlice";

export const Counter = () => {
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <p>{value}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>IncrementByAmount</button>
        </React.Fragment>
    )
}