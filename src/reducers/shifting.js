import * as ws from '../actions/Websocket'
import {MOVE_FORWARD, MOVE_BACKWARD, MOVE_LEFT, MOVE_RIGHT} from '../constants/ActionTypes';
import {MOVECAM_UP, MOVECAM_DOWN, MOVECAM_LEFT, MOVECAM_RIGHT} from '../constants/ActionTypes';



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
        case MOVECAM_UP:
            return MOVECAM_UP;
        case MOVECAM_DOWN:
            return MOVECAM_DOWN;
        case MOVECAM_LEFT:
            return MOVECAM_LEFT;
        case MOVECAM_RIGHT:
            return MOVECAM_RIGHT;
        default:
            return state;
    }
}
