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
export declare type CreateUserZKInputValues = {
    UserName?: string;
    Email?: string;
};
export declare type CreateUserZKValidationValues = {
    UserName?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateUserZKOverridesProps = {
    CreateUserZKGrid?: PrimitiveOverrideProps<GridProps>;
    UserName?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateUserZKProps = React.PropsWithChildren<{
    overrides?: CreateUserZKOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateUserZKInputValues) => CreateUserZKInputValues;
    onSuccess?: (fields: CreateUserZKInputValues) => void;
    onError?: (fields: CreateUserZKInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateUserZKInputValues) => CreateUserZKInputValues;
    onValidate?: CreateUserZKValidationValues;
} & React.CSSProperties>;
export default function CreateUserZK(props: CreateUserZKProps): React.ReactElement;
