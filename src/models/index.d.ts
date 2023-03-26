import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";



type EagerGearTypeOption = {
  readonly Hygene?: string | null;
  readonly Shelter?: string | null;
  readonly Clothing?: string | null;
  readonly Climbing?: string | null;
  readonly Cooking?: string | null;
  readonly Hunting?: string | null;
}

type LazyGearTypeOption = {
  readonly Hygene?: string | null;
  readonly Shelter?: string | null;
  readonly Clothing?: string | null;
  readonly Climbing?: string | null;
  readonly Cooking?: string | null;
  readonly Hunting?: string | null;
}

export declare type GearTypeOption = LazyLoading extends LazyLoadingDisabled ? EagerGearTypeOption : LazyGearTypeOption

export declare const GearTypeOption: (new (init: ModelInit<GearTypeOption>) => GearTypeOption)

type EagerTrip = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Trip, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Destination?: string | null;
  readonly LeaveDate?: string | null;
  readonly HomeDate?: string | null;
  readonly Packs?: (Pack | null)[] | null;
  readonly TripName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTrip = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Trip, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Destination?: string | null;
  readonly LeaveDate?: string | null;
  readonly HomeDate?: string | null;
  readonly Packs: AsyncCollection<Pack>;
  readonly TripName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Trip = LazyLoading extends LazyLoadingDisabled ? EagerTrip : LazyTrip

export declare const Trip: (new (init: ModelInit<Trip>) => Trip) & {
  copyOf(source: Trip, mutator: (draft: MutableModel<Trip>) => MutableModel<Trip> | void): Trip;
}

type EagerGearItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GearItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Type?: GearTypeOption | null;
  readonly Weight?: number | null;
  readonly packID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGearItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GearItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Type?: GearTypeOption | null;
  readonly Weight?: number | null;
  readonly packID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GearItem = LazyLoading extends LazyLoadingDisabled ? EagerGearItem : LazyGearItem

export declare const GearItem: (new (init: ModelInit<GearItem>) => GearItem) & {
  copyOf(source: GearItem, mutator: (draft: MutableModel<GearItem>) => MutableModel<GearItem> | void): GearItem;
}

type EagerPack = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pack, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly PackSize?: number | null;
  readonly PackType?: string | null;
  readonly Weight?: number | null;
  readonly GearItems?: (GearItem | null)[] | null;
  readonly tripID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPack = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pack, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly PackSize?: number | null;
  readonly PackType?: string | null;
  readonly Weight?: number | null;
  readonly GearItems: AsyncCollection<GearItem>;
  readonly tripID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Pack = LazyLoading extends LazyLoadingDisabled ? EagerPack : LazyPack

export declare const Pack: (new (init: ModelInit<Pack>) => Pack) & {
  copyOf(source: Pack, mutator: (draft: MutableModel<Pack>) => MutableModel<Pack> | void): Pack;
}