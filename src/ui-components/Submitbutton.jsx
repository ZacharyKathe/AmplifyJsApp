/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Submitbutton(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="317px"
      height="540px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Submitbutton")}
      {...rest}
    >
      <View
        width="235px"
        height="53px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="460px"
        left="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(53,108,139,1)"
        {...getOverrideProps(overrides, "Rectangle 12")}
      ></View>
      <Text
        fontFamily="Figma Hand"
        fontSize="20px"
        fontWeight="400"
        color="rgba(250,250,250,1)"
        lineHeight="28px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="473px"
        left="110px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Submit"
        {...getOverrideProps(overrides, "Submit")}
      ></Text>
    </View>
  );
}
