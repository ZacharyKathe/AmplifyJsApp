/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubmitbuttonOverridesProps = {
    Submitbutton?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 12"?: PrimitiveOverrideProps<ViewProps>;
    Submit?: PrimitiveOverrideProps<TextProps>;
    UserName?: PrimitiveOverrideProps<ViewProps>;
    Email?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type SubmitbuttonProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SubmitbuttonOverridesProps | undefined | null;
}>;
export default function Submitbutton(props: SubmitbuttonProps): React.ReactElement;
