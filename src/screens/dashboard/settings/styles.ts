import {StyleSheet} from 'react-native';
import { SCREEN_WIDTH, vw, vh} from '../../../utils/dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {},
  listHeader: {
    width: SCREEN_WIDTH,
    paddingVertical: 10,
    borderTopWidth: 4,
    borderTopColor: '#F2F2F2',
    marginBottom: vh(4),
  },
  listHeaderText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: vw(12),
    color: 'grey',
  },
  item: {
    paddingHorizontal: vw(16),
    paddingVertical: 12,
    borderBottomColor: '#eee',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  listImage:{
    width:vw(24),
    height:vw(24),
    resizeMode:'contain',
  },
  itemText: {
    fontSize: 17,
  },
  rightIcon:{
    width:vw(14),
    height:vw(14),
    resizeMode:'contain',
    tintColor:'grey',
  },
});

export default styles;