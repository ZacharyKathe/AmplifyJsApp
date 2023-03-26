/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function TripCard(props) {
  const { pack, trip, gearItem, overrides, ...rest } = props;
  return (
    <View
      width="393px"
      height="213px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "TripCard")}
      {...rest}
    >
      <View
        width="393px"
        height="213px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="16px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Card background")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="126px"
        height="102px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="12px"
        left="247px"
        {...getOverrideProps(overrides, "Course Info")}
      >
        <Text
          fontFamily="Open Sans"
          fontSize="16px"
          fontWeight="400"
          color="rgba(110,121,140,1)"
          lineHeight="25px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="77px"
          right="29px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={pack?.name}
          {...getOverrideProps(overrides, "2 Packs")}
        ></Text>
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="77px"
          right="102px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Lesson Icon")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="21.51px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="5.19%"
            right="5.19%"
            {...getOverrideProps(overrides, "Group13147")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="21.51px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group13148")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="21.51px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group13149")}
              >
                <Icon
                  width="11.53px"
                  height="1.88px"
                  viewBox={{ minX: 0, minY: 0, width: 11.53125, height: 1.875 }}
                  paths={[
                    {
                      d: "M11.5313 0.9375C11.5313 0.419719 11.1115 0 10.5938 0L0.937501 0C0.419719 0 0 0.419719 0 0.9375C0 1.45528 0.419719 1.875 0.937501 1.875L10.5938 1.875C11.1115 1.875 11.5313 1.45528 11.5313 0.9375Z",
                      fill: "rgba(110,121,140,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="39.06%"
                  bottom="53.13%"
                  left="17.41%"
                  right="28.98%"
                  {...getOverrideProps(overrides, "Vector13150")}
                ></Icon>
                <Icon
                  width="7.74px"
                  height="1.88px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 7.739501953125,
                    height: 1.875,
                  }}
                  paths={[
                    {
                      d: "M0.937498 0C0.419718 0 0 0.419719 0 0.9375C0 1.45528 0.419718 1.875 0.937498 1.875L6.80207 1.875C7.31985 1.875 7.73956 1.45528 7.73956 0.9375C7.73956 0.419719 7.31985 0 6.80207 0L0.937498 0Z",
                      fill: "rgba(110,121,140,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="54.69%"
                  bottom="37.5%"
                  left="17.41%"
                  right="46.61%"
                  {...getOverrideProps(overrides, "Vector13151")}
                ></Icon>
                <Icon
                  width="19.03px"
                  height="24px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 19.026123046875,
                    height: 24,
                  }}
                  paths={[
                    {
                      d: "M6.88542 22.125L3.75 22.125C2.71613 22.125 1.875 21.2839 1.875 20.25L1.875 3.75C1.875 2.71613 2.71613 1.875 3.75 1.875L15.276 1.875C16.3099 1.875 17.151 2.71613 17.151 3.75L17.151 9.51562C17.151 10.0334 17.5708 10.4531 18.0885 10.4531C18.6063 10.4531 19.026 10.0334 19.026 9.51562L19.026 3.75C19.026 1.68225 17.3438 0 15.276 0L3.75 0C1.68225 0 0 1.68225 0 3.75L0 20.25C0 22.3177 1.68225 24 3.75 24L6.88542 24C7.4032 24 7.82292 23.5803 7.82292 23.0625C7.82292 22.5447 7.4032 22.125 6.88542 22.125Z",
                      fill: "rgba(110,121,140,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="11.54%"
                  {...getOverrideProps(overrides, "Vector13152")}
                ></Icon>
                <Icon
                  width="11.34px"
                  height="11.25px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 11.342529296875,
                    height: 11.248855590820312,
                  }}
                  paths={[
                    {
                      d: "M10.52 0.822555C9.42342 -0.274037 7.63917 -0.274083 6.54328 0.821806L1.39626 5.95742C1.28695 6.0665 1.20633 6.20085 1.16142 6.3486L0.0404987 10.0388C-0.0588763 10.366 0.0277018 10.7213 0.266483 10.966C0.445358 11.1493 0.688359 11.2489 0.937593 11.2489C1.02098 11.2489 1.10517 11.2377 1.18781 11.2148L4.9718 10.1666C5.12751 10.1235 5.26945 10.0408 5.38383 9.92665L10.5201 4.80008C11.6167 3.70349 11.6167 1.91924 10.52 0.822555ZM4.2337 8.42548L2.33001 8.95283L2.88712 7.11866L6.36004 3.65343L7.68614 4.97952L4.2337 8.42548ZM9.1949 3.47371L9.01326 3.65497L7.6874 2.32912L7.86843 2.14846C8.23397 1.78293 8.82872 1.78293 9.19425 2.14846C9.55978 2.51399 9.55978 3.10874 9.1949 3.47371Z",
                      fill: "rgba(110,121,140,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="53.13%"
                  bottom="0%"
                  left="47.27%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector13153")}
                ></Icon>
                <Icon
                  width="11.53px"
                  height="1.88px"
                  viewBox={{ minX: 0, minY: 0, width: 11.53125, height: 1.875 }}
                  paths={[
                    {
                      d: "M10.5938 0L0.937501 0C0.419719 0 0 0.419719 0 0.9375C0 1.45528 0.419719 1.875 0.937501 1.875L10.5938 1.875C11.1115 1.875 11.5313 1.45528 11.5313 0.9375C11.5313 0.419719 11.1115 0 10.5938 0Z",
                      fill: "rgba(110,121,140,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="23.44%"
                  bottom="68.75%"
                  left="17.41%"
                  right="28.98%"
                  {...getOverrideProps(overrides, "Vector13154")}
                ></Icon>
              </View>
            </View>
          </View>
        </View>
        <Text
          fontFamily="Open Sans"
          fontSize="16px"
          fontWeight="400"
          color="rgba(110,121,140,1)"
          lineHeight="25px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="26px"
          right="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={trip?.LeaveDate}
          {...getOverrideProps(overrides, "11/21/2023")}
        ></Text>
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="27px"
          right="102px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Clock Icon")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="23.76px"
            height="23.76px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="1%"
            left="0%"
            right="1%"
            {...getOverrideProps(overrides, "Livello 5")}
          >
            <Icon
              width="23.76px"
              height="23.76px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 23.759765625,
                height: 23.7598876953125,
              }}
              paths={[
                {
                  d: "M19.1899 11.8857C19.1899 11.3828 18.7874 10.9754 18.2913 10.9754L12.792 10.9754L12.792 5.48421L12.792 5.48404C12.792 4.97943 12.3825 4.57015 11.8782 4.57015C11.3736 4.57015 10.9642 4.97943 10.9642 5.48404L10.9642 11.8821C10.9642 12.3869 11.3736 12.7962 11.8782 12.7962L18.2918 12.7962C18.7874 12.7962 19.1899 12.3886 19.1899 11.8857ZM21.9343 11.8799C21.9343 17.4337 17.4327 21.936 11.8801 21.936C6.32715 21.936 1.82592 17.4337 1.82592 11.8799C1.82592 6.32614 6.32715 1.82389 11.8801 1.82389C17.4327 1.82389 21.9343 6.32614 21.9343 11.8799ZM23.7599 11.8799C23.7599 5.31877 18.4411 0 11.8801 0C5.31877 0 0 5.31877 0 11.8799C0 18.4411 5.31877 23.7599 11.8801 23.7599C18.4411 23.7599 23.7599 18.4411 23.7599 11.8799Z",
                  fill: "rgba(110,121,140,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector13158")}
            ></Icon>
          </View>
        </View>
        <Text
          fontFamily="Open Sans"
          fontSize="14px"
          fontWeight="400"
          color="rgba(18,18,18,1)"
          lineHeight="25px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          right="8px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Departure"
          {...getOverrideProps(overrides, "Departure")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="391px"
        height="201.32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="5.63%"
        bottom="-0.15%"
        left="0.51%"
        right="0%"
        {...getOverrideProps(overrides, "Course Text")}
      >
        <Text
          fontFamily="Open Sans"
          fontSize="16px"
          fontWeight="600"
          color="rgba(19,19,19,1)"
          lineHeight="25px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="391px"
          height="32.01px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="84.5px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={trip?.Destination}
          {...getOverrideProps(overrides, "Description")}
        ></Text>
        <Text
          fontFamily="Open Sans"
          fontSize="16px"
          fontWeight="700"
          color="rgba(19,19,19,1)"
          lineHeight="25px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="272.3px"
          height="32.01px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="169.32px"
          left="78.21px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Pack Bags"
          {...getOverrideProps(overrides, "PackBags")}
        ></Text>
        <Text
          fontFamily="DM Serif Display"
          fontSize="22px"
          fontWeight="400"
          color="rgba(8,31,50,1)"
          lineHeight="25px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="389.95px"
          height="50.5px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={trip?.TripName}
          {...getOverrideProps(overrides, "Title")}
        ></Text>
      </View>
    </View>
  );
}
