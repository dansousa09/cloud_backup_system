import { TouchableOpacity } from "react-native";
import * as S from "./styles";
import { Button, Text, View } from "native-base";
import DocumentPicker from "react-native-document-picker"

export const UploadFilesButton = () => {
  const selectDoc = async () => {
    const doc = await DocumentPicker.pick();
    console.log(doc, "~ doc")
  }

  return (
    <View style={S.styles.container}>
      <TouchableOpacity onPress={() => selectDoc()}>
        <Button>
          <Text style={{color: "#FFF"}}>UPLOAD FILES</Text>
        </Button>
      </TouchableOpacity>
    </View>
  );
};
