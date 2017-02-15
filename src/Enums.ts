/**
 * Module for enums types defined in SenseNet helps you to use enums with dot notation. 
 * 
 * This module is autogenerated from Sense/Net metadata (/Odata.svc/$metadata)
 * 
 * ```
 * let car = new ContentTypes.Car({
 *  Id: 1,
 *  Name: 'MyCar',
 *  DisplayName: 'My Car',
 *  Style: Enum.Style.Cabrio
 * });
 * ```
 */

export module Enums {
    export enum VersioningMode { Option0, Option1, Option2, Option3 }
    export enum InheritableVersioningMode { Option0, Option1, Option2, Option3 }
    export enum ApprovingMode { Option0, Option1, Option2 }
    export enum InheritableApprovingMode { Option0, Option1, Option2 }
    export enum SavingState { Finalized, Creating, Modifying, ModifyingLocked }
    export enum Language { Magyar, English, Deutsch }
    export enum EnableAutofilters { Default, Enabled, Disabled }
    export enum EnableLifespanFilter { Default, Enabled, Disabled }
    export enum DeleteInstanceAfterFinished { DeleteWhenCompleted, DeleteWhenCompletedOrAborted, AlwaysKeep }
    export enum GroupAttachments { email, root, subject, sender }
    export enum SelectionMode { Random, First }
    export enum OrderingMode { DefaultOrder, ValidityOrder }
    export enum SiteLanguage { En, Hu }
    export enum UserLanguage { En, Hu }
    export enum RegisteredUserLanguage { En, Hu }
    export enum NotificationMode { Email, EmailDigest, None }
    export enum EventType { Deadline, Meeting, Demo }
    export enum Style { Sedan, Coupe, Cabrio, Roadster, SUV, Van }
    export enum MemoType { generic, iso, iaudit }
    export enum VerticalAlignment { Top, Middle, Bottom }
    export enum HorizontalAlignment { Left, Center, Right }
    export enum Priority { Option0, Option1, Option2 }
    export enum Status { pending, active, completed, deferred, waiting }
    export enum Result { Approved, Rejected }
    export enum WebContentDemoLanguage { English }
    export enum QueryType { Public, Private }
    export enum Frequency { Option0, Option1, Option2, Option3 }
    export enum SubscriptionLanguage { en, hu }
    export enum Gender { Option0, Female, Male }
    export enum MaritalStatus { Option0, Single, Married }
    export enum WorkflowStatus { Created, Running, Aborted, Completed }
    export enum RegistrationType { client, media, community, public }
}