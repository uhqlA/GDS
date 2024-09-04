import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Constants from "../../components/constants/Constants";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Status = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardHome}>
        <View style={styles.iconsHome}>
          <View style={styles.iconInfo}>
            <TouchableOpacity>
              <FontAwesome6
                name="hourglass-start"
                size={24}
                color="green"
                style={styles.icon}
              />
              <Text style={styles.textHome}>Not Started</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconInfo}>
            <TouchableOpacity>
              <FontAwesome6
                name="bars-progress"
                size={30}
                color="green"
                style={styles.icon}
              />
              <Text style={styles.textHome}>Ongoing</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconInfo}>
            <TouchableOpacity>
              <FontAwesome6
                name="handshake"
                size={30}
                color="green"
                style={styles.icon}
              />
              <Text style={styles.textHome}>Completed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  cardHome: {
    padding: 16,
  },
  iconInfo: {
    width: 80,
    height: 80,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Constants.AppColor.blue,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: "#d7e9ef",
  },
  iconsHome: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 5,
  },
  icon: {
    textAlign: "center",
  },
  textHome: {
    color: Constants.AppColor.backgroundColor,
    textAlign: "center",
  },
});
