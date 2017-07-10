import * as ws from '../actions/WebsocketActions'
import {MOVECAM_UP, MOVECAM_DOWN, MOVECAM_LEFT, MOVECAM_RIGHT, STOP_CAM, START_CAM, STILL, RECORDING} from '../constants/ActionTypes';

export function up(){
  return {type: MOVECAM_UP};
}
export function down(){
  return {type: MOVECAM_DOWN};
}
export function left(){
  return {type: MOVECAM_LEFT};
}
export function right(){
  return {type: MOVECAM_RIGHT};
}
export function still() {
    return {type: STILL};
}
export function stop() {
    return {type: STOP_CAM};
}
export function start() {
    return {type: START_CAM};
}
export function record() {
    return { type: RECORDING };
}

export function moveCam(type) {
    return dispatch => {
        dispatch(ws.sendMsg(type));
        if(type == MOVECAM_UP){
          dispatch(up());
        }else if(type == MOVECAM_DOWN){
          dispatch(down());
        }else if(type == MOVECAM_LEFT){
          dispatch(left());
        }else if(type == MOVECAM_RIGHT){
          dispatch(right());
        }
    };
}

export function recordCamera(){
  return dispatch => {
    dispatch(ws.sendMsg(RECORDING));
    dispatch(record());
  }
}

export function stopCamMove() {
    return dispatch => {
        dispatch(ws.sendMsg(STILL));
        dispatch(still());
    }
}

export function stopCamera() {
    return dispatch => {
        dispatch(ws.sendMsg(STOP_CAM));
        dispatch(stop());
    }
}

export function startCamera() {
    return dispatch => {
        dispatch(ws.sendMsg(START_CAM));
        dispatch(start());
    }
}
