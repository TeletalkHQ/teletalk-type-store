import type { EventName } from ".";
import type { AvatarSrc, Bio, BlackListItem, ChatId, ContactItem, ContactItemWithEmptyCellphone, Contacts, Countries, EncryptedSession, FullName, FullNameWithUserId, MessageItem, MessageText, NewUser, ParticipantId, PrivateChatItem, PrivateChats, UnknownCellphone, UserData, UserId, UserPublicData, Username, VerificationCode, WelcomeMessage } from "../datatype";


export type IO = {
  input: object;
  output: object;
};

export interface CreateNewUserIO extends IO {
  input: FullName;
  output: {
    session: EncryptedSession;
  };
}

export interface DisconnectIO extends IO {
  input: object;
  output: object;
}

export interface LogoutIO extends IO {
  input: object;
  output: object;
}

export interface SignInIO extends IO {
  input: UnknownCellphone;
  output: {
    session: EncryptedSession;
  };
}

export interface VerifyIO extends IO {
  input: {
    verificationCode: VerificationCode;
  };
  output: {
    newUser: NewUser;
    session: EncryptedSession;
  };
}

export interface GetCountriesIO extends IO {
  input: object;
  output: {
    countries: Countries;
  };
}

export interface GetStuffIO<
  Errors = any,
  Events = any,
  Models = any,
  ValidationModels = any,
> extends IO {
  input: object;
  output: {
    errors: Errors;
    models: Models;
    events: Events;
    validationModels: ValidationModels;
  };
}

export interface GetWelcomeMessageIO extends IO {
  input: object;
  output: {
    welcomeMessage: WelcomeMessage;
  };
}
export interface PingIO extends IO {
  input: object;
  output: {
    pong: string;
  };
}

export interface PongIO extends IO {
  input: object;
  output: { pong: string };
}

export interface GetChatInfoIO extends IO {
  input: {
    chatId: ChatId;
  };
  output: {
    chatInfo: Omit<PrivateChatItem, "messages">;
  };
}

export interface GetPrivateChatIO extends IO {
  input: {
    chatId: ChatId;
  };
  output: {
    privateChat: PrivateChatItem;
  };
}

export interface GetPrivateChatsIO extends IO {
  input: object;
  output: {
    privateChats: PrivateChats;
  };
}

export interface JoinIO extends IO {
  input: object;
  output: object;
}

export interface SendMessageIO extends IO {
  input: {
    messageText: MessageText;
    targetParticipantId: ParticipantId;
  };
  output: {
    chatId: ChatId;
    addedMessage: MessageItem;
  };
}

export interface AddBlockIO extends IO {
  input: {
    userId: UserId;
  };
  output: {
    blockedUser: BlackListItem;
  };
}

export interface AddContactIO extends IO {
  input: ContactItem;
  output: {
    newContact: ContactItem;
  };
}

export interface AddContactWithCellphoneIO extends IO {
  input: UnknownCellphone & FullName;
  output: {
    newContact: ContactItem;
  };
}

export interface AddContactWithUserIdIO extends IO {
  input: FullNameWithUserId;
  output: {
    newContact: ContactItemWithEmptyCellphone;
  };
}

export interface UpdateContactIO extends IO {
  input: FullNameWithUserId;
  output: {
    updatedContact: FullNameWithUserId;
  };
}

export interface GetContactsIO extends IO {
  input: object;
  output: {
    contacts: Contacts;
  };
}

export interface GetOnlineClientsIO extends IO {
  input: object;
  output: {
    onlineClients: {
      userId: UserId;
    }[];
  };
}

export interface GetUserDataIO extends IO {
  input: object;
  output: {
    user: UserData;
  };
}

export interface GetClientStatusIO extends IO {
  input: {
    userId: UserId;
  };
  output: {
    isOnline: boolean;
    userId: UserId;
  };
}

export interface GetPublicDataIO extends IO {
  input: {
    userId: UserId;
  };
  output: {
    publicData: UserPublicData;
  };
}

export interface RemoveBlockIO extends IO {
  input: {
    userId: UserId;
  };
  output: {
    removedBlock: {
      userId: UserId;
    };
  };
}

export interface RemoveContactIO extends IO {
  input: {
    userId: UserId;
  };
  output: {
    removedContact: {
      userId: UserId;
    };
  };
}

export interface UpdatePublicDataIO extends IO {
  input: FullName & {
    bio: Bio;
    username: Username;
  };
  output: {
    userPublicData: UserPublicData;
  };
}

export interface GetAvatarIO extends IO {
  input: {
    userId: UserId;
  };
  output: {
    avatarSrc: AvatarSrc;
    userId: UserId;
  };
}

export interface UpdateAvatarIO extends IO {
  input: {
    avatarSrc: AvatarSrc;
  };
  output: {
    avatarSrc: AvatarSrc;
    userId: UserId;
  };
}

export type IOCollection = { [key in EventName]: IO } & {
  addBlock: AddBlockIO;
  addContact: AddContactIO;
  addContactWithCellphone: AddContactWithCellphoneIO;
  addContactWithUserId: AddContactWithUserIdIO;
  createNewUser: CreateNewUserIO;
  disconnect: DisconnectIO;
  getChatInfo: GetChatInfoIO;
  getClientStatus: GetClientStatusIO;
  getContacts: GetContactsIO;
  getCountries: GetCountriesIO;
  getOnlineClients: GetOnlineClientsIO;
  getPrivateChat: GetPrivateChatIO;
  getPrivateChats: GetPrivateChatsIO;
  getPublicData: GetPublicDataIO;
  getStuff: GetStuffIO;
  getUserData: GetUserDataIO;
  getWelcomeMessage: GetWelcomeMessageIO;
  join: JoinIO;
  logout: LogoutIO;
  ping: PingIO;
  pong: PongIO;
  removeBlock: RemoveBlockIO;
  removeContact: RemoveContactIO;
  sendMessage: SendMessageIO;
  signIn: SignInIO;
  updateAvatar: UpdateAvatarIO;
  updateContact: UpdateContactIO;
  updatePublicData: UpdatePublicDataIO;
  verify: VerifyIO;
  getAvatar: GetAvatarIO;
};