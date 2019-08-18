/**
 * This module contains scene that presents settings lightbox.
 *
 * @format
 */

import PropTypes from "prop-types";
import React, { Component } from "react";
import { Picker, Text, View } from "react-native";

import createStyles from "./Settings.styles";
import intoThemeWrapper from "../../utils/intoThemeWrapper";

class TabDrawerScene extends Component {
  static propTypes = {
    // language: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired
  };

  render() {
    // console.log(Actions);
    const { theme } = this.props;

    const styles = createStyles(theme.palette);

    return (
      <View style={styles.screen}>
        <View style={styles.box}>
          <Picker
            selectedValue="js"
            style={{
              height: 50,
              width: 300
            }}
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
      </View>
    );
  }
}

export default intoThemeWrapper(TabDrawerScene);
