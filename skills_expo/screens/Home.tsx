import React, { useState } from "react";
import { View, ImageBackground } from "react-native";
import CardStack from "react-native-card-stack-swiper";
import { City, Filters, CardItem } from "../components";
import styles from "../assets/styles";
import DEMO from "../assets/data/demo";

const Home = () => {
  const [swiper, setSwiper] = useState<any>(null); // TS workaround

  // These are your action functions
  const handleSwipeLeft = () => {
    if (swiper) swiper.swipeLeft();
  };

  const handleSwipeRight = () => {
    if (swiper) swiper.swipeRight();
  };

  const handleSuperLike = () => {
    // You can replace this with your actual superlike animation
    alert("Super Liked!");
  };

  const handleRewind = () => {
    if (swiper) swiper.goBackFromLeft(); // or goBackFromRight() if you prefer
  };

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Filters />
        </View>

        {/* @ts-ignore to bypass dumb children typing error */}
        <CardStack
          loop
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={(newSwiper) => setSwiper(newSwiper)}
        >
          {DEMO.map((item, index) => (
            <CardItem
              key={index}
              hasActions
              image={item.image}
              name={item.name}
              description={item.description}
              matches={item.matches}
              isOnline={item.isOnline}
              onSwipeLeft={handleSwipeLeft}
              onSwipeRight={handleSwipeRight}
              onSuperLike={handleSuperLike}
              onRewind={handleRewind}
            />
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  );
};

export default Home;