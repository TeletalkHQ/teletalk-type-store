import { CreatedAt, Id, StringMap } from "..";
import { countries } from "../../variables/countries";

export type AvatarSrc = string;
export type Bio = string;
export type CLientId = string;
export type FirstName = string;
export type IsActive = boolean;
export type LastName = string;
export type NewUser = boolean;
export type PhoneNumber = string;
export type UserId = Id;
export type Username = string;
export type VerificationCode = string;

export type Countries = typeof countries;
export type CountryItem = (typeof countries)[number];
export type CountryName = CountryItem["countryName"];
export type CountryCode = CountryItem["countryCode"];
export type CountryShortName = CountryItem["countryShortName"];

export interface Cellphone {
  countryCode: CountryCode;
  countryName: CountryName;
  phoneNumber: PhoneNumber;
}
export interface EmptyCellphone {
  countryCode: "";
  countryName: "";
  phoneNumber: "";
}
export type ExtendedCellphone = {
  countryCode: CountryCode | "";
  countryName: CountryName | "";
  phoneNumber: PhoneNumber | "";
} & StringMap;

export interface FullName {
  firstName: FirstName;
  lastName: LastName;
}
export interface EmptyFullName {
  firstName: "";
  lastName: "";
}
export type ExtendedFullName = FullName & StringMap;
export type FullNameWithUserId = FullName & {
  userId: UserId;
};

export interface ContactItem extends FullName {
  countryCode: CountryCode | "";
  countryName: CountryName | "";
  phoneNumber: PhoneNumber | "";
  userId: UserId;
}

export type ContactItemWithCellphone = Cellphone & FullName;
export type ExtendedContactItem = ContactItem & StringMap;
export type EmptyContact = EmptyCellphone & EmptyFullName & { userId: "" };
export type Contacts = ContactItem[];

export interface ClientItem {
  clientId: CLientId;
}
export type Clients = ClientItem[];

export interface Status {
  isActive: IsActive;
}

export interface BlackListItem {
  userId: UserId;
}
export type BlackList = BlackListItem[];

export interface UserData extends ContactItem {
  avatarSrc: AvatarSrc;
  bio: Bio;
  blacklist: BlackList;
  clients: Clients;
  contacts: Contacts;
  createdAt: CreatedAt;
  status: Status;
  username: Username;
}
export type EmptyUserData = Omit<
  UserData,
  "countryCode" | "countryName" | "phoneNumber"
> &
  EmptyCellphone & {
    status: Status;
  };
export type ExtendedUserData = UserData & StringMap;

export interface UserPublicData {
  bio: Bio;
  firstName: FirstName;
  lastName: LastName;
  userId: UserId;
  username: Username;
}
export type ExtendedUserPublicData = UserPublicData & StringMap;

export interface ClientStatus {
  connections: number;
  userId: UserId;
}

export type ClientStatusList = {
  [key: string]: ClientStatus;
};
