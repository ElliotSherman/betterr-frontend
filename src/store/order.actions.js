import { orderService } from "../services/order.service"
import { reviewService } from "../services/review.service"

// Action Creators
export function getActionRemoveReview(reviewId) {
  return { type: "REMOVE_REVIEW", reviewId }
}
export function getActionAddReview(review) {
  return { type: "ADD_REVIEW", review }
}
export function getActionSetWatchedUser(user) {
  return { type: "SET_WATCHED_USER", user }
}

export function setOrderStatus(miniOrder) {
  return async (dispatch) => {
    try {
      const order = await orderService.updateStatus(miniOrder)

      dispatch({ type: "SET_ORDER_STATUS", order })
    } catch (err) {
      console.log(err)
    }
  }
}

export function setOrderStatusLocal(miniOrder) {
  return (dispatch) => {
    dispatch({ type: "SET_ORDER_STATUS_LOCAL", miniOrder })
  }
}

export function loadOrders(filter) {
  return async (dispatch) => {
    try {
      const orders = await orderService.query(filter)
      dispatch({ type: "SET_ORDERS", orders })
    } catch (err) {
      console.log("OrderActions: err in loadOrders", err)
    }
  }
}

export function addReview(review) {
  return async (dispatch) => {
    try {
      const addedReview = await reviewService.add(review)
      dispatch(getActionAddReview(addedReview))

      // Change the score in user kept in sessionStorage
      // userService.saveLocalUser(addedReview.byUser)
      // const { score } = addedReview.byUser
      // dispatch({ type: 'SET_SCORE', score })
    } catch (err) {
      console.log("ReviewActions: err in addReview", err)
      throw err
    }
  }
}

export function removeReview(reviewId) {
  return async (dispatch) => {
    try {
      await reviewService.remove(reviewId)
      dispatch(getActionRemoveReview(reviewId))
    } catch (err) {
      console.log("ReviewActions: err in removeReview", err)
      throw err
    }
  }
}
