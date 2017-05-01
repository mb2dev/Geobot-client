import * as ws from '../actions/Websocket'
import {MOVE_FORWARD, MOVE_BACKWARD, MOVE_LEFT, MOVE_RIGHT} from '../constants/ActionTypes';


export default function shifting(state = "stop", action) {
    switch (action.type) {
        case MOVE_FORWARD:
            return MOVE_FORWARD;
        case MOVE_BACKWARD:
            return MOVE_BACKWARD;
        case MOVE_LEFT:
            return MOVE_LEFT;
        case MOVE_RIGHT:
            return  MOVE_RIGHT;
        default:
            return state;
    }
}
