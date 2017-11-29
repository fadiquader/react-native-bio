import {Platform} from 'react-native';

// export class UIConstants {
//   static AppbarHeight = Platform.OS === 'ios' ? 44 : 56;
//   static StatusbarHeight = Platform.OS === 'ios' ? 20 : 0;
//   static HeaderHeight = UIConstants.AppbarHeight + UIConstants.StatusbarHeight;
// }

const AppbarHeight = Platform.OS === 'ios' ? 44 : 56;
const StatusbarHeight = Platform.OS === 'ios' ? 20 : 0;
const UIConstants = {
    AppbarHeight,
    StatusbarHeight,
    HeaderHeight: AppbarHeight + StatusbarHeight
};

export default UIConstants;