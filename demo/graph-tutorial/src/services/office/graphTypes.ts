interface graphMessageBody {
    "contentType"?: string,
    "content": string
}

interface graphMessageEmailOwner {
    "name": string,
    "address": string
}

interface graphMessageSender {
    "emailAddress": graphMessageEmailOwner
}

interface graphMessageFlagStatus {
    "flagStatus"?: string
}

export interface graphMessageValue {
    "@odata.etag"?: string,
    "id"?: string,
    "createdDateTime"?: string,
    "lastModifiedDateTime"?: string,
    "changeKey"?: string,
    "categories"?: Array<any>,
    "receivedDateTime"?: string,
    "sentDateTime"?: string,
    "hasAttachments"?: boolean,
    "internetMessageId"?: string,
    "subject": string,
    "bodyPreview"?: string,
    "importance"?: string,
    "parentFolderId"?: string,
    "conversationId"?: string,
    "conversationIndex"?: string,
    "isDeliveryReceiptRequested"?: any,
    "isReadReceiptRequested"?: boolean,
    "isRead"?: boolean,
    "isDraft"?: boolean,
    "webLink"?: string,
    "inferenceClassification"?: string,
    "body"?: graphMessageBody,
    "sender"?: graphMessageSender,
    "from"?: graphMessageEmailOwner
    "toRecipients"?: Array<Object>,
    "ccRecipients"?: Array<any>,
    "bccRecipients"?: Array<any>,
    "replyTo"?: Array<any>,
    "flag"?: graphMessageFlagStatus
}

export interface graphMessages {
    "@odata.context": string,
    "@odata.nextLink": string,
    "value": Array<graphMessageValue>
}

