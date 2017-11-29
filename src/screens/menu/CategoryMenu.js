import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  TouchableHighlight,
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

export class CategoryMenu extends Component {

  constructor(props) {
    super(props);
    this.isEmpty = this.props.items.length === 0;
    if (!this.isEmpty) {
      this.data = this.props.items;
      this.renderRow = this._renderRow.bind(this);
      this.navigate = this._navigate.bind(this);
    }
    this.state = {selected: true};
  }

  _navigate(row) {
    if (row.action) {
      this.props.navigation.navigate(row.action)
    } else {
      this.props.navigation.navigate(row.id)
    }
  }


  _renderRow(row) {
    return (
      <TouchableHighlight
        style={styles.item}
        // underlayColor={RkTheme.current.colors.button.underlay}
        activeOpacity={1}
        onPress={() => {
          this.navigate(row.item);
        }}>
        <View>
          <Text>{row.item.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  _keyExtractor(item, index) {
    return item.id;
  }

  render() {
    if (this.isEmpty) {
      return (
        <View style={styles.emptyContainer}>
          <Text >Coming Soon...</Text>
        </View>
      )
    } else {
      return (
        <FlatList
          style={styles.list}
          data={this.data}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderRow}/>
      )
    }
  }
}

let styles = StyleSheet.create(theme => ({
  item: {
    paddingVertical: 32.5,
    paddingHorizontal: 16.5,
    borderBottomWidth: 1,
    borderColor: "#aaaaaa",
  },
  list: {
      backgroundColor: '#eeeeee'
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee'
  }
}));

CategoryMenu.propTypes = {
  navigation: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};