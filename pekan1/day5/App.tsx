
import ButtonReactNative from "./src/components/ButtonReactNative";
import PressableNative from "./src/components/PressableNative";
import TouchableWithoutFeedbackNative from "./src/components/TouchableHighlightNative";
import TouchableNativeFeedbackAndroid from "./src/components/TouchableNativeFeedbackAndroid";
import TouchableOpacityNative from "./src/components/TouchableOpacityNative";
import TouchableNativeFeedbackNative from "./src/components/TouchableWithoutFeedbackNative";
import TouchableNativeFeedbackDemo from "./src/components/TouchableWithoutFeedbackNative";


export default function App() {

  return (
    <>
      <ButtonReactNative />

      <PressableNative />

      <TouchableOpacityNative />

      <TouchableWithoutFeedbackNative />

      <TouchableNativeFeedbackAndroid />

      <TouchableNativeFeedbackNative />

    </>
  )
}