import React from 'react';
import {
  View,
  Text,
  FlatList,
  Animated,
  Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import { Card } from './Card';

export class CardList extends React.Component {

  static propTypes = {
    itemProps: PropTypes.shape(Card.propTypes),
    cards: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      picture: PropTypes.any,
      content: PropTypes.array
    })),
    selected: PropTypes.string,
    listStyle: PropTypes.any,
    duration: PropTypes.number
  }

  static defaultProps = {
    duration: 600
  }

  _layouts = new Map()  

  constructor(props) {
    super(props);

    this.state = {            
      selected: new Map(),
      zoomedStyle: {},
      maxHeight: 400,
      zoomAnim: new Animated.Value(1)
    }    
  }

  _keyExtractor = (item, index) => item.id

  _onPressItem = ({ item, index }) => {
    if (!this._flatList) {
      return;
    }

    this.setState(state => {
      if (state.selected.get(item.id)) {
        return state;
      }

      selected = new Map();
      selected.set(item.id, true);

      this._flatList.scrollToIndex({ animated: true, index });
      
      let windowWidth = Dimensions.get('window').width;
      let windowHeight = Dimensions.get('window').height;
      let viewWidth = this._layouts.get(item.id).width;

      let scale = windowWidth / viewWidth;
      let maxHeight = windowHeight / scale;

      return ({
        ...state,
        selected: selected,
        zoomedStyle: {
          transform: [{ translateY: 0 }]
        },
        maxHeight: maxHeight
      });
    });
  }

  _onCloseItem = ({ item, index }) => {
    this.setState(state => {

      return ({
        ...state,
        selected: new Map(),
        zoomedStyle: {
          transform: [{ translateY: 0 }]
        },
      });
    });
  }

  _renderItem = ({ item, index }) =>
    <Card
      onLayout={e => this._layouts.set(item.id, e.nativeEvent.layout)}
      title={item.title}
      picture={item.picture}
      content={item.content}
      onPress={() => this._onPressItem({ item, index })}
      onClose={() => this._onCloseItem({item, index})}
      maxHeight={this.state.maxHeight}
      selected={this.state.selected.get(item.id)}
      heightDuration={this.props.duration}
    />  

  render() {
    return (
      <Animated.View style={[{ flex: 1 }, this.state.zoomedStyle]}>
        <FlatList
          ref={c => this._flatList = c}
          style={[{
            flex: 1,
            backgroundColor: 'white'
          }, this.props.listStyle]}
          data={this.props.cards}
          scrollEnabled={true}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />        
      </Animated.View>
    )
  }
}