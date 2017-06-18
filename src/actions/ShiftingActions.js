import * as ws from '../actions/Websocket'
import {MOVE_FORWARD, MOVE_BACKWARD, MOVE_LEFT, MOVE_RIGHT, STOP} from '../constants/ActionTypes';
import {MOVECAM_UP, MOVECAM_DOWN, MOVECAM_LEFT, MOVECAM_RIGHT, STOPCAM} from '../constants/ActionTypes';

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
};

export function upCam(){
  return {type: MOVECAM_UP};
}
export function downCam(){
  return {type: MOVECAM_DOWN};
}
export function leftCam(){
  return {type: MOVECAM_LEFT};
}
export function rightCam(){
  return {type: MOVECAM_RIGHT};
}
export function stopCam() {
    return {type: STOPCAM};
};

export function moveRobot(type) {
    console.log("here,type");
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
        }else if(type == MOVECAM_UP){
          dispatch(upCam());
        }else if(type == MOVECAM_DOWN){
          dispatch(downCam());
        }else if(type == MOVECAM_LEFT){
          dispatch(leftCam());
        }else if(type == MOVECAM_RIGHT){
          dispatch(rightCam());
        }
    };
}

export function stopRobot() {
    return dispatch => {
        dispatch(ws.sendMsg(STOP));
        dispatch(stop());
    }
}

export function stopCamera() {
    return dispatch => {
        dispatch(ws.sendMsg(STOPCAM));
        dispatch(stopCam());
    }
}
