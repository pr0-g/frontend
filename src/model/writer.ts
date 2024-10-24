export interface IWriterItem {
  profileImage: string;
  name: string;
}

export interface IWritersList {
  subscriptionItems: IWriterItem[];
  title: string;
  viewAllLink: string;
}
