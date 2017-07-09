import * as ws from '../actions/WebsocketActions'
import {MOVE_FORWARD, MOVE_BACKWARD, MOVE_LEFT, MOVE_RIGHT, STOP} from '../constants/ActionTypes';
import {MOVECAM_UP, MOVECAM_DOWN, MOVECAM_LEFT, MOVECAM_RIGHT, STOP_CAM, START_CAM} from '../constants/ActionTypes';

export function forward() {
    return {type: MOVE_FORWARD};
}

export function backward() {
    return {type: MOVE_BACKWARD};
}

export function left() {
    return {type: MOVE_LEFT};
}

export function right() {
    return {type: MOVE_RIGHT};
}

export function stop() {
    return {type: STOP};
}

export function moveRobot(type) {
    return dispatch => {
        dispatch(ws.sendMsg(type));
        if (type == MOVE_FORWARD) {
            dispatch(forward());
        } else if (type == MOVE_BACKWARD) {
            dispatch(backward());
        } else if (type == MOVE_LEFT) {
            dispatch(left());
        } else if (type == MOVE_RIGHT) {
            dispatch(right());
        }
    };
}

export function stopRobot() {
    return dispatch => {
        dispatch(ws.sendMsg(STOP));
        dispatch(stop());
    }
}
