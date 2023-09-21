export type EventName =
  | "addBlock"
  | "addContactWithCellphone"
  | "addContactWithUserId"
  | "createNewUser"
  | "disconnect"
  | "getChatInfo"
  | "getContacts"
  | "getCountries"
  | "getClientStatus"
  | "getOnlineClients"
  | "getPrivateChat"
  | "getPrivateChats"
  | "getPublicData"
  | "getStuff"
  | "getUserData"
  | "getWelcomeMessage"
  | "join"
  | "logout"
  | "ping"
  | "pong"
  | "removeBlock"
  | "removeContact"
  | "sendMessage"
  | "signIn"
  | "updateAvatar"
  | "updateContact"
  | "updatePublicData"
  | "verify";

export type * from "./io.d.ts";
