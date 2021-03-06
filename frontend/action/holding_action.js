import * as holdingUtil from '../util/holding_util'


export const fetchHoldings = (id) => (dispatch) => {
    return holdingUtil.fetchHoldings(id).then((data) => {
        dispatch({type: "RECEIVE_HOLDINGS", data})
    })
}