/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TripCardProps } from "./TripCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TripCardCollectionOverridesProps = {
    TripCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    TripCard?: TripCardProps;
} & EscapeHatchProps;
export declare type TripCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => TripCardProps;
} & {
    overrides?: TripCardCollectionOverridesProps | undefined | null;
}>;
export default function TripCardCollection(props: TripCardCollectionProps): React.ReactElement;
