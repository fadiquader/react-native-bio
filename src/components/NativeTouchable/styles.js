import { StyleSheet } from 'react-native';
import * as v from '../../themeVariables';

const styles = StyleSheet.create({
    list: {
        padding: 3,
    },
    activeMenuItem: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderLeftWidth: 4,
        borderLeftColor: v.DARK_PRIMARY_COLOR
    },
    iconButtonLight: {
        color: v.TEXT_ICON,
        fontSize: v.ICON_FONT_SIZE
    },
    iconButtonDark: {
        color: v.PRIMARY_TEXT,
        fontSize: v.ICON_FONT_SIZE
    },
    defaultIconText: {
        marginRight: 10,
        marginLeft: 10,
        fontSize: 16,
    }
});

export default styles;