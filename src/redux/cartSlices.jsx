// //local storage store
// import { createSlice } from "@reduxjs/toolkit";

// // Load cart data from local storage (if available)
// const loadCartFromLocalStorage = () => {
//   try {
//     const storedCart = localStorage.getItem("cart");
//     return storedCart ? JSON.parse(storedCart) : [];
//   } catch (error) {
//     console.error("Error loading cart from local storage", error);
//     return [];
//   }
// };

// const initialState = {
//   items: loadCartFromLocalStorage(),
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const existingItem = state.items.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//       localStorage.setItem("cart", JSON.stringify(state.items)); // Save to local storage
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//       localStorage.setItem("cart", JSON.stringify(state.items)); // Update local storage
//     },
//     clearCart: (state) => {
//       state.items = [];
//       localStorage.removeItem("cart"); // Clear local storage
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;


// // count increase in navbar
// import { createSlice } from "@reduxjs/toolkit";

// // Load cart data from local storage (if available)
// const loadCartFromLocalStorage = () => {
//   try {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       const parsedCart = JSON.parse(storedCart);
//       if (
//         parsedCart &&
//         typeof parsedCart === "object" &&
//         Array.isArray(parsedCart.items) &&
//         typeof parsedCart.count === "number"
//       ) {
//         return parsedCart;
//       }
//     }
//     return { items: [], count: 0 }; // Default if local storage is empty or invalid
//   } catch (error) {
//     console.error("Error loading cart from local storage", error);
//     return { items: [], count: 0 }; // Default on error
//   }
// };

// const initialState = loadCartFromLocalStorage();

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const existingItem = state.items.find(
//         (item) => item.id === action.payload.id
//       );
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//       state.count = state.items.reduce(
//         (total, item) => total + item.quantity,
//         0
//       );
//       localStorage.setItem("cart", JSON.stringify(state));
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//       state.count = state.items.reduce(
//         (total, item) => total + item.quantity,
//         0
//       );
//       localStorage.setItem("cart", JSON.stringify(state));
//     },
//     clearCart: (state) => {
//       state.items = [];
//       state.count = 0;
//       localStorage.setItem("cart", JSON.stringify(state));
//     },
//     incrementQuantity: (state, action) => {
//       const itemToIncrement = state.items.find(
//         (item) => item.id === action.payload.id
//       );
//       if (itemToIncrement) {
//         itemToIncrement.quantity += 1;
//         state.count += 1;
//         localStorage.setItem("cart", JSON.stringify(state));
//       }
//     },
//     decrementQuantity: (state, action) => {
//       const itemToDecrement = state.items.find(
//         (item) => item.id === action.payload.id
//       );
//       if (itemToDecrement && itemToDecrement.quantity > 1) {
//         itemToDecrement.quantity -= 1;
//         state.count -= 1;
//         localStorage.setItem("cart", JSON.stringify(state));
//       }
//     },
//   },
// });

// export const {
//   addToCart,
//   removeFromCart,
//   clearCart,
//   incrementQuantity,
//   decrementQuantity,
// } = cartSlice.actions;

// export default cartSlice.reducer;

// export const selectCartItems = (state) => state.cart.items;
// export const selectCartCount = (state) => state.cart.count;



//update toastify
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Load cart data from local storage (if available)
const loadCartFromLocalStorage = () => {
  try {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      if (
        parsedCart &&
        typeof parsedCart === "object" &&
        Array.isArray(parsedCart.items) &&
        typeof parsedCart.count === "number"
      ) {
        return parsedCart;
      }
    }
    return { items: [], count: 0 }; // Default if local storage is empty or invalid
  } catch (error) {
    console.error("Error loading cart from local storage", error);
    return { items: [], count: 0 }; // Default on error
  }
};

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        toast.info("Increased item quantity in cart!", { autoClose: 1000 });
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        toast.success("Item added to cart!", { autoClose: 1000 });
      }

      state.count = state.items.reduce((total, item) => total + item.quantity, 0);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        toast.error(`${item.name} removed from cart!`, { autoClose: 1000 });
      }

      state.items = state.items.filter((item) => item.id !== action.payload);
      state.count = state.items.reduce((total, item) => total + item.quantity, 0);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      state.items = [];
      state.count = 0;
      localStorage.setItem("cart", JSON.stringify(state));
      toast.warn("Cart cleared!", { autoClose: 1000 });
    },
    incrementQuantity: (state, action) => {
      const itemToIncrement = state.items.find((item) => item.id === action.payload.id);
      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
        state.count += 1;
        localStorage.setItem("cart", JSON.stringify(state));
        toast.info("Increased quantity!", { autoClose: 1000 });
      }
    },
    decrementQuantity: (state, action) => {
      const itemToDecrement = state.items.find((item) => item.id === action.payload.id);
      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity -= 1;
        state.count -= 1;
        localStorage.setItem("cart", JSON.stringify(state));
        toast.info("Decreased quantity!", { autoClose: 1000 });
      } else if (itemToDecrement) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
        state.count = state.items.reduce((total, item) => total + item.quantity, 0);
        localStorage.setItem("cart", JSON.stringify(state));
        toast.error(`${itemToDecrement.name} removed from cart!`, { autoClose: 1000 });
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) => state.cart.count;

