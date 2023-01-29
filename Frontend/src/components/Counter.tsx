import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectValue,
} from "store/slices/counterSlice";

export const Counter = () => {
  const count = useSelector(selectValue);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState<number>(0);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col space-y-3 text-center">
        <button
          className="bg-blue-400 border-1 px-4 py-2 rounded-md cursor-pointer text-md text-white font-semibold"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment +
        </button>
        <span className="text-xl">{count}</span>
        <button
          className="bg-blue-400 border-1 px-4 py-2 rounded-md cursor-pointer text-md text-white font-semibold"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement -
        </button>

        <div className="flex space-x-2">
          <input
            type="text"
            className="rounded border p-2  outline-none ring-indigo-300  focus:ring"
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />
          <button
            className="bg-blue-600 border-1 px-4 py-2 rounded-md cursor-pointer text-md text-white font-semibold"
            aria-label="Decrement value"
            onClick={() => dispatch(incrementByAmount(amount))}
          >
            Add Amount
          </button>
        </div>
      </div>
    </div>
  );
};
