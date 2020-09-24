interface GraphMessageBody {
  contentType?: string;
  content: string;
}

interface GraphMessageEmailOwner {
  name: string;
  address: string;
}

interface GraphMessageSender {
  emailAddress: GraphMessageEmailOwner;
}

interface GraphMessageFlagStatus {
  flagStatus?: string;
}

export interface GraphMessageValue {
  "@odata.etag"?: string;
  id?: string;
  createdDateTime?: string;
  lastModifiedDateTime?: string;
  changeKey?: string;
  categories?: Array<any>;
  receivedDateTime?: string;
  sentDateTime?: string;
  hasAttachments?: boolean;
  internetMessageId?: string;
  subject: string;
  bodyPreview?: string;
  importance?: string;
  parentFolderId?: string;
  conversationId?: string;
  conversationIndex?: string;
  isDeliveryReceiptRequested?: any;
  isReadReceiptRequested?: boolean;
  isRead?: boolean;
  isDraft?: boolean;
  webLink?: string;
  inferenceClassification?: string;
  body?: GraphMessageBody;
  sender?: GraphMessageSender;
  from?: GraphMessageEmailOwner;
  toRecipients?: Array<any>;
  ccRecipients?: Array<any>;
  bccRecipients?: Array<any>;
  replyTo?: Array<any>;
  flag?: GraphMessageFlagStatus;
}

export interface GraphMessages {
  "@odata.context": string;
  "@odata.nextLink": string;
  value: Array<GraphMessageValue>;
}

export interface GraphUserDetails {
  "@odata.context"?: string;
  displayName?: string;
  surname?: string;
  givenName?: string;
  id?: string;
  userPrincipalName?: string;
  businessPhones?: Array<any>;
  jobTitle?: string | null;
  mail: string | null;
  mobilePhone: string | null;
  officeLocation: string | null;
  preferredLanguage: string | null;
}
