import { combineReducers } from 'redux';
import { CartActionTypes, removeFromCart } from './Action';

type CartState= {
    id:number;
    url: string;
    alt: string;
    count:number;
    quantity:number;
    price:number;
}

type Arrays={
    items:CartState[];
    count:number;
    totalPrice:number;
}
interface AddItemAction {
    type: CartActionTypes.ADD_ITEM;
    payload: any;
  }



const initialState:Arrays = {
  items:[],
  count:0,
  totalPrice: 0,
};

 const CartReducer = (state=initialState,action:any) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = action.payload;
      const existingItem = state.items.find(item=>item.id=== newItem.id);
      if(existingItem){
        console.log()
        return{
          ...state,
          items: state.items.map(item=>
            item.id===newItem.id ? {...item,count:item.count + 1,quantity:item.quantity+1} : item
            ),
        };
      } 
      else{
        return {
          ...state,
          count:state.count+1,
          items: [...state.items,newItem],
          totalPrice: state.totalPrice + action.payload.price,
        };
        }
        case "REMOVE_FROM_CART":
          return{
            ...state,
            items : state.items.filter(item => item.id !== action.payload.id),
            totalPrice : state.items.reduce((total,item)=> total + item.price * item.quantity,0), 
          };
  
     
     
    default:
      return state;
  }
};

const rootReducer = combineReducers({
    cart: CartReducer,
})
export default rootReducer;

