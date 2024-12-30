// import userModel from "../models/userModel.js"
// const addToCart = async (req,res) => {
//     try {
//         const { userId, itemId, size } = req.body
//         const userData = await userModel.findById(userId)
//         let cartData = await userData.cartData;
//         if (cartData[itemId]) {
//             if (cartData[itemId][size]) {
//                 cartData[itemId][size] += 1
//             }
//             else {
//                 cartData[itemId][size] = 1
//             }
//         } else {
//             cartData[itemId] = {}
//             cartData[itemId][size] = 1
//         }
//         await userModel.findByIdAndUpdate(userId, {cartData})
//         res.json({ success: true, message: "Added To Cart" })
//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })
//     }
// }
// const updateCart = async (req,res) => {
//     try {        
//         const { userId ,itemId, size, quantity } = req.body
//         const userData = await userModel.findById(userId)
//         let cartData = await userData.cartData;
//         cartData[itemId][size] = quantity
//         await userModel.findByIdAndUpdate(userId, {cartData})
//         res.json({ success: true, message: "Cart Updated" })
//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })
//     }
// }
// // get user cart data
// const getUserCart = async (req,res) => {
//     try {
//         const { userId } = req.body
//         const userData = await userModel.findById(userId)
//         let cartData = await userData.cartData;
//         res.json({ success: true, cartData })
//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })
//     }
// }
// export { addToCart, updateCart, getUserCart }
import userModel from "../models/userModel.js";
import GoogleUser from "../models/user-authModel.js";
// Utility function to get the correct user model
const getUserData = async (userId, isGoogleAuth) => {
  if (isGoogleAuth) {
    return await GoogleUser.findById(userId);
  }
  return await userModel.findById(userId);
};
// Utility function to update the user data
const updateUserData = async (userId, cartData, isGoogleAuth) => {
  if (isGoogleAuth) {
    return await GoogleUser.findByIdAndUpdate(userId, { cartData });
  }
  return await userModel.findByIdAndUpdate(userId, { cartData });
};
// Add to Cart (supports both user types)
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size, isGoogleAuth } = req.body;

    const userData = await getUserData(userId, isGoogleAuth);
    let cartData = userData.cartData || {};

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await updateUserData(userId, cartData, isGoogleAuth);
    res.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
// Update Cart (supports both user types)
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity, isGoogleAuth } = req.body;

    const userData = await getUserData(userId, isGoogleAuth);
    let cartData = userData.cartData || {};

    if (!cartData[itemId]) {
      return res.json({ success: false, message: "Item not found in cart" });
    }

    if (quantity <= 0) {
      delete cartData[itemId][size];
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }
    } else {
      cartData[itemId][size] = quantity;
    }

    await updateUserData(userId, cartData, isGoogleAuth);
    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
// Get User Cart Data (supports both user types)
const getUserCart = async (req, res) => {
  try {
    const { userId, isGoogleAuth } = req.body;

    const userData = await getUserData(userId, isGoogleAuth);
    let cartData = userData.cartData || {};

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
export { addToCart, updateCart, getUserCart };