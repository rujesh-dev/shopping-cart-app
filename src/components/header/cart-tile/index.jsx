import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../store/slices/cart-slice";


export default function CartTile({cartItem}){
        const dispatch = useDispatch();

     const { cart } = useSelector((state) => state);
    
     
         function handleRemoveFromCart() {
             dispatch(removeFromCart(cartItem.id))
         }
    return(
        <div>
             <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 w-[240px] mt-10 ml-5 rounded-xl">
                <div className="h-[180px]">
                    <img
                        src={cartItem?.image}
                        alt={cartItem?.title}
                        className="object-cover h-full w-full"
                    />
                </div>

                <div >
                    <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">{cartItem?.title}</h1>
                    <p className="font-extrabold">{cartItem.price}</p>
                </div>

                <div className="flex items-center justify-center w-full mt-7" >
                    <button onClick={handleRemoveFromCart } className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
                       
                        Remove from cart
                       
                        
                    </button>
                </div>
            </div>
        </div>
    )
}