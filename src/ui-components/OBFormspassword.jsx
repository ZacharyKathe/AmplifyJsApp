/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function OBFormspassword(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { password: {}, Name: {}, Frame: {}, OBFormspassword: {} },
      variantValues: {
        property1: "OB Forms",
        property2: "password",
        property3: "default",
      },
    },
    {
      overrides: {
        password: {},
        Name: {},
        Frame: { border: "1px SOLID rgba(241,70,104,1)" },
        OBFormspassword: {},
      },
      variantValues: { property1: "error" },
    },
    {
      overrides: {
        password: {},
        Name: {},
        Frame: { border: "1px SOLID rgba(34,34,34,1)" },
        OBFormspassword: {},
      },
      variantValues: { property1: "focus" },
    },
    {
      overrides: {
        password: {},
        Name: {},
        Frame: { backgroundColor: "rgba(216,216,216,1)" },
        OBFormspassword: {},
      },
      variantValues: { property1: "disabled" },
    },
    {
      overrides: {
        password: {},
        Name: {},
        Frame: { border: "1px SOLID rgba(34,34,34,1)" },
        OBFormspassword: {},
      },
      variantValues: { property1: "hover" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="300px"
      height="84px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "OBFormspassword")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="300px"
        height="28px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1.19%"
        bottom="65.48%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="password"
        {...getOverrideProps(overrides, "password")}
      ></Text>
      <Flex
        gap="0"
        direction="column"
        width="300px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="28px"
        left="0%"
        right="0%"
        border="1px SOLID rgba(9,9,9,1)"
        borderRadius="5px"
        padding="9px 14px 9px 14px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Frame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(210,210,210,1)"
          lineHeight="28px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="password"
          {...getOverrideProps(overrides, "Name")}
        ></Text>
      </Flex>
    </View>
  );
}
