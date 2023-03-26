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
export declare type TripCreateFormInputValues = {
    Destination?: string;
    LeaveDate?: string;
    HomeDate?: string;
    TripName?: string;
};
export declare type TripCreateFormValidationValues = {
    Destination?: ValidationFunction<string>;
    LeaveDate?: ValidationFunction<string>;
    HomeDate?: ValidationFunction<string>;
    TripName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TripCreateFormOverridesProps = {
    TripCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Destination?: PrimitiveOverrideProps<TextFieldProps>;
    LeaveDate?: PrimitiveOverrideProps<TextFieldProps>;
    HomeDate?: PrimitiveOverrideProps<TextFieldProps>;
    TripName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TripCreateFormProps = React.PropsWithChildren<{
    overrides?: TripCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TripCreateFormInputValues) => TripCreateFormInputValues;
    onSuccess?: (fields: TripCreateFormInputValues) => void;
    onError?: (fields: TripCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TripCreateFormInputValues) => TripCreateFormInputValues;
    onValidate?: TripCreateFormValidationValues;
} & React.CSSProperties>;
export default function TripCreateForm(props: TripCreateFormProps): React.ReactElement;
