import react from 'react'
import {View, Image} from "react-native";

const Profile = () => {
    return(
        <View style={styles.container}>
            <Image
                source={{
                    uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual user profile URL
                }}
                style={styles.profileImage}
            />
            <Text>
                GDS
            </Text>
        </View>
    )
}