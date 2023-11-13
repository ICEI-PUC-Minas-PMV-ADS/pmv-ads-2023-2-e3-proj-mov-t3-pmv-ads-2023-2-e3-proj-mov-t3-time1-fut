import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

function RatingMatch() {
  const [defaultRating, setdefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);

  const trophyImgFilled = require('../../assets/trophyFilled.png');
  const trophyImgCorner = require('../../assets/trophyCorner.png');

  const CustomRatingBar = () => {
    return (
      <View style={styles.CustomRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setdefaultRating(item)}
            >
              <Image
                style={styles.trophyImgStyle}
                source={
                  item <= defaultRating
                    ? trophyImgFilled
                    : trophyImgCorner
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>

    <Text style={styles.textStyle}> Avalie a partida </Text>
      <CustomRatingBar />
      
      <Text style={styles.textStyle}>
        {defaultRating + ' / ' + maxRating.length}
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={() => alert(defaultRating)}
      >
        <Text style={styles.textStyleItem}> Enviar </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    marginTop: 20,
  },
  CustomRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  trophyImgStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    padding: 15,
    backgroundColor: 'blue',
  },
  textStyleItem: {
    color: 'white',
  },
});

export default RatingMatch;
