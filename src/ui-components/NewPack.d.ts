/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewPackInputValues = {
    name?: string;
    PackSize?: number;
    PackType?: string;
    Weight?: number;
};
export declare type NewPackValidationValues = {
    name?: ValidationFunction<string>;
    PackSize?: ValidationFunction<number>;
    PackType?: ValidationFunction<string>;
    Weight?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewPackOverridesProps = {
    NewPackGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    PackSize?: PrimitiveOverrideProps<TextFieldProps>;
    PackType?: PrimitiveOverrideProps<TextFieldProps>;
    Weight?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewPackProps = React.PropsWithChildren<{
    overrides?: NewPackOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewPackInputValues) => NewPackInputValues;
    onSuccess?: (fields: NewPackInputValues) => void;
    onError?: (fields: NewPackInputValues, errorMessage: string) => void;
    onChange?: (fields: NewPackInputValues) => NewPackInputValues;
    onValidate?: NewPackValidationValues;
} & React.CSSProperties>;
export default function NewPack(props: NewPackProps): React.ReactElement;
