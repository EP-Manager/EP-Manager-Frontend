import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom/dist'

// import item1 from '../assets/item1.jpeg'
// import item2 from '../assets/item2.jpeg'
// import item3 from '../assets/item3.jpeg'
// import item4 from '../assets/item4.jpeg'
// import item5 from '../assets/item5.jpeg'

// const items = [
//   {
//     "id": 1,
//     "image": item1,
//     "name": "Plastic 1",
//     "available": true,
//     "price": 10.99,
//     "address": "123 Main St, Anytown, USA"
//   },
//   {
//     "id": 2,
//     "image": item2,
//     "name": "Plastic 2",
//     "available": false,
//     "price": 15.99,
//     "address": "456 Oak St, Anytown, USA"
//   },
//   {
//     "id": 3,
//     "image": item3,
//     "name": "Plastic 3",
//     "available": true,
//     "price": 12.99,
//     "address": "789 Pine St, Anytown, USA"
//   },
//   {
//     "id": 4,
//     "image": item4,
//     "name": "Plastic 4",
//     "available": true,
//     "price": 9.99,
//     "address": "321 Elm St, Anytown, USA"
//   },
//   {
//     "id": 5,
//     "image": item5,
//     "name": "Plastic 5",
//     "available": false,
//     "price": 14.99,
//     "address": "654 Maple St, Anytown, USA"
//   },
//   {
//     "id": 6,
//     "image": item1,
//     "name": "Plastic 1",
//     "available": true,
//     "price": 10.99,
//     "address": "123 Main St, Anytown, USA"
//   },
//   {
//     "id": 7,
//     "image": item2,
//     "name": "Plastic 2",
//     "available": false,
//     "price": 15.99,
//     "address": "456 Oak St, Anytown, USA"
//   },
//   {
//     "id": 8,
//     "image": item3,
//     "name": "Plastic 3",
//     "available": true,
//     "price": 12.99,
//     "address": "789 Pine St, Anytown, USA"
//   },
//   {
//     "id": 9,
//     "image": item4,
//     "name": "Plastic 4",
//     "available": true,
//     "price": 9.99,
//     "address": "321 Elm St, Anytown, USA"
//   },
//   {
//     "id": 10,
//     "image": item5,
//     "name": "Plastic 5",
//     "available": false,
//     "price": 14.99,
//     "address": "654 Maple St, Anytown, USA"
//   },
//   {
//     "id": 11,
//     "image": item1,
//     "name": "Plastic 1",
//     "available": true,
//     "price": 10.99,
//     "address": "123 Main St, Anytown, USA"
//   },
//   {
//     "id": 12,
//     "image": item2,
//     "name": "Plastic 2",
//     "available": false,
//     "price": 15.99,
//     "address": "456 Oak St, Anytown, USA"
//   },
//   {
//     "id": 13,
//     "image": item3,
//     "name": "Plastic 3",
//     "available": true,
//     "price": 12.99,
//     "address": "789 Pine St, Anytown, USA"
//   },
//   {
//     "id": 14,
//     "image": item4,
//     "name": "Plastic 4",
//     "available": true,
//     "price": 9.99,
//     "address": "321 Elm St, Anytown, USA"
//   },
//   {
//     "id": 15,
//     "image": item5,
//     "name": "Plastic 5",
//     "available": false,
//     "price": 14.99,
//     "address": "654 Maple St, Anytown, USA"
//   }
// ];

const ItemCards = () => {

  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  //getting token from local storage
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('https://lordgrim.pythonanywhere.com/api/v1/shop_items/all/' , {
      headers: {
        'Authorization': `Bearer ${token}` // Use the token from local storage
      }
    })
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [token]);

  return (
    <div className='flex flex-col justify-center items-center mt-20'>
        <p className='text-5xl font-extrabold overflow-hidden opacity-70'>THE LATEST IN THE STORE!</p>
        <div className="grid grid-cols-4 gap-1 mx-36 mt-10">
        {Array.isArray(items.data) ? items.data.map((item) => (
  <div key={item.id} className="h-80 w-72 max-w-xs rounded overflow-hidden shadow-lg m-2">
    <img className="w-full h-44" src={item.image} alt={item.name} />
    <div className="px-6 py-1">
      <div className="font-bold text-xl">{item.name}</div>
      <p className="text-gray-700 text-xs">
        {item.description}
      </p>
    </div>
    <div className="px-6 py-2 ">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-black mr-2 mb-2">
        ${item.unit_price}
      </span>
      <button className='bg-green-500 hover:bg-green-700 text-white text-sm p-1 rounded'
        onClick={() => navigate(`/item-details/${item.id}`)}
      >
        Buy
      </button>
    </div>
  </div>
)) : null}
    </div>
    </div>
  );
};

export default ItemCards;