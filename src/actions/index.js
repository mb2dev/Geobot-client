// https://stackoverflow.com/questions/34072598/es6-exporting-importing-in-index-file
import * as _CamControllerActions from './CamControllerActions';
import * as _RobotControllerActions from './RobotControllerActions';
import * as _WebsocketActions from './WebsocketActions';

export const CamControllerActions = _CamControllerActions;
export const RobotControllerActions = _RobotControllerActions;
export const WebsocketActions = _WebsocketActions;
