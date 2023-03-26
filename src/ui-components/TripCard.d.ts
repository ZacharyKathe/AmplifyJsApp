/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pack, Trip, GearItem } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TripCardOverridesProps = {
    TripCard?: PrimitiveOverrideProps<ViewProps>;
    "Card background"?: PrimitiveOverrideProps<ViewProps>;
    "Course Info"?: PrimitiveOverrideProps<ViewProps>;
    "2 Packs"?: PrimitiveOverrideProps<TextProps>;
    "Lesson Icon"?: PrimitiveOverrideProps<ViewProps>;
    Group13147?: PrimitiveOverrideProps<ViewProps>;
    Group13148?: PrimitiveOverrideProps<ViewProps>;
    Group13149?: PrimitiveOverrideProps<ViewProps>;
    Vector13150?: PrimitiveOverrideProps<IconProps>;
    Vector13151?: PrimitiveOverrideProps<IconProps>;
    Vector13152?: PrimitiveOverrideProps<IconProps>;
    Vector13153?: PrimitiveOverrideProps<IconProps>;
    Vector13154?: PrimitiveOverrideProps<IconProps>;
    "11/21/2023"?: PrimitiveOverrideProps<TextProps>;
    "Clock Icon"?: PrimitiveOverrideProps<ViewProps>;
    "Livello 5"?: PrimitiveOverrideProps<ViewProps>;
    Vector13158?: PrimitiveOverrideProps<IconProps>;
    Departure?: PrimitiveOverrideProps<TextProps>;
    "Course Text"?: PrimitiveOverrideProps<ViewProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
    PackBags?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TripCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    pack?: Pack;
    trip?: Trip;
    gearItem?: GearItem;
} & {
    overrides?: TripCardOverridesProps | undefined | null;
}>;
export default function TripCard(props: TripCardProps): React.ReactElement;
