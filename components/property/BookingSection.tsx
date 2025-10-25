import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;
    const diffTime = new Date(checkOut).getTime() - new Date(checkIn).getTime();
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights * price : 0;
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-20">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      <div className="mt-4">
        <label>Check-in</label>
        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="border p-2 w-full mt-1" />
      </div>

      <div className="mt-4">
        <label>Check-out</label>
        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="border p-2 w-full mt-1" />
      </div>

      <div className="mt-4">
        <p>Total payment: <strong>${calculateTotal()}</strong></p>
      </div>

      <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md w-full hover:bg-green-700">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
