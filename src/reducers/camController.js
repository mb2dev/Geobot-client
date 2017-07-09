import {MOVECAM_UP, MOVECAM_DOWN, MOVECAM_LEFT, MOVECAM_RIGHT, STILL} from '../constants/ActionTypes';

export default function camController(state = STILL, action) {
    //console.log("camController action:%s, state:%s", action.type, state);
    switch (action.type) {
        case MOVECAM_UP:
            return MOVECAM_UP;
        case MOVECAM_DOWN:
            return MOVECAM_DOWN;
        case MOVECAM_LEFT:
            return MOVECAM_LEFT;
        case MOVECAM_RIGHT:
            return MOVECAM_RIGHT;
        default:
            return STILL;
    }
}
