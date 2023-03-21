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
export declare type NewTripInputValues = {
    Destination?: string;
    LeaveDate?: string;
    HomeDate?: string;
};
export declare type NewTripValidationValues = {
    Destination?: ValidationFunction<string>;
    LeaveDate?: ValidationFunction<string>;
    HomeDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewTripOverridesProps = {
    NewTripGrid?: PrimitiveOverrideProps<GridProps>;
    Destination?: PrimitiveOverrideProps<TextFieldProps>;
    LeaveDate?: PrimitiveOverrideProps<TextFieldProps>;
    HomeDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewTripProps = React.PropsWithChildren<{
    overrides?: NewTripOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewTripInputValues) => NewTripInputValues;
    onSuccess?: (fields: NewTripInputValues) => void;
    onError?: (fields: NewTripInputValues, errorMessage: string) => void;
    onChange?: (fields: NewTripInputValues) => NewTripInputValues;
    onValidate?: NewTripValidationValues;
} & React.CSSProperties>;
export default function NewTrip(props: NewTripProps): React.ReactElement;
