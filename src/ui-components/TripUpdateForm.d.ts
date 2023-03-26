/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Trip } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TripUpdateFormInputValues = {
    Destination?: string;
    LeaveDate?: string;
    HomeDate?: string;
    TripName?: string;
};
export declare type TripUpdateFormValidationValues = {
    Destination?: ValidationFunction<string>;
    LeaveDate?: ValidationFunction<string>;
    HomeDate?: ValidationFunction<string>;
    TripName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TripUpdateFormOverridesProps = {
    TripUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Destination?: PrimitiveOverrideProps<TextFieldProps>;
    LeaveDate?: PrimitiveOverrideProps<TextFieldProps>;
    HomeDate?: PrimitiveOverrideProps<TextFieldProps>;
    TripName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TripUpdateFormProps = React.PropsWithChildren<{
    overrides?: TripUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    trip?: Trip;
    onSubmit?: (fields: TripUpdateFormInputValues) => TripUpdateFormInputValues;
    onSuccess?: (fields: TripUpdateFormInputValues) => void;
    onError?: (fields: TripUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TripUpdateFormInputValues) => TripUpdateFormInputValues;
    onValidate?: TripUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TripUpdateForm(props: TripUpdateFormProps): React.ReactElement;
