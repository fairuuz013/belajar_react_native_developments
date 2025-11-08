import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import ButtomTabsNative from "./BottomTabsNavigator";

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <ButtomTabsNative />
        </NavigationContainer>
    )
}